import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  FormControlLabel,
  Checkbox,
  Box,
  Paper,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchForm({
  url,
  setUrl,
  formFactor,
  setFormFactor,
  originFallback,
  setOriginFallback,
  onSearch,
  loading
}) {
  return (
    <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
      <form onSubmit={onSearch}>
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start', mb: 2 }}>
          <TextField
            label="URL"
            type="url"
            required
            fullWidth
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com"
            variant="outlined"
            size="medium"
          />

          <Button
            type="submit"
            variant="contained"
            disabled={loading}
            startIcon={<SearchIcon />}
            sx={{ minWidth: 120, height: 56 }}
          >
            {loading ? 'Loading…' : 'Search'}
          </Button>
        </Box>

        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <FormControl sx={{ minWidth: 200 }}>
            <InputLabel id="form-factor-label">Form Factor</InputLabel>
            <Select
              labelId="form-factor-label"
              value={formFactor}
              label="Form Factor"
              onChange={(e) => setFormFactor(e.target.value)}
            >
              <MenuItem value="">Any</MenuItem>
              <MenuItem value="PHONE">Phone</MenuItem>
              <MenuItem value="DESKTOP">Desktop</MenuItem>
              <MenuItem value="TABLET">Tablet</MenuItem>
            </Select>
          </FormControl>

          <FormControlLabel
            control={
              <Checkbox
                checked={originFallback}
                onChange={(e) => setOriginFallback(e.target.checked)}
              />
            }
            label="Use origin fallback"
          />
        </Box>
      </form>
    </Paper>
  );
}

