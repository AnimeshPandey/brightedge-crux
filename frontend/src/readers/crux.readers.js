export function readResults(data) {
  return data?.results ?? [];
}

export function readFirstResult(data) {
  const results = readResults(data);
  return results[0] ?? null;
}

export function readResultUrl(result) {
  return result?.url ?? '';
}

export function readResultFormFactor(result) {
  return result?.formFactor ?? '';
}

export function readResultMetrics(result) {
  return result?.metrics ?? {};
}

export function hasTransformationError(transformed) {
  return transformed?.error != null;
}

export function readTransformationError(transformed) {
  return transformed?.error ?? 'Unknown error';
}

export function readTransformationData(transformed) {
  return transformed?.data ?? null;
}
