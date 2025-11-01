import { Typography } from '@mui/material';
import PropTypes from 'prop-types';

export default function EmptyState({ message }) {
  return <Typography color="text.secondary">{message}</Typography>;
}

EmptyState.propTypes = {
  message: PropTypes.string.isRequired,
};
