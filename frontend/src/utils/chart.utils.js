import {
  PERFORMANCE_THRESHOLDS,
  PERFORMANCE_LABELS,
  GAUGE_DIMENSIONS,
  GAUGE_FONT_SIZES,
  HIGHCHARTS_COMMON_CONFIG,
  GAUGE_CHART_CONFIG,
  COMPARISON_CHART_CONFIG,
  CHART_TITLES,
  CHART_TEXT_SHADOWS,
  CHART_COLORS,
  CHART_METRIC_IDS,
} from '../constants/chart.constants';

/**
 * Get performance label based on score
 * @param {number} score - Performance score (0-100)
 * @returns {string} Performance label
 */
export function getPerformanceLabel(score) {
  if (score >= PERFORMANCE_THRESHOLDS.GOOD) {
    return PERFORMANCE_LABELS.GOOD;
  }
  if (score >= PERFORMANCE_THRESHOLDS.NEEDS_IMPROVEMENT) {
    return PERFORMANCE_LABELS.NEEDS_IMPROVEMENT;
  }
  return PERFORMANCE_LABELS.POOR;
}

/**
 * Get performance color based on score
 * @param {number} score - Performance score (0-100)
 * @returns {string} Color hex code
 */
export function getPerformanceColor(score) {
  if (score >= PERFORMANCE_THRESHOLDS.GOOD) {
    return CHART_COLORS.GOOD;
  }
  if (score >= PERFORMANCE_THRESHOLDS.NEEDS_IMPROVEMENT) {
    return CHART_COLORS.WARNING;
  }
  return CHART_COLORS.ERROR;
}

/**
 * Get gauge chart dimensions for a given size
 * @param {string} size - Size key (small, medium, large)
 * @returns {object} Width and height
 */
export function getGaugeDimensions(size = 'medium') {
  return GAUGE_DIMENSIONS[size] || GAUGE_DIMENSIONS.medium;
}

/**
 * Get gauge chart font sizes for a given size
 * @param {string} size - Size key (small, medium, large)
 * @returns {object} Font sizes for different elements
 */
export function getGaugeFontSizes(size = 'medium') {
  return GAUGE_FONT_SIZES[size] || GAUGE_FONT_SIZES.medium;
}

/**
 * Build Highcharts options for performance gauge
 * @param {number} score - Performance score (0-100)
 * @param {string} size - Size key (small, medium, large)
 * @returns {object} Highcharts configuration object
 */
export function buildGaugeChartOptions(score, size = 'medium') {
  const { width, height } = getGaugeDimensions(size);
  const fontSizes = getGaugeFontSizes(size);
  const label = getPerformanceLabel(score);

  return {
    ...HIGHCHARTS_COMMON_CONFIG,
    chart: {
      ...GAUGE_CHART_CONFIG.chart,
      height,
      width,
    },
    title: {
      text: CHART_TITLES.PERFORMANCE_SCORE,
      verticalAlign: 'top',
      y: 15,
      style: {
        fontSize: fontSizes.title,
        fontWeight: '600',
        color: CHART_COLORS.WHITE,
      },
    },
    pane: GAUGE_CHART_CONFIG.pane,
    tooltip: GAUGE_CHART_CONFIG.tooltip,
    yAxis: GAUGE_CHART_CONFIG.yAxis,
    plotOptions: GAUGE_CHART_CONFIG.plotOptions,
    series: [
      {
        name: 'Performance',
        data: [score],
        dataLabels: {
          enabled: true,
          format:
            '<div style="text-align:center;line-height:1.3;margin-top:-10px">' +
            `<div style="font-size:${fontSizes.score};font-weight:bold;color:${CHART_COLORS.WHITE};text-shadow:${CHART_TEXT_SHADOWS.STRONG}">{y}</div>` +
            `<div style="font-size:${fontSizes.label};color:${CHART_COLORS.WHITE};font-weight:600;text-shadow:${CHART_TEXT_SHADOWS.LIGHT};margin-top:2px">` +
            label +
            '</div>' +
            '</div>',
        },
      },
    ],
  };
}

/**
 * Build series data for comparison chart
 * @param {Array} results - Array of result objects
 * @param {Array} metricIds - Array of metric IDs to include
 * @returns {Array} Series data for Highcharts
 */
export function buildComparisonChartSeries(results, metricIds = CHART_METRIC_IDS) {
  return results.map((result, index) => {
    const data = metricIds.map(metricId => {
      const value = result.metrics?.[metricId]?.p75;
      return value !== null && value !== undefined ? value : null;
    });

    return {
      name: result.url || `URL ${index + 1}`,
      data: data,
    };
  });
}

/**
 * Build categories for comparison chart
 * @param {Array} metricIds - Array of metric IDs
 * @param {object} metricDefinitions - Metric definitions object
 * @returns {Array} Category labels
 */
export function buildComparisonChartCategories(metricIds, metricDefinitions) {
  return metricIds.map(id => metricDefinitions[id]?.name || id.toUpperCase());
}

/**
 * Build Highcharts options for metrics comparison chart
 * @param {Array} results - Array of result objects
 * @param {object} metricDefinitions - Metric definitions object
 * @returns {object} Highcharts configuration object
 */
export function buildComparisonChartOptions(results, metricDefinitions) {
  const metricIds = CHART_METRIC_IDS;
  const categories = buildComparisonChartCategories(metricIds, metricDefinitions);
  const series = buildComparisonChartSeries(results, metricIds);

  return {
    ...HIGHCHARTS_COMMON_CONFIG,
    chart: COMPARISON_CHART_CONFIG.chart,
    title: {
      text: CHART_TITLES.METRICS_COMPARISON,
      style: COMPARISON_CHART_CONFIG.title.style,
    },
    xAxis: {
      ...COMPARISON_CHART_CONFIG.xAxis,
      categories,
    },
    yAxis: COMPARISON_CHART_CONFIG.yAxis,
    tooltip: COMPARISON_CHART_CONFIG.tooltip,
    plotOptions: COMPARISON_CHART_CONFIG.plotOptions,
    series,
  };
}

