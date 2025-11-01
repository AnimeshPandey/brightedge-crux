import { FormControlLabel, Checkbox } from '@mui/material';
import PropTypes from 'prop-types';

export default function OriginFallbackCheckbox({ checked, onChange, label = 'Use origin fallback' }) {
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={onChange}
          sx={{
            color: 'white',
            '&.Mui-checked': {
              color: 'white',
            },
          }}
        />
      }
      label={label}
      sx={{
        color: 'white',
        fontWeight: 600,
        '& .MuiFormControlLabel-label': {
          fontWeight: 600,
        },
      }}
    />
  );
}

OriginFallbackCheckbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
};
