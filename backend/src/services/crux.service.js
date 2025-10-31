import axios from 'axios';

import { normalizeCrux } from '../utils/crux.utils.js';

const API = 'https://chromeuxreport.googleapis.com/v1/records:queryRecord';

// Call the CrUX API for either a URL or an origin
export async function queryCrux({ url, origin, formFactor }) {
  const key = process.env.CRUX_API_KEY;
  if (!key) {
    throw new Error('Missing CRUX_API_KEY in environment');
  }
  const body = {};
  if (url) body.url = url;
  if (origin) body.origin = origin;
  if (formFactor) body.formFactor = formFactor;

  console.log('Calling CRuX:', `${API}?key=${key}`, body);

  const { data } = await axios.post(`${API}?key=${key}`, body, { timeout: 15000 });
  return normalizeCrux(data);
}
