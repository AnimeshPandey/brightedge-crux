export const COLORS = {
  PRIMARY: '#1976d2',
  PRIMARY_DARK: '#115293',
  BACKGROUND_LIGHT: '#f5f5f5',
  BACKGROUND_PAPER: '#ffffff',
  TEXT_SECONDARY: 'text.secondary',
  ERROR: 'error',
  SUCCESS: 'success',
  WARNING: 'warning',
  BORDER_LIGHT: '#e0e0e0',
};

export const SPACING = {
  XS: 1,
  SM: 2,
  MD: 3,
  LG: 4,
  XL: 6,
};

export const COMMON_STYLES = {
  tableHeaderRow: {
    backgroundColor: COLORS.BACKGROUND_LIGHT,
    '& th': {
      fontWeight: 600,
      fontSize: '0.875rem',
    },
  },
  tableSortLabel: {
    fontWeight: 600,
    '&.Mui-active': {
      color: COLORS.PRIMARY,
    },
  },
  tableRow: {
    '&:hover': {
      backgroundColor: COLORS.BACKGROUND_LIGHT,
    },
    '& td': {
      borderBottom: `1px solid ${COLORS.BORDER_LIGHT}`,
    },
  },
  resultHeader: {
    mb: SPACING.SM,
    p: SPACING.MD,
    backgroundColor: COLORS.BACKGROUND_LIGHT,
    borderRadius: 1,
    display: 'flex',
    gap: SPACING.LG,
    flexWrap: 'wrap',
  },
  resultHeaderItem: {
    flex: '1 1 200px',
  },
  filterToolbar: {
    mb: SPACING.SM,
    p: SPACING.SM,
  },
  searchForm: {
    mb: SPACING.LG,
    p: SPACING.MD,
    elevation: 2,
  },
  errorMessage: {
    mb: SPACING.SM,
  },
  pageHeader: {
    mb: SPACING.LG,
    textAlign: 'center',
  },
};
