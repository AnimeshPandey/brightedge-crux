import { Alert } from '@mui/material';
import PropTypes from 'prop-types';
import { COMMON_STYLES } from '../../../constants/theme.constants';

export default function ErrorMessage({ error }) {
  if (!error) return null;
  return (
    <Alert severity="error" sx={COMMON_STYLES.errorMessage}>
      {error}
    </Alert>
  );
}

ErrorMessage.propTypes = {
  error: PropTypes.string,
};
