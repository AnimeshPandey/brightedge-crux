import { Paper, Box } from '@mui/material';
import PropTypes from 'prop-types';
import { UrlInput, SearchButton, FormFactorSelect, OriginFallbackCheckbox } from '../../atoms';
import { SPACING, GRADIENTS } from '../../../constants/theme.constants';

export default function SearchForm({
  urls,
  setUrls,
  formFactor,
  setFormFactor,
  originFallback,
  setOriginFallback,
  onSearch,
  loading,
  urlError = false,
  urlHelperText = '',
}) {
  return (
    <Paper
      elevation={3}
      sx={{
        mb: SPACING.LG,
        p: SPACING.MD,
        borderRadius: 3,
        background: GRADIENTS.PRIMARY,
      }}
    >
      <Box component="form" onSubmit={onSearch} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <UrlInput
          value={urls}
          onChange={setUrls}
          error={urlError}
          helperText={urlHelperText}
        />
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

SearchForm.propTypes = {
  urls: PropTypes.string.isRequired,
  setUrls: PropTypes.func.isRequired,
  formFactor: PropTypes.string.isRequired,
  setFormFactor: PropTypes.func.isRequired,
  originFallback: PropTypes.bool.isRequired,
  setOriginFallback: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  urlError: PropTypes.bool,
  urlHelperText: PropTypes.string,
};
