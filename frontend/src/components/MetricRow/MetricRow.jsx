function MetricRow({ label, value, suffix = '' }) {
  return (
    <tr>
      <td style={{ padding: '6px 10px', borderBottom: '1px solid #eee' }}>{label}</td>
      <td style={{ padding: '6px 10px', borderBottom: '1px solid #eee', textAlign: 'right' }}>
        {value ?? '—'}{value != null ? suffix : ''}
      </td>
    </tr>
  );
}

export default MetricRow;