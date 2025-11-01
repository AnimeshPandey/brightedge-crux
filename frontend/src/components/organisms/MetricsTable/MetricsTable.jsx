import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';
import PropTypes from 'prop-types';
import { SortableTableHeader } from '../../molecules';
import { MetricName, MetricValue, MetricDescription } from '../../atoms';
import { EmptyState } from '../../atoms';
import { COMMON_STYLES } from '../../../constants/theme.constants';
import { TABLE_COLUMNS } from '../../../constants/metrics.constants';

const DEFAULT_COLUMNS = [
  {
    key: TABLE_COLUMNS.NAME,
    label: 'Metric',
    sortable: true,
    sortKey: TABLE_COLUMNS.NAME,
    render: (metric) => <MetricName name={metric.name} />
  },
  {
    key: TABLE_COLUMNS.VALUE,
    label: 'Value (p75)',
    sortable: true,
    sortKey: TABLE_COLUMNS.VALUE,
    render: (metric) => <MetricValue value={metric.value} unit={metric.unit} />
  },
  {
    key: TABLE_COLUMNS.DESCRIPTION,
    label: 'Description',
    sortable: false,
    render: (metric) => <MetricDescription description={metric.description} />
  },
];

export default function MetricsTable({ metrics, sortBy, sortOrder, onSort, columns = DEFAULT_COLUMNS }) {
  if (metrics.length === 0) {
    return <EmptyState message="No metrics to display" />;
  }
  return (
    <TableContainer component={Paper} elevation={1}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow sx={COMMON_STYLES.tableHeaderRow}>
            {columns.map((column) => (
              column.sortable ? (
                <SortableTableHeader
                  key={column.key}
                  label={column.label}
                  active={sortBy === column.sortKey}
                  direction={sortOrder}
                  onClick={() => onSort(column.sortKey)}
                />
              ) : (
                <TableCell key={column.key}>{column.label}</TableCell>
              )
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {metrics.map((metric) => (
            <TableRow key={metric.id} sx={COMMON_STYLES.tableRow}>
              {columns.map((column) => (
                <TableCell key={column.key}>
                  {column.render(metric)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

MetricsTable.propTypes = {
  metrics: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      unit: PropTypes.string,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  sortBy: PropTypes.string.isRequired,
  sortOrder: PropTypes.string.isRequired,
  onSort: PropTypes.func.isRequired,
};
