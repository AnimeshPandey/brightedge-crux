import { Typography } from '@mui/material';
import PropTypes from 'prop-types';

export default function MetricDescription({ description }) {
  return <Typography variant="body2" color="text.secondary">{description}</Typography>;
}

MetricDescription.propTypes = {
  description: PropTypes.string.isRequired,
};
