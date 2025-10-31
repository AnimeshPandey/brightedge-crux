import { Paper, Box, Typography } from '@mui/material';
import { FilterTypeSelect, ThresholdInput } from '../../molecules';
import { FILTER_TYPES } from '../../../constants/metrics.constants';
import { COMMON_STYLES } from '../../../constants/theme.constants';

export default function FilterToolbar({ filterType, setFilterType, threshold, setThreshold, count }) {
  return (
    <Paper sx={COMMON_STYLES.filterToolbar} elevation={1}>
      <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
        <FilterTypeSelect value={filterType} onChange={setFilterType} />
        <ThresholdInput
          value={threshold}
          onChange={setThreshold}
          disabled={filterType === FILTER_TYPES.ALL}
        />
        <Typography variant="body2" color="text.secondary" sx={{ ml: 'auto', fontWeight: 500 }}>
          Showing {count} metric{count !== 1 ? 's' : ''}
        </Typography>
      </Box>
    </Paper>
  );
}
