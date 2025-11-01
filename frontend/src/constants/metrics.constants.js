export const METRIC_IDS = {
  LCP: 'lcp',
  FCP: 'fcp',
  INP: 'inp',
  FID: 'fid',
  CLS: 'cls',
  TTFB: 'ttfb',
};

export const METRIC_DEFINITIONS = {
  [METRIC_IDS.LCP]: {
    name: 'Largest Contentful Paint (LCP)',
    description: 'Measures loading performance',
    unit: 'ms',
    thresholds: { good: 2500, poor: 4000 },
  },
  [METRIC_IDS.FCP]: {
    name: 'First Contentful Paint (FCP)',
    description: 'Measures when first content appears',
    unit: 'ms',
    thresholds: { good: 1800, poor: 3000 },
  },
  [METRIC_IDS.INP]: {
    name: 'Interaction to Next Paint (INP)',
    description: 'Measures responsiveness',
    unit: 'ms',
    thresholds: { good: 200, poor: 500 },
  },
  [METRIC_IDS.FID]: {
    name: 'First Input Delay (FID)',
    description: 'Measures interactivity',
    unit: 'ms',
    thresholds: { good: 100, poor: 300 },
  },
  [METRIC_IDS.CLS]: {
    name: 'Cumulative Layout Shift (CLS)',
    description: 'Measures visual stability',
    unit: '',
    thresholds: { good: 0.1, poor: 0.25 },
  },
  [METRIC_IDS.TTFB]: {
    name: 'Time to First Byte (TTFB)',
    description: 'Measures server response time',
    unit: 'ms',
    thresholds: { good: 800, poor: 1800 },
  },
};

export const METRIC_DISPLAY_ORDER = [
  METRIC_IDS.LCP,
  METRIC_IDS.FCP,
  METRIC_IDS.INP,
  METRIC_IDS.FID,
  METRIC_IDS.CLS,
  METRIC_IDS.TTFB,
];

export const FILTER_TYPES = {
  ALL: 'all',
  GREATER_THAN: 'gt',
  LESS_THAN: 'lt',
  EQUAL_TO: 'eq',
};

export const SORT_PROPERTIES = {
  DEFAULT: 'default',
  NAME: 'name',
  VALUE: 'value',
  AVERAGE: 'average',
  SUM: 'sum',
};

export const SORT_ORDERS = {
  ASC: 'asc',
  DESC: 'desc',
};

export const PERFORMANCE_RATINGS = {
  GOOD: 'good',
  NEEDS_IMPROVEMENT: 'needs-improvement',
  POOR: 'poor',
};

export const TABLE_COLUMNS = {
  NAME: 'name',
  VALUE: 'value',
  DESCRIPTION: 'description',
};

export const METRIC_RECOMMENDATIONS = {
  [METRIC_IDS.LCP]: {
    [PERFORMANCE_RATINGS.POOR]: 'Optimize images, reduce server response time, eliminate render-blocking resources',
    [PERFORMANCE_RATINGS.NEEDS_IMPROVEMENT]: 'Consider preloading critical resources and using a CDN',
  },
  [METRIC_IDS.FCP]: {
    [PERFORMANCE_RATINGS.POOR]: 'Reduce server response time, eliminate render-blocking CSS/JS, use font-display: swap',
    [PERFORMANCE_RATINGS.NEEDS_IMPROVEMENT]: 'Optimize critical rendering path and minimize main thread work',
  },
  [METRIC_IDS.INP]: {
    [PERFORMANCE_RATINGS.POOR]: 'Break up long tasks, defer non-critical JavaScript, use web workers',
    [PERFORMANCE_RATINGS.NEEDS_IMPROVEMENT]: 'Optimize event handlers and reduce JavaScript execution time',
  },
  [METRIC_IDS.FID]: {
    [PERFORMANCE_RATINGS.POOR]: 'Reduce JavaScript execution time, break up long tasks, use code splitting',
    [PERFORMANCE_RATINGS.NEEDS_IMPROVEMENT]: 'Defer unused JavaScript and minimize third-party code',
  },
  [METRIC_IDS.CLS]: {
    [PERFORMANCE_RATINGS.POOR]: 'Set explicit dimensions for images/videos, avoid inserting content above existing content',
    [PERFORMANCE_RATINGS.NEEDS_IMPROVEMENT]: 'Use CSS transform animations instead of layout-triggering properties',
  },
  [METRIC_IDS.TTFB]: {
    [PERFORMANCE_RATINGS.POOR]: 'Optimize server performance, use CDN, enable caching, reduce redirects',
    [PERFORMANCE_RATINGS.NEEDS_IMPROVEMENT]: 'Consider edge caching and optimize database queries',
  },
};
