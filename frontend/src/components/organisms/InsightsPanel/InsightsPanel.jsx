import { Box, Paper, Typography, Alert, AlertTitle, Chip } from '@mui/material';
import PropTypes from 'prop-types';
import { generateInsights } from '../../../utils/metrics.utils';
import { SPACING, COLORS, GRADIENTS } from '../../../constants/theme.constants';
import { PERFORMANCE_RATINGS } from '../../../constants/metrics.constants';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

const RATING_CONFIG = {
  [PERFORMANCE_RATINGS.POOR]: {
    severity: 'error',
    label: 'Poor',
    color: COLORS.CHART_RED,
  },
  [PERFORMANCE_RATINGS.NEEDS_IMPROVEMENT]: {
    severity: 'warning',
    label: 'Needs Improvement',
    color: COLORS.CHART_ORANGE,
  },
};

export default function InsightsPanel({ metrics }) {
  const insights = generateInsights(metrics);
  if (insights.length === 0) {
    return (
      <Paper
        elevation={0}
        sx={{
          p: SPACING.MD,
          mt: SPACING.MD,
          background: GRADIENTS.PRIMARY,
          color: 'white',
          borderRadius: 2,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <CheckCircleIcon sx={{ fontSize: 32 }} />
          <Box>
            <Typography variant="h6" gutterBottom sx={{ mb: 0.5, fontWeight: 600 }}>
              All Metrics Performing Well!
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.95 }}>
              All Core Web Vitals are within the "Good" threshold. Great job!
            </Typography>
          </Box>
        </Box>
      </Paper>
    );
  }
  return (
    <Box sx={{ mt: SPACING.MD }}>
      <Paper
        elevation={0}
        sx={{
          p: SPACING.SM,
          mb: SPACING.SM,
          background: GRADIENTS.PRIMARY_HORIZONTAL,
          color: 'white',
          borderRadius: 2,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <LightbulbIcon sx={{ fontSize: 24 }} />
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Performance Insights & Recommendations
          </Typography>
        </Box>
      </Paper>
      {insights.map((insight, index) => {
        const config = RATING_CONFIG[insight.rating];
        return (
          <Alert
            key={index}
            severity={config.severity}
            sx={{
              mb: SPACING.SM,
              borderRadius: 2,
              '& .MuiAlert-icon': {
                fontSize: 24,
              },
            }}
          >
            <AlertTitle sx={{ fontWeight: 600 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
                <span>{insight.metricName}</span>
                <Chip
                  label={config.label}
                  size="small"
                  sx={{
                    backgroundColor: config.color,
                    color: 'white',
                    fontWeight: 600,
                    fontSize: '0.75rem',
                  }}
                />
                <Typography variant="body2" component="span" sx={{ ml: 'auto', fontWeight: 600 }}>
                  {insight.value !== null ? `${insight.value}${insight.unit}` : 'N/A'}
                </Typography>
              </Box>
            </AlertTitle>
            <Typography variant="body2">
              <strong>Recommendation:</strong> {insight.recommendation}
            </Typography>
          </Alert>
        );
      })}
    </Box>
  );
}

InsightsPanel.propTypes = {
  metrics: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      rating: PropTypes.string,
    })
  ).isRequired,
};
