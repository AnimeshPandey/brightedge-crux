import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';
import { SortableTableHeader } from '../../molecules';
import { MetricRow } from '../../molecules';
import { EmptyState } from '../../atoms';
import { COMMON_STYLES } from '../../../constants/theme.constants';
import { SORT_PROPERTIES } from '../../../constants/metrics.constants';

export default function MetricsTable({ metrics, sortBy, sortOrder, onSort }) {
  if (metrics.length === 0) {
    return <EmptyState message="No metrics to display" />;
  }
  return (
    <TableContainer component={Paper} elevation={1}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow sx={COMMON_STYLES.tableHeaderRow}>
            <SortableTableHeader
              label="Metric"
              active={sortBy === SORT_PROPERTIES.NAME}
              direction={sortOrder}
              onClick={() => onSort(SORT_PROPERTIES.NAME)}
            />
            <SortableTableHeader
              label="Value (p75)"
              active={sortBy === SORT_PROPERTIES.VALUE}
              direction={sortOrder}
              onClick={() => onSort(SORT_PROPERTIES.VALUE)}
            />
            <TableCell>Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {metrics.map((metric) => (
            <MetricRow key={metric.id} metric={metric} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
