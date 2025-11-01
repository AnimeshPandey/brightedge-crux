import { TableRow, TableCell } from '@mui/material';
import PropTypes from 'prop-types';
import { MetricName, MetricValue, MetricDescription } from '../../atoms';
import { COMMON_STYLES } from '../../../constants/theme.constants';

export default function MetricRow({ metric }) {
  return (
    <TableRow sx={COMMON_STYLES.tableRow}>
      <TableCell>
        <MetricName name={metric.name} />
      </TableCell>
      <TableCell>
        <MetricValue value={metric.value} unit={metric.unit} />
      </TableCell>
      <TableCell>
        <MetricDescription description={metric.description} />
      </TableCell>
    </TableRow>
  );
}

MetricRow.propTypes = {
  metric: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    unit: PropTypes.string,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
