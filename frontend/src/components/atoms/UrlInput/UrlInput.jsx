import { TextField } from '@mui/material';

export default function UrlInput({ value, onChange, label = 'URLs (one per line)', multiline = true }) {
  return (
    <TextField
      fullWidth
      label={label}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="https://example.com&#10;https://another-example.com&#10;https://third-example.com"
      multiline={multiline}
      rows={multiline ? 4 : 1}
      helperText={multiline ? 'Enter one URL per line' : ''}
    />
  );
}
