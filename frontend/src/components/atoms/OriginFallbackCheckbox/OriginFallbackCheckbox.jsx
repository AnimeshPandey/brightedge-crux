import { FormControlLabel, Checkbox } from '@mui/material';

export default function OriginFallbackCheckbox({ checked, onChange, label = 'Use origin fallback' }) {
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={onChange}
        />
      }
      label={label}
    />
  );
}
