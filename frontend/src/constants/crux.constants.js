export const FORM_FACTORS = {
  ANY: '',
  PHONE: 'PHONE',
  DESKTOP: 'DESKTOP',
  TABLET: 'TABLET',
};

export const FORM_FACTOR_LABELS = {
  [FORM_FACTORS.ANY]: 'Any',
  [FORM_FACTORS.PHONE]: 'Phone',
  [FORM_FACTORS.DESKTOP]: 'Desktop',
  [FORM_FACTORS.TABLET]: 'Tablet',
};

export const FORM_FACTOR_OPTIONS = [
  { value: FORM_FACTORS.ANY, label: FORM_FACTOR_LABELS[FORM_FACTORS.ANY] },
  { value: FORM_FACTORS.PHONE, label: FORM_FACTOR_LABELS[FORM_FACTORS.PHONE] },
  { value: FORM_FACTORS.DESKTOP, label: FORM_FACTOR_LABELS[FORM_FACTORS.DESKTOP] },
  { value: FORM_FACTORS.TABLET, label: FORM_FACTOR_LABELS[FORM_FACTORS.TABLET] },
];

export const DEFAULTS = {
  URLS: 'https://developer.intuit.com\nhttps://quickbooks.intuit.com\nhttps://turbotax.intuit.com',
  FORM_FACTOR: FORM_FACTORS.ANY,
  ORIGIN_FALLBACK: true,
};

export const APP_TEXT = {
  TITLE: 'CrUX Explorer',
  SUBTITLE: 'Explore Chrome User Experience Report data for multiple URLs',
  SEARCH_BUTTON: 'Search',
  LOADING_BUTTON: 'Loading…',
  URL_LABEL: 'URLs (one per line)',
  FORM_FACTOR_LABEL: 'Form Factor',
  ORIGIN_FALLBACK_LABEL: 'Use origin fallback',
  SUMMARY_TITLE: 'Summary Statistics',
  SUMMARY_SUBTITLE: 'Averages across all URLs',
};

export const API_STATUS = {
  OK: 'ok',
  ERROR: 'error',
};

export const ERROR_MESSAGES = {
  NO_DATA: 'No data available for this URL and form factor combination',
  API_ERROR: 'Failed to fetch CrUX data',
};
