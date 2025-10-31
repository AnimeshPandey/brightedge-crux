import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { FORM_FACTOR_OPTIONS } from '../../../constants/crux.constants';

export default function FormFactorSelect({ value, onChange, label = 'Form Factor' }) {
  return (
    <FormControl sx={{ minWidth: 200 }}>
      <InputLabel id="form-factor-label" shrink>{label}</InputLabel>
      <Select
        labelId="form-factor-label"
        value={value}
        label={label}
        onChange={(e) => onChange(e.target.value)}
        displayEmpty
        notched
      >
        {FORM_FACTOR_OPTIONS.map((option) => (
          <MenuItem key={option.value || 'any'} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
