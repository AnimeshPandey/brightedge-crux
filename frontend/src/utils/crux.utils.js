import {
  readResults,
  readResultUrl,
  readResultFormFactor,
  readResultMetrics,
} from '../readers';
import { ERROR_MESSAGES } from '../constants/crux.constants';

export function parseUrls(urlsText) {
  return urlsText
    .split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0);
}

export function transformCruxResults(data, formFactor) {
  const results = readResults(data);
  if (!results || results.length === 0) {
    return { error: ERROR_MESSAGES.NO_DATA };
  }
  const transformedResults = results.map(result => ({
    url: readResultUrl(result),
    formFactor: readResultFormFactor(result) || formFactor,
    metrics: readResultMetrics(result),
  }));
  return {
    success: true,
    data: transformedResults,
  };
}
