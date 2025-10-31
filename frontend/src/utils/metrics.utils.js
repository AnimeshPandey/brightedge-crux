import { asNumber } from './general.utils';
import {
  METRIC_DISPLAY_ORDER,
  METRIC_DEFINITIONS,
  FILTER_TYPES,
  SORT_PROPERTIES,
  SORT_ORDERS,
} from '../constants/metrics.constants';

export function sortMetrics(metrics, sortBy, sortOrder) {
  const sorted = [...metrics].sort((a, b) => {
    if (sortBy === SORT_PROPERTIES.NAME) {
      return a.name.localeCompare(b.name);
    }
    const aVal = asNumber(a.value);
    const bVal = asNumber(b.value);
    return aVal - bVal;
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
