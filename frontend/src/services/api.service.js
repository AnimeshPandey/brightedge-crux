// API base URL from environment variable or default to localhost
const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:8080';

export async function queryCrux({ urls, formFactor, originFallback }) {
  const res = await fetch(`${API_BASE}/api/crux`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ urls, formFactor: formFactor || undefined, originFallback: !!originFallback }),
  });
  if (!res.ok) {
    const txt = await res.text().catch(() => '');
    throw new Error(`HTTP ${res.status} ${res.statusText}: ${txt}`);
  }
  return res.json();
}
