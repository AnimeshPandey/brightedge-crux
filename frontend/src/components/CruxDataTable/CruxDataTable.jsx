import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
} from '@mui/material';

/**
 * CruxDataTable - Displays Chrome UX Report metrics in a Material UI table
 * @param {Object} result - The CrUX data result containing metrics
 */
export default function CruxDataTable({ result }) {
  if (!result) return null;

  const metrics = [
    {
      name: 'Largest Contentful Paint (LCP)',
      value: result.lcp,
      unit: 'ms',
      description: 'Measures loading performance',
    },
    {
      name: 'First Contentful Paint (FCP)',
      value: result.fcp,
      unit: 'ms',
      description: 'Measures when first content appears',
    },
    {
      name: 'Interaction to Next Paint (INP)',
      value: result.inp,
      unit: 'ms',
      description: 'Measures interactivity',
    },
    {
      name: 'First Input Delay (FID)',
      value: result.fid,
      unit: 'ms',
      description: 'Measures responsiveness',
    },
    {
      name: 'Cumulative Layout Shift (CLS)',
      value: result.cls,
      unit: '',
      description: 'Measures visual stability',
    },
    {
      name: 'Time to First Byte (TTFB)',
      value: result.ttfb,
      unit: 'ms',
      description: 'Measures server response time',
    },
  ];

  return (
    <Box sx={{ mt: 3 }}>
      {/* Header with URL and Form Factor info */}
      <Paper sx={{ p: 2, mb: 2, bgcolor: '#f5f5f5' }}>
        <Typography variant="h6" gutterBottom>
          {result.url}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Form factor: {result.formFactor}
          {result.note && ` • ${result.note.replace('_', ' ')}`}
        </Typography>
      </Paper>

      {/* Data Table */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="CrUX data table">
          <TableHead>
            <TableRow sx={{ bgcolor: '#1976d2' }}>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>
                Metric
              </TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }} align="right">
                Value (p75)
              </TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>
                Description
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {metrics.map((metric, index) => (
              <TableRow
                key={metric.name}
                sx={{
                  '&:nth-of-type(odd)': { bgcolor: '#fafafa' },
                  '&:hover': { bgcolor: '#f0f0f0' },
                }}
              >
                <TableCell component="th" scope="row">
                  <Typography variant="body2" fontWeight={500}>
                    {metric.name}
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="body1" fontWeight={600}>
                    {metric.value !== null && metric.value !== undefined
                      ? `${metric.value}${metric.unit}`
                      : 'N/A'}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2" color="text.secondary">
                    {metric.description}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

