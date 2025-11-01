import { useState } from 'react';
import { Container, Box } from '@mui/material';
import { queryCrux } from '../../../services/api.service';
import { parseUrls, transformCruxResults } from '../../../utils/crux.utils';
import { validateUrls, getUrlValidationMessage } from '../../../utils/validation.utils';
import { DEFAULTS, APP_TEXT } from '../../../constants/crux.constants';
import { GRADIENTS } from '../../../constants/theme.constants';
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
  const [urlErrors, setUrlErrors] = useState([]);

  async function onSearch(e) {
    e.preventDefault();
    setLoading(true);
    setError('');
    setUrlErrors([]);
    setResults([]);

    const validation = validateUrls(urls);

    if (!validation.valid) {
      setError(getUrlValidationMessage(validation));
      setUrlErrors(validation.invalidUrls);
      setLoading(false);
      return;
    }

    try {
      const urlList = parseUrls(urls);
      const data = await queryCrux({ urls: urlList, formFactor, originFallback });
      const transformed = transformCruxResults(data, formFactor);

      if (hasTransformationError(transformed)) {
        setError(readTransformationError(transformed));
      } else {
        const transformedResults = readTransformationData(transformed);

        if (!transformedResults || transformedResults.length === 0) {
          setError('No data available for any of the URLs');
          return;
        }

        // Filter results that have actual metric data
        const successfulResults = transformedResults.filter(result => {
          return result && result.url && result.metrics && Object.keys(result.metrics).length > 0;
        });

        if (successfulResults.length === 0) {
          setError('No data available for any of the URLs. Try enabling "Origin Fallback" option.');
          return;
        }

        // Normalize URLs to handle trailing slashes and case differences
        const normalizeUrl = (url) => {
          try {
            const urlObj = new URL(url);
            return urlObj.origin + urlObj.pathname.replace(/\/$/, '');
          } catch {
            return url.toLowerCase().replace(/\/$/, '');
          }
        };

        // Check for partial results (some URLs succeeded, some failed)
        const normalizedSuccessUrls = successfulResults.map(r => normalizeUrl(r.url));
        const failedUrls = urlList.filter(url =>
          !normalizedSuccessUrls.some(successUrl =>
            normalizeUrl(url) === successUrl
          )
        );

        if (failedUrls.length > 0 && failedUrls.length < urlList.length) {
          setError(`Partial results: No data available for ${failedUrls.length} URL(s): ${failedUrls.join(', ')}`);
        }

        setResults(successfulResults);
      }
    } catch (err) {
      setError(err.message || String(err));
    } finally {
      setLoading(false);
    }
  }
  return (
    <Box sx={{
      minHeight: '100vh',
      background: GRADIENTS.PAGE_BACKGROUND,
      py: 4,
    }}>
      <Container maxWidth="lg">
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
          urlError={urlErrors.length > 0}
          urlHelperText={urlErrors.length > 0 ? `${urlErrors.length} invalid URL(s) found` : ''}
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
    </Box>
  );
}
