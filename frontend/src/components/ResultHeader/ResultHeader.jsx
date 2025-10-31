export default function ResultHeader({ url, formFactor, note }) {
  return (
    <div style={{ padding: 12, background: '#fafafa', borderBottom: '1px solid #e5e5e5', display: 'flex', justifyContent: 'space-between' }}>
      <div>
        <div style={{ fontWeight: 600 }}>{url}</div>
        <div style={{ fontSize: 12, color: '#666' }}>
          Form factor: {formFactor} {note ? `• ${note}` : ''}
        </div>
      </div>
    </div>
  );
}

