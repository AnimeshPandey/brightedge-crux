import { Alert } from '@mui/material';

export default function ErrorMessage({ error }) {
  if (!error) return null;

  return (
    <Alert severity="error" sx={{ mb: 2 }}>
      {error}
    </Alert>
  );
}

