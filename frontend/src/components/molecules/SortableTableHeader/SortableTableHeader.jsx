import { TableCell, TableSortLabel } from '@mui/material';
import PropTypes from 'prop-types';
import { COMMON_STYLES } from '../../../constants/theme.constants';
import { SORT_ORDERS } from '../../../constants/metrics.constants';

const SORT_DIRECTIONS = Object.values(SORT_ORDERS);

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

SortableTableHeader.propTypes = {
  label: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  direction: PropTypes.oneOf(SORT_DIRECTIONS).isRequired,
  onClick: PropTypes.func.isRequired,
};
