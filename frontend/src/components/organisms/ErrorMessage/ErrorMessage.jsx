import { Alert } from '@mui/material';
import { COMMON_STYLES } from '../../../constants/theme.constants';

export default function ErrorMessage({ error }) {
  if (!error) return null;
  return (
    <Alert severity="error" sx={COMMON_STYLES.errorMessage}>
      {error}
    </Alert>
  );
}
