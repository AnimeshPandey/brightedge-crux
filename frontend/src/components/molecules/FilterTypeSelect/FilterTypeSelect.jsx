import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import PropTypes from 'prop-types';
import { FILTER_TYPES } from '../../../constants/metrics.constants';

export default function FilterTypeSelect({ value, onChange }) {
  return (
    <FormControl sx={{ minWidth: 150 }}>
      <InputLabel>Filter</InputLabel>
      <Select value={value} label="Filter" onChange={(e) => onChange(e.target.value)}>
        <MenuItem value={FILTER_TYPES.ALL}>All Metrics</MenuItem>
        <MenuItem value={FILTER_TYPES.GREATER_THAN}>Greater Than</MenuItem>
        <MenuItem value={FILTER_TYPES.LESS_THAN}>Less Than</MenuItem>
        <MenuItem value={FILTER_TYPES.EQUAL_TO}>Equal To</MenuItem>
      </Select>
    </FormControl>
  );
}

FilterTypeSelect.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
