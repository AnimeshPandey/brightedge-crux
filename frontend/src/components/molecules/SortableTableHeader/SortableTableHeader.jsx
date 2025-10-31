import { TableCell, TableSortLabel } from '@mui/material';
import { COMMON_STYLES } from '../../../constants/theme.constants';

export default function SortableTableHeader({ label, active, direction, onClick }) {
  return (
    <TableCell>
      <TableSortLabel
        active={active}
        direction={direction}
        onClick={onClick}
        sx={COMMON_STYLES.tableSortLabel}
      >
        {label}
      </TableSortLabel>
    </TableCell>
  );
}
