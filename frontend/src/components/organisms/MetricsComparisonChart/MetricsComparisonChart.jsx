import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Paper } from '@mui/material';
import PropTypes from 'prop-types';
import { SPACING } from '../../../constants/theme.constants';
import { METRIC_DEFINITIONS } from '../../../constants/metrics.constants';
import { buildComparisonChartOptions } from '../../../utils/chart.utils';

export default function MetricsComparisonChart({ results }) {
  if (!results || results.length === 0) {
    return null;
  }

  const options = buildComparisonChartOptions(results, METRIC_DEFINITIONS);

  return (
    <Paper elevation={2} sx={{ p: SPACING.MD, mt: SPACING.MD, borderRadius: 2 }}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </Paper>
  );
}

MetricsComparisonChart.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      formFactor: PropTypes.string,
      metrics: PropTypes.object.isRequired,
    })
  ).isRequired,
};
