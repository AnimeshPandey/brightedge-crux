import { Typography } from '@mui/material';

export default function MetricValue({ value, unit }) {
  if (value == null) {
    return <Typography>N/A</Typography>;
  }
  return <Typography>{value}{unit}</Typography>;
}
