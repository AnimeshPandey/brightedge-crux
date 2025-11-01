import { asNumber } from './general.utils';
import {
  METRIC_DISPLAY_ORDER,
  METRIC_DEFINITIONS,
  METRIC_IDS,
  FILTER_TYPES,
  SORT_PROPERTIES,
  SORT_ORDERS,
  PERFORMANCE_RATINGS,
  METRIC_RECOMMENDATIONS,
} from '../constants/metrics.constants';

export function sortMetrics(metrics, sortBy, sortOrder) {
  if (sortBy === SORT_PROPERTIES.DEFAULT) {
    return metrics;
  }
  const sorted = [...metrics].sort((a, b) => {
    if (sortBy === SORT_PROPERTIES.NAME) {
      return a.name.localeCompare(b.name);
    }
    if (sortBy === SORT_PROPERTIES.VALUE) {
      const aVal = asNumber(a.value);
      const bVal = asNumber(b.value);
      return aVal - bVal;
    }
    if (sortBy === SORT_PROPERTIES.AVERAGE) {
      const aVal = asNumber(a.average);
      const bVal = asNumber(b.average);
      return aVal - bVal;
    }
    if (sortBy === SORT_PROPERTIES.SUM) {
      const aVal = asNumber(a.sum);
      const bVal = asNumber(b.sum);
      return aVal - bVal;
    }
    return 0;
  });
  return sortOrder === SORT_ORDERS.DESC ? sorted.reverse() : sorted;
}

export function filterMetrics(metrics, filterType, threshold) {
  if (filterType === FILTER_TYPES.ALL) return metrics;
  const thresholdNum = asNumber(threshold);
  return metrics.filter(metric => {
    const value = asNumber(metric.value);
    if (filterType === FILTER_TYPES.GREATER_THAN) return value > thresholdNum;
    if (filterType === FILTER_TYPES.LESS_THAN) return value < thresholdNum;
    if (filterType === FILTER_TYPES.EQUAL_TO) return value === thresholdNum;
    return true;
  });
}

export function processMetrics(metrics, filterType, threshold, sortBy, sortOrder) {
  const filtered = filterMetrics(metrics, filterType, threshold);
  return sortMetrics(filtered, sortBy, sortOrder);
}

export function toggleSortOrder(currentOrder) {
  return currentOrder === SORT_ORDERS.ASC ? SORT_ORDERS.DESC : SORT_ORDERS.ASC;
}

export function buildMetricsFromResult(result) {
  if (!result?.metrics) return [];
  return METRIC_DISPLAY_ORDER.map(id => ({
    id,
    ...METRIC_DEFINITIONS[id],
    value: result.metrics[id]?.p75 ?? null,
  }));
}

export function calculateSummaryMetrics(results) {
  if (!results || results.length === 0) return [];
  const metricSums = {};
  const metricCounts = {};
  results.forEach(result => {
    if (!result?.metrics) return;
    METRIC_DISPLAY_ORDER.forEach(id => {
      const value = result.metrics[id]?.p75;
      const numValue = asNumber(value);
      if (numValue !== null && !isNaN(numValue)) {
        metricSums[id] = (metricSums[id] || 0) + numValue;
        metricCounts[id] = (metricCounts[id] || 0) + 1;
      }
    });
  });
  return METRIC_DISPLAY_ORDER.map(id => {
    const definition = METRIC_DEFINITIONS[id];
    const count = metricCounts[id] || 0;
    const sum = metricSums[id];
    const average = count > 0 && sum !== undefined ? sum / count : null;
    const roundedAverage = average !== null ? (definition.unit === '' ? Math.round(average * 100) / 100 : Math.round(average)) : null;
    const roundedSum = sum !== undefined ? (definition.unit === '' ? Math.round(sum * 100) / 100 : Math.round(sum)) : null;
    return {
      id,
      ...definition,
      average: roundedAverage,
      sum: roundedSum,
      count,
    };
  });
}

export function getPerformanceRating(metricId, value) {
  if (value === null || value === undefined) return null;
  const definition = METRIC_DEFINITIONS[metricId];
  if (!definition?.thresholds) return null;
  const numValue = asNumber(value);
  if (numValue === null) return null;
  if (numValue <= definition.thresholds.good) return PERFORMANCE_RATINGS.GOOD;
  if (numValue <= definition.thresholds.poor) return PERFORMANCE_RATINGS.NEEDS_IMPROVEMENT;
  return PERFORMANCE_RATINGS.POOR;
}

export function getMetricRecommendation(metricId, rating) {
  if (!rating || rating === PERFORMANCE_RATINGS.GOOD) return null;
  return METRIC_RECOMMENDATIONS[metricId]?.[rating] || null;
}

export function generateInsights(metrics) {
  const insights = [];
  metrics.forEach(metric => {
    const rating = getPerformanceRating(metric.id, metric.value);
    const recommendation = getMetricRecommendation(metric.id, rating);
    if (recommendation) {
      insights.push({
        metricId: metric.id,
        metricName: metric.name,
        value: metric.value,
        unit: metric.unit,
        rating,
        recommendation,
      });
    }
  });
  return insights;
}

export function calculatePerformanceScore(metrics) {
  const METRIC_WEIGHTS = {
    [METRIC_IDS.LCP]: 0.25,
    [METRIC_IDS.CLS]: 0.25,
    [METRIC_IDS.INP]: 0.20,
    [METRIC_IDS.FCP]: 0.15,
    [METRIC_IDS.TTFB]: 0.10,
    [METRIC_IDS.FID]: 0.05,
  };
  let totalScore = 0;
  let totalWeight = 0;
  metrics.forEach(metric => {
    const rating = getPerformanceRating(metric.id, metric.value);
    if (rating === null) return;
    const weight = METRIC_WEIGHTS[metric.id] || 0;
    let score = 0;
    if (rating === PERFORMANCE_RATINGS.GOOD) score = 100;
    else if (rating === PERFORMANCE_RATINGS.NEEDS_IMPROVEMENT) score = 50;
    else if (rating === PERFORMANCE_RATINGS.POOR) score = 0;
    totalScore += score * weight;
    totalWeight += weight;
  });
  if (totalWeight === 0) return null;
  return Math.round(totalScore / totalWeight);
}
