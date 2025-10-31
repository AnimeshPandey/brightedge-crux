import { useState } from 'react';
import { Container } from '@mui/material';
import { queryCrux } from '../../../services/api.service';
import { transformCruxResult } from '../../../utils/crux.utils';
import { DEFAULTS, APP_TEXT } from '../../../constants/crux.constants';
import {
  hasTransformationError,
  readTransformationError,
  readTransformationData,
} from '../../../readers';
import { PageHeader } from '../../molecules';
import { SearchForm, ErrorMessage, CruxDataTable } from '../../organisms';

export default function CruxExplorerPage() {
  const [url, setUrl] = useState(DEFAULTS.URL);
  const [formFactor, setFormFactor] = useState(DEFAULTS.FORM_FACTOR);
  const [originFallback, setOriginFallback] = useState(DEFAULTS.ORIGIN_FALLBACK);
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
      if (hasTransformationError(transformed)) {
        setError(readTransformationError(transformed));
      } else {
        setResult(readTransformationData(transformed));
      }
    } catch (err) {
      setError(err.message || String(err));
    } finally {
      setLoading(false);
    }
  }
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <PageHeader
        title={APP_TEXT.TITLE}
        subtitle={APP_TEXT.SUBTITLE}
      />
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
