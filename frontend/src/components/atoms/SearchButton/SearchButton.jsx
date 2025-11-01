import { Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PropTypes from 'prop-types';

const BUTTON_TYPES = ['submit', 'button', 'reset'];

export default function SearchButton({ loading, onClick, type = 'submit' }) {
  return (
    <Button
      type={type}
      variant="contained"
      disabled={loading}
      startIcon={<SearchIcon />}
      onClick={onClick}
      sx={{
        minWidth: 140,
        height: 56,
        backgroundColor: 'white',
        color: '#667eea',
        fontWeight: 700,
        fontSize: '1rem',
        borderRadius: 2,
        boxShadow: '0 4px 14px 0 rgba(0,0,0,0.15)',
        '&:hover': {
          backgroundColor: '#f5f5f5',
          boxShadow: '0 6px 20px 0 rgba(0,0,0,0.2)',
        },
        '&:disabled': {
          backgroundColor: 'rgba(255, 255, 255, 0.6)',
          color: 'rgba(102, 126, 234, 0.6)',
        },
      }}
    >
      {loading ? 'Loading…' : 'Search'}
    </Button>
  );
}

SearchButton.propTypes = {
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(BUTTON_TYPES),
};
