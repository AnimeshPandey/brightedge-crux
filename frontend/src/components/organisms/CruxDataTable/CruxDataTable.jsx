import { useState } from 'react';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import { ResultHeader } from '../ResultHeader';
import { FilterToolbar } from '../FilterToolbar';
import { MetricsTable } from '../MetricsTable';
import { InsightsPanel } from '../InsightsPanel';
import { FILTER_TYPES, SORT_PROPERTIES, SORT_ORDERS } from '../../../constants/metrics.constants';
import { processMetrics, toggleSortOrder, buildMetricsFromResult, calculatePerformanceScore } from '../../../utils/metrics.utils';

export default function CruxDataTable({ result }) {
  const [filterType, setFilterType] = useState(FILTER_TYPES.ALL);
  const [threshold, setThreshold] = useState('');
  const [sortBy, setSortBy] = useState(SORT_PROPERTIES.DEFAULT);
  const [sortOrder, setSortOrder] = useState(SORT_ORDERS.ASC);
  if (!result) return null;
  const allMetrics = buildMetricsFromResult(result);
  const processedMetrics = processMetrics(allMetrics, filterType, threshold, sortBy, sortOrder);
  const performanceScore = calculatePerformanceScore(allMetrics);
  function handleSort(property) {
    if (sortBy === property) {
      setSortOrder(toggleSortOrder(sortOrder));
    } else {
      setSortBy(property);
      setSortOrder(SORT_ORDERS.ASC);
    }
  }
  return (
    <Box>
      <ResultHeader url={result.url} formFactor={result.formFactor} performanceScore={performanceScore} />
      <InsightsPanel metrics={allMetrics} />
      <FilterToolbar
        filterType={filterType}
        setFilterType={setFilterType}
        threshold={threshold}
        setThreshold={setThreshold}
        count={processedMetrics.length}
      />
      <MetricsTable
        metrics={processedMetrics}
        sortBy={sortBy}
        sortOrder={sortOrder}
        onSort={handleSort}
      />
    </Box>
  );
}

CruxDataTable.propTypes = {
  result: PropTypes.shape({
    url: PropTypes.string.isRequired,
    formFactor: PropTypes.string,
    metrics: PropTypes.object.isRequired,
  }).isRequired,
};
