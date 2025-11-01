import { TextField } from '@mui/material';
import PropTypes from 'prop-types';

export default function ThresholdInput({ value, onChange, disabled }) {
  return (
    <TextField
      label="Threshold"
      type="number"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
      sx={{ width: 120 }}
    />
  );
}

ThresholdInput.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};
