import { useEffect, useState } from 'react';

export default function App() {
  const [health, setHealth] = useState('checking...');

  useEffect(() => {
    fetch('http://localhost:8080/health')
      .then(r => r.json())
      .then(d => setHealth(d.ok ? 'ok' : 'not ok'))
      .catch(() => setHealth('error'));
  }, []);

  return (
    <div style={{ padding: 24, fontFamily: 'Inter, system-ui' }}>
      <h1>CrUX Explorer (skeleton, JS)</h1>
      <p>Backend health: <b>{health}</b></p>
    </div>
  );
}
