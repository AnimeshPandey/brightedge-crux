function p75(metric) {
  return metric?.percentiles?.p75 ?? null;
}

export function normalizeCrux(data) {
  const metrics = data?.record?.metrics || {};
  const key = data?.record?.key || {};
  return {
    url: key.url || key.origin || null,
    formFactor: key.formFactor || null,
    metrics: {
      lcp: { p75: p75(metrics.largest_contentful_paint) },
      fcp: { p75: p75(metrics.first_contentful_paint) },
      inp: { p75: p75(metrics.interaction_to_next_paint) },
      fid: { p75: p75(metrics.first_input_delay) },
      cls: { p75: p75(metrics.cumulative_layout_shift) },
      ttfb: { p75: p75(metrics.experimental_time_to_first_byte) },
    },
  };
}