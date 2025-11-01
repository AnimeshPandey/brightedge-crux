import { Box, Typography, Paper } from '@mui/material';
import PropTypes from 'prop-types';
import { SPACING, GRADIENTS } from '../../../constants/theme.constants';
import SpeedIcon from '@mui/icons-material/Speed';

export default function PageHeader({ title, subtitle }) {
  return (
    <Paper
      elevation={0}
      sx={{
        mb: SPACING.LG,
        p: SPACING.LG,
        textAlign: 'center',
        background: GRADIENTS.PRIMARY,
        color: 'white',
        borderRadius: 3,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: GRADIENTS.RADIAL_OVERLAY,
          pointerEvents: 'none',
        },
      }}
    >
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, mb: 1 }}>
          <SpeedIcon sx={{ fontSize: 48 }} />
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: 700,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              letterSpacing: '-0.02em',
            }}
          >
            {title}
          </Typography>
        </Box>
        <Typography
          variant="h6"
          sx={{
            opacity: 0.95,
            fontWeight: 400,
            fontSize: { xs: '1rem', sm: '1.1rem' },
            maxWidth: '800px',
            mx: 'auto',
          }}
        >
          {subtitle}
        </Typography>
      </Box>
    </Paper>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};
