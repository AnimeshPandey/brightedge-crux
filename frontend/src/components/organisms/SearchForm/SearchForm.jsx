import { Paper, Box } from '@mui/material';
import { UrlInput, SearchButton, FormFactorSelect, OriginFallbackCheckbox } from '../../atoms';
import { COMMON_STYLES } from '../../../constants/theme.constants';

export default function SearchForm({ urls, setUrls, formFactor, setFormFactor, originFallback, setOriginFallback, onSearch, loading }) {
  return (
    <Paper sx={COMMON_STYLES.searchForm} elevation={2}>
      <Box component="form" onSubmit={onSearch} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <UrlInput value={urls} onChange={setUrls} />
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
          <FormFactorSelect value={formFactor} onChange={setFormFactor} />
          <OriginFallbackCheckbox
            checked={originFallback}
            onChange={(e) => setOriginFallback(e.target.checked)}
          />
          <SearchButton loading={loading} type="submit" />
        </Box>
      </Box>
    </Paper>
  );
}
