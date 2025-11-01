export const COLORS = {
  PRIMARY: '#1976d2',
  PRIMARY_DARK: '#115293',
  BACKGROUND_LIGHT: '#f5f5f5',
  BACKGROUND_PAPER: '#ffffff',
  TEXT_SECONDARY: 'text.secondary',
  ERROR: '#d32f2f',
  SUCCESS: 'success',
  SUCCESS_LIGHT: '#e8f5e9',
  WARNING: '#ed6c02',
  BORDER_LIGHT: '#e0e0e0',
  GRADIENT_PRIMARY: '#667eea',
  GRADIENT_SECONDARY: '#764ba2',
  CHART_GREEN: '#4CAF50',
  CHART_ORANGE: '#FF9800',
  CHART_RED: '#F44336',
};

export const SPACING = {
  XS: 1,
  SM: 2,
  MD: 3,
  LG: 4,
  XL: 6,
};

export const GRADIENTS = {
  PRIMARY: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  PRIMARY_HORIZONTAL: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
  PAGE_BACKGROUND: 'linear-gradient(to bottom, #f5f7fa 0%, #c3cfe2 100%)',
  RADIAL_OVERLAY: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
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
