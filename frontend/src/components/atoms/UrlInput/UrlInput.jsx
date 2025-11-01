import { TextField, Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';

export default function UrlInput({
  value,
  onChange,
  label = 'URLs (one per line)',
  multiline = true,
  error = false,
  helperText = '',
}) {
  const defaultHelperText = multiline ? 'Enter one URL per line (must start with http:// or https://)' : '';
  const displayHelperText = helperText || defaultHelperText;

  return (
    <Box>
      <Typography
        variant="body2"
        sx={{
          color: 'white',
          fontWeight: 600,
          mb: 0.5,
          fontSize: '0.875rem',
        }}
      >
        {label}
      </Typography>
      <TextField
        fullWidth
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="https://example.com&#10;https://another-example.com&#10;https://third-example.com"
        multiline={multiline}
        rows={multiline ? 4 : 1}
        error={error}
        helperText={displayHelperText}
        sx={{
          '& .MuiOutlinedInput-root': {
            backgroundColor: 'white',
            borderRadius: 2,
            ...(error && {
              '& fieldset': {
                borderColor: '#F44336',
                borderWidth: 2,
              },
            }),
          },
          '& .MuiFormHelperText-root': {
            color: error ? '#F44336' : 'rgba(255, 255, 255, 0.9)',
            fontWeight: 500,
            backgroundColor: error ? 'rgba(244, 67, 54, 0.1)' : 'transparent',
            padding: error ? '4px 8px' : 0,
            borderRadius: error ? 1 : 0,
            marginTop: error ? 1 : 0.5,
          },
        }}
      />
    </Box>
  );
}

UrlInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  multiline: PropTypes.bool,
  error: PropTypes.bool,
  helperText: PropTypes.string,
};
