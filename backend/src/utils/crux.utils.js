function p75(metric) {
  return metric?.percentiles?.p75 ?? null;
}
// Normalize CRUX response into a tidy object
export function normalizeCrux(data) {
  const metrics = data?.record?.metrics || {};
  const key = data?.record?.key || {};
  return {
    url: key.url || key.origin || null,
    formFactor: key.formFactor || null,
    metrics: {
      lcp_p75: p75(metrics.largest_contentful_paint),
      fid_p75: p75(metrics.first_input_delay),
      inp_p75: p75(metrics.interaction_to_next_paint),
      cls_p75: p75(metrics.cumulative_layout_shift),
      fcp_p75: p75(metrics.first_contentful_paint),
      ttfb_p75: p75(metrics.experimental_time_to_first_byte),
    },
    raw: data, // keep for debugging if needed
  };
}