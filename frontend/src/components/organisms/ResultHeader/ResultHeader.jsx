import { Paper, Typography, Box, Chip } from '@mui/material';
import PropTypes from 'prop-types';
import { COMMON_STYLES, SPACING, GRADIENTS } from '../../../constants/theme.constants';
import { FORM_FACTOR_LABELS } from '../../../constants/crux.constants';
import { PerformanceGauge } from '../../molecules';
import LanguageIcon from '@mui/icons-material/Language';
import DevicesIcon from '@mui/icons-material/Devices';

export default function ResultHeader({ url, formFactor, performanceScore }) {
  return (
    <Paper
      elevation={2}
      sx={{
        ...COMMON_STYLES.resultHeader,
        background: GRADIENTS.PRIMARY,
        color: 'white',
        borderRadius: 2,
        mb: SPACING.MD,
      }}
    >
      <Box sx={{ ...COMMON_STYLES.resultHeaderItem, flex: '2 1 auto' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
          <LanguageIcon sx={{ fontSize: 18, opacity: 0.9 }} />
          <Typography variant="subtitle2" sx={{ opacity: 0.9, fontWeight: 600 }}>
            URL
          </Typography>
        </Box>
        <Typography variant="body1" sx={{ fontWeight: 600, wordBreak: 'break-all' }}>
          {url}
        </Typography>
      </Box>
      <Box sx={{ ...COMMON_STYLES.resultHeaderItem, flex: '0 1 auto' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
          <DevicesIcon sx={{ fontSize: 18, opacity: 0.9 }} />
          <Typography variant="subtitle2" sx={{ opacity: 0.9, fontWeight: 600 }}>
            Form Factor
          </Typography>
        </Box>
        <Chip
          label={FORM_FACTOR_LABELS[formFactor] || formFactor || 'Any'}
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            color: 'white',
            fontWeight: 600,
            backdropFilter: 'blur(10px)',
          }}
        />
      </Box>
      {performanceScore !== null && performanceScore !== undefined && (
        <Box sx={{
          flex: '0 1 auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minWidth: 200,
        }}>
          <PerformanceGauge score={performanceScore} size="small" />
        </Box>
      )}
    </Paper>
  );
}

ResultHeader.propTypes = {
  url: PropTypes.string.isRequired,
  formFactor: PropTypes.string,
  performanceScore: PropTypes.number,
};
