import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '../.env') });

import express from 'express';
import cors from 'cors';
import { queryCrux } from './services/crux.service.js';

const app = express();
app.use(cors());
app.use(express.json());

console.log('CRUX key present:', Boolean(process.env.CRUX_API_KEY));

app.get('/health', (_req, res) => res.json({ ok: true }));

/**
 * POST /api/crux
 * Body: { urls: string[], formFactor?: 'PHONE'|'DESKTOP'|'TABLET', originFallback?: boolean }
 * - Calls CrUX per URL.
 * - Responds with per-item status and metrics when available.
 */
app.post('/api/crux', async (req, res) => {
  try {
    const { urls, formFactor, originFallback } = req.body || {};
    if (!Array.isArray(urls) || urls.length === 0) {
      return res.status(400).json({ error: 'Body must include a non-empty array "urls".' });
    }

    const tasks = urls.map(async (u) => {
      const url = String(u || '').trim();
      if (!url) return { input: u, status: 'error', error: 'Empty URL' };

      // Try URL-level first
      try {
        const result = await queryCrux({ url, formFactor });
        return { input: url, status: 'ok', ...result };
      } catch (e) {
        // Optionally try origin fallback
        if (originFallback) {
          try {
            const origin = new URL(url).origin;
            const result = await queryCrux({ origin, formFactor });
            return { input: url, status: 'ok', note: 'origin_fallback', ...result };
          } catch (e2) {
            return { input: url, status: 'error', error: e2?.response?.data?.error?.message || e2.message };
          }
        }
        return { input: url, status: 'error', error: e?.response?.data?.error?.message || e.message };
      }
    });

    const results = await Promise.all(tasks);
    res.json({ results });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: e?.message || 'Internal server error' });
  }
});

const port = Number(process.env.PORT) || 8080;
app.listen(port, () => console.log(`API listening on ${port}`));
