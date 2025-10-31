import { TextField } from '@mui/material';

export default function ThresholdInput({ value, onChange, disabled }) {
  return (
    <TextField
      label="Threshold"
      type="number"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
      sx={{ width: 120 }}
    />
  );
}
