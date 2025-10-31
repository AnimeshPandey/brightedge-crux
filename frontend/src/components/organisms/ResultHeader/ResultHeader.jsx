import { Paper, Typography, Box } from '@mui/material';
import { COMMON_STYLES } from '../../../constants/theme.constants';
import { FORM_FACTOR_LABELS } from '../../../constants/crux.constants';

export default function ResultHeader({ url, formFactor }) {
  return (
    <Paper sx={COMMON_STYLES.resultHeader}>
      <Box sx={COMMON_STYLES.resultHeaderItem}>
        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
          URL
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: 500 }}>
          {url}
        </Typography>
      </Box>
      <Box sx={COMMON_STYLES.resultHeaderItem}>
        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
          Form Factor
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: 500 }}>
          {FORM_FACTOR_LABELS[formFactor] || formFactor || 'Any'}
        </Typography>
      </Box>
    </Paper>
  );
}
