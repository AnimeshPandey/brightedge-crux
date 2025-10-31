import { TextField } from '@mui/material';

export default function UrlInput({ value, onChange, label = 'URL' }) {
  return (
    <TextField
      fullWidth
      label={label}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="https://example.com"
      type="url"
    />
  );
}
