import { Typography } from '@mui/material';
import PropTypes from 'prop-types';

export default function MetricName({ name }) {
  return <Typography sx={{ fontWeight: 500 }}>{name}</Typography>;
}

MetricName.propTypes = {
  name: PropTypes.string.isRequired,
};
