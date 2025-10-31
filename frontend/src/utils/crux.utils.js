import { asNumber } from './general.utils';

/**
 * Transforms raw CrUX API response into a normalized result object
 * @param {Object} apiResponse - The response from the CrUX API
 * @param {string} formFactor - The form factor used in the request
 * @returns {Object|null} Normalized result object or null if invalid
 */
export function transformCruxResult(apiResponse, formFactor) {
  const first = (apiResponse?.results || [])[0];
  
  if (!first) {
    return { error: 'No response received.' };
  }
  
  if (first.status !== 'ok') {
    return { error: first.error || 'Unknown error' };
  }
  
  const m = first.metrics || {};
  
  return {
    success: true,
    data: {
      input: first.input,
      url: first.url,
      formFactor: first.formFactor || formFactor || 'ANY',
      lcp: asNumber(m.lcp_p75),
      fcp: asNumber(m.fcp_p75),
      inp: asNumber(m.inp_p75),
      fid: asNumber(m.fid_p75),
      cls: asNumber(m.cls_p75),
      ttfb: asNumber(m.ttfb_p75),
      note: first.note || null,
    },
  };
}

