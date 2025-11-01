import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import 'highcharts/highcharts-more';
import 'highcharts/modules/solid-gauge';
import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { SPACING } from '../../../constants/theme.constants';
import { GAUGE_DIMENSIONS } from '../../../constants/chart.constants';
import { buildGaugeChartOptions } from '../../../utils/chart.utils';

const GAUGE_SIZES = Object.keys(GAUGE_DIMENSIONS);

export default function PerformanceGauge({ score, size = 'medium' }) {
  if (score === null || score === undefined) {
    return (
      <Box sx={{ textAlign: 'center', p: SPACING.MD }}>
        <Typography variant="body2" color="text.secondary">
          No performance data available
        </Typography>
      </Box>
    );
  }

  const options = buildGaugeChartOptions(score, size);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </Box>
  );
}

PerformanceGauge.propTypes = {
  score: PropTypes.number,
  size: PropTypes.oneOf(GAUGE_SIZES),
};
