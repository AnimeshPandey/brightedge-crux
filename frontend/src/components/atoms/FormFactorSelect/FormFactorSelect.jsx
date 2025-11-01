import { FormControl, Select, MenuItem, Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { FORM_FACTOR_OPTIONS } from '../../../constants/crux.constants';

export default function FormFactorSelect({ value, onChange, label = 'Form Factor' }) {
  return (
    <Box sx={{ minWidth: 200 }}>
      <Typography
        variant="body2"
        sx={{
          color: 'white',
          fontWeight: 600,
          mb: 0.5,
          fontSize: '0.875rem',
        }}
      >
        {label}
      </Typography>
      <FormControl
        fullWidth
        sx={{
          '& .MuiOutlinedInput-root': {
            backgroundColor: 'white',
            borderRadius: 2,
          },
        }}
      >
        <Select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          displayEmpty
        >
          {FORM_FACTOR_OPTIONS.map((option) => (
            <MenuItem key={option.value || 'any'} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

FormFactorSelect.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
};
