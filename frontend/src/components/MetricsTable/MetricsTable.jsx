import MetricRow from '../MetricRow';

export default function MetricsTable({ metrics }) {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <tbody>
        <MetricRow label="Largest Contentful Paint (p75)" value={metrics.lcp} suffix=" ms" />
        <MetricRow label="First Contentful Paint (p75)" value={metrics.fcp} suffix=" ms" />
        <MetricRow label="Interaction to Next Paint (p75)" value={metrics.inp} suffix=" ms" />
        <MetricRow label="First Input Delay (p75)" value={metrics.fid} suffix=" ms" />
        <MetricRow label="Cumulative Layout Shift (p75)" value={metrics.cls} />
        <MetricRow label="Time to First Byte (p75)" value={metrics.ttfb} suffix=" ms" />
      </tbody>
    </table>
  );
}

