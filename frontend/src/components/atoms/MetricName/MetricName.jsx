import { Typography } from '@mui/material';

export default function MetricName({ name }) {
  return <Typography sx={{ fontWeight: 500 }}>{name}</Typography>;
}
