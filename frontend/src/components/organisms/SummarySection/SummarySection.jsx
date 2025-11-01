import { useState } from 'react';
import { Box, Paper, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { MetricsTable } from '../MetricsTable';
import { MetricsComparisonChart } from '../MetricsComparisonChart';
import { MetricName, MetricValue } from '../../atoms';
import { calculateSummaryMetrics, processMetrics, toggleSortOrder } from '../../../utils/metrics.utils';
import { SPACING } from '../../../constants/theme.constants';
import { APP_TEXT } from '../../../constants/crux.constants';
import { SORT_PROPERTIES, SORT_ORDERS } from '../../../constants/metrics.constants';

const SUMMARY_COLUMNS = [
  { key: 'name', label: 'Metric', sortable: true, sortKey: SORT_PROPERTIES.NAME, render: (metric) => <MetricName name={metric.name} /> },
  { key: 'average', label: 'Average', sortable: true, sortKey: SORT_PROPERTIES.AVERAGE, render: (metric) => <MetricValue value={metric.average} unit={metric.unit} /> },
  { key: 'sum', label: 'Sum', sortable: true, sortKey: SORT_PROPERTIES.SUM, render: (metric) => <MetricValue value={metric.sum} unit={metric.unit} /> },
];

export default function SummarySection({ results }) {
  const [sortBy, setSortBy] = useState(SORT_PROPERTIES.DEFAULT);
  const [sortOrder, setSortOrder] = useState(SORT_ORDERS.ASC);
  if (!results || results.length === 0) return null;
  const summaryMetrics = calculateSummaryMetrics(results);
  const processedMetrics = processMetrics(summaryMetrics, 'all', '', sortBy, sortOrder);
  function handleSort(property) {
    if (sortBy === property) {
      setSortOrder(toggleSortOrder(sortOrder));
    } else {
      setSortBy(property);
      setSortOrder(SORT_ORDERS.ASC);
    }
  }
  return (
    <Box sx={{ mt: SPACING.LG }}>
      <Paper sx={{ p: SPACING.MD, mb: SPACING.SM, backgroundColor: 'primary.main', color: 'white' }}>
        <Typography variant="h5" gutterBottom>
          {APP_TEXT.SUMMARY_TITLE}
        </Typography>
        <Typography variant="body2">
          {APP_TEXT.SUMMARY_SUBTITLE} ({results.length} URL{results.length !== 1 ? 's' : ''})
        </Typography>
      </Paper>
      <MetricsComparisonChart results={results} />
      <MetricsTable
        metrics={processedMetrics}
        sortBy={sortBy}
        sortOrder={sortOrder}
        onSort={handleSort}
        columns={SUMMARY_COLUMNS}
      />
    </Box>
  );
}

SummarySection.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      formFactor: PropTypes.string,
      metrics: PropTypes.object.isRequired,
    })
  ).isRequired,
};
