import { useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import { queryCrux } from './services/api.service';
import { transformCruxResult } from './utils/crux.utils';
import SearchForm from './components/SearchForm';
import ErrorMessage from './components/ErrorMessage';
import CruxDataTable from './components/CruxDataTable';

export default function App() {
  const [url, setUrl] = useState('https://developer.chrome.com');
  const [formFactor, setFormFactor] = useState('');
  const [originFallback, setOriginFallback] = useState(true);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);

  async function onSearch(e) {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResult(null);

    try {
      const data = await queryCrux({ urls: [url], formFactor, originFallback });
      const transformed = transformCruxResult(data, formFactor);

      if (transformed.error) {
        setError(transformed.error);
      } else {
        setResult(transformed.data);
      }
    } catch (err) {
      setError(err.message || String(err));
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          CrUX Explorer
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Enter a URL and fetch Chrome UX Report p75 metrics via your local API.
        </Typography>
      </Box>

      <SearchForm
        url={url}
        setUrl={setUrl}
        formFactor={formFactor}
        setFormFactor={setFormFactor}
        originFallback={originFallback}
        setOriginFallback={setOriginFallback}
        onSearch={onSearch}
        loading={loading}
      />

      <ErrorMessage error={error} />

      <CruxDataTable result={result} />
    </Container>
  );
}
