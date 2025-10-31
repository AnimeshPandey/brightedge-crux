import { Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchButton({ loading, onClick, type = 'submit' }) {
  return (
    <Button
      type={type}
      variant="contained"
      disabled={loading}
      startIcon={<SearchIcon />}
      onClick={onClick}
      sx={{ minWidth: 120, height: 56 }}
    >
      {loading ? 'Loading…' : 'Search'}
    </Button>
  );
}
