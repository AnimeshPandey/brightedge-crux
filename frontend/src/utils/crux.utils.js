import {
  readFirstResult,
  readResultUrl,
  readResultFormFactor,
  readResultMetrics,
} from '../readers';
import { ERROR_MESSAGES } from '../constants/crux.constants';

export function transformCruxResult(data, formFactor) {
  const firstResult = readFirstResult(data);
  if (!firstResult) {
    return { error: ERROR_MESSAGES.NO_DATA };
  }
  const url = readResultUrl(firstResult);
  const resultFormFactor = readResultFormFactor(firstResult);
  const metrics = readResultMetrics(firstResult);
  return {
    success: true,
    data: {
      url,
      formFactor: resultFormFactor || formFactor,
      metrics,
    },
  };
}
