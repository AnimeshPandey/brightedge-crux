import { useState } from 'react';
import { Container, Box } from '@mui/material';
import { queryCrux } from '../../../services/api.service';
import { parseUrls, transformCruxResults } from '../../../utils/crux.utils';
import { DEFAULTS, APP_TEXT } from '../../../constants/crux.constants';
import {
  hasTransformationError,
  readTransformationError,
  readTransformationData,
} from '../../../readers';
import { PageHeader } from '../../molecules';
import { SearchForm, ErrorMessage, CruxDataTable, SummarySection } from '../../organisms';

export default function CruxExplorerPage() {
  const [urls, setUrls] = useState(DEFAULTS.URLS);
  const [formFactor, setFormFactor] = useState(DEFAULTS.FORM_FACTOR);
  const [originFallback, setOriginFallback] = useState(DEFAULTS.ORIGIN_FALLBACK);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [results, setResults] = useState([]);
  async function onSearch(e) {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResults([]);
    try {
      const urlList = parseUrls(urls);
      if (urlList.length === 0) {
        setError('Please enter at least one URL');
        return;
      }
      const data = await queryCrux({ urls: urlList, formFactor, originFallback });
      const transformed = transformCruxResults(data, formFactor);
      if (hasTransformationError(transformed)) {
        setError(readTransformationError(transformed));
      } else {
        setResults(readTransformationData(transformed));
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
        urls={urls}
        setUrls={setUrls}
        formFactor={formFactor}
        setFormFactor={setFormFactor}
        originFallback={originFallback}
        setOriginFallback={setOriginFallback}
        onSearch={onSearch}
        loading={loading}
      />
      <ErrorMessage error={error} />
      <Box>
        {results.map((result, index) => (
          <Box key={index} sx={{ mb: 4 }}>
            <CruxDataTable result={result} />
          </Box>
        ))}
      </Box>
      <SummarySection results={results} />
    </Container>
  );
}
