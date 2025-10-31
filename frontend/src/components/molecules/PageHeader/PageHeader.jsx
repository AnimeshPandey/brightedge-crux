import { Box, Typography } from '@mui/material';
import { COMMON_STYLES } from '../../../constants/theme.constants';

export default function PageHeader({ title, subtitle }) {
  return (
    <Box sx={COMMON_STYLES.pageHeader}>
      <Typography variant="h3" component="h1" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        {subtitle}
      </Typography>
    </Box>
  );
}
