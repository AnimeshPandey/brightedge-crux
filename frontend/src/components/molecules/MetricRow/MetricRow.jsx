import { TableRow, TableCell } from '@mui/material';
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
