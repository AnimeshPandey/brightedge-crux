import ResultHeader from '../ResultHeader';
import MetricsTable from '../MetricsTable';

export default function ResultsDisplay({ result }) {
  if (!result) return null;

  return (
    <div style={{ border: '1px solid #e5e5e5', borderRadius: 12, overflow: 'hidden' }}>
      <ResultHeader 
        url={result.url} 
        formFactor={result.formFactor} 
        note={result.note} 
      />
      <MetricsTable 
        metrics={{
          lcp: result.lcp,
          fcp: result.fcp,
          inp: result.inp,
          fid: result.fid,
          cls: result.cls,
          ttfb: result.ttfb,
        }} 
      />
    </div>
  );
}

