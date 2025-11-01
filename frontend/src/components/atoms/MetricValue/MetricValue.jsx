import { Typography } from '@mui/material';
import PropTypes from 'prop-types';

export default function MetricValue({ value, unit }) {
  if (value == null) {
    return <Typography>N/A</Typography>;
  }
  return <Typography>{value}{unit}</Typography>;
}

MetricValue.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  unit: PropTypes.string,
};
