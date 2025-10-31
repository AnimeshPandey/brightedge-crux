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
  },
  [METRIC_IDS.FCP]: {
    name: 'First Contentful Paint (FCP)',
    description: 'Measures when first content appears',
    unit: 'ms',
  },
  [METRIC_IDS.INP]: {
    name: 'Interaction to Next Paint (INP)',
    description: 'Measures responsiveness',
    unit: 'ms',
  },
  [METRIC_IDS.FID]: {
    name: 'First Input Delay (FID)',
    description: 'Measures interactivity',
    unit: 'ms',
  },
  [METRIC_IDS.CLS]: {
    name: 'Cumulative Layout Shift (CLS)',
    description: 'Measures visual stability',
    unit: '',
  },
  [METRIC_IDS.TTFB]: {
    name: 'Time to First Byte (TTFB)',
    description: 'Measures server response time',
    unit: 'ms',
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
  NAME: 'name',
  VALUE: 'value',
};

export const SORT_ORDERS = {
  ASC: 'asc',
  DESC: 'desc',
};
