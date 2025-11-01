export const CHART_COLORS = {
  GOOD: '#4CAF50',
  WARNING: '#FF9800',
  ERROR: '#F44336',
  PRIMARY: '#667eea',
  SECONDARY: '#764ba2',
  WHITE: '#ffffff',
  TRANSPARENT: 'transparent',
  BACKGROUND_OVERLAY: 'rgba(255, 255, 255, 0.15)',
};

export const PERFORMANCE_THRESHOLDS = {
  GOOD: 75,
  NEEDS_IMPROVEMENT: 50,
  POOR: 0,
};

export const PERFORMANCE_LABELS = {
  GOOD: 'Good',
  NEEDS_IMPROVEMENT: 'Needs Improvement',
  POOR: 'Poor',
};

export const GAUGE_DIMENSIONS = {
  small: { width: 220, height: 180 },
  medium: { width: 320, height: 220 },
  large: { width: 420, height: 280 },
};

export const GAUGE_FONT_SIZES = {
  small: {
    title: '12px',
    score: '28px',
    label: '10px',
    axisLabel: '9px',
  },
  medium: {
    title: '14px',
    score: '36px',
    label: '12px',
    axisLabel: '9px',
  },
  large: {
    title: '16px',
    score: '44px',
    label: '14px',
    axisLabel: '10px',
  },
};

export const HIGHCHARTS_COMMON_CONFIG = {
  exporting: {
    enabled: false,
  },
  credits: {
    enabled: false,
  },
};

export const GAUGE_CHART_CONFIG = {
  chart: {
    type: 'solidgauge',
    backgroundColor: CHART_COLORS.TRANSPARENT,
    margin: [0, 0, 0, 0],
    spacing: [0, 0, 0, 0],
  },
  pane: {
    center: ['50%', '75%'],
    size: '120%',
    startAngle: -90,
    endAngle: 90,
    background: {
      backgroundColor: CHART_COLORS.BACKGROUND_OVERLAY,
      innerRadius: '60%',
      outerRadius: '100%',
      shape: 'arc',
      borderWidth: 0,
    },
  },
  tooltip: {
    enabled: false,
  },
  yAxis: {
    min: 0,
    max: 100,
    stops: [
      [0.5, CHART_COLORS.ERROR],
      [0.75, CHART_COLORS.WARNING],
      [1, CHART_COLORS.GOOD],
    ],
    lineWidth: 0,
    tickWidth: 0,
    minorTickInterval: null,
    tickAmount: 2,
    labels: {
      y: 20,
      distance: -25,
      style: {
        fontSize: '9px',
        color: CHART_COLORS.WHITE,
        fontWeight: '600',
      },
    },
  },
  plotOptions: {
    solidgauge: {
      dataLabels: {
        enabled: true,
        y: -30,
        borderWidth: 0,
        useHTML: true,
        style: {
          fontSize: '0px',
        },
      },
    },
  },
};

export const COMPARISON_CHART_CONFIG = {
  chart: {
    type: 'column',
    height: 400,
  },
  title: {
    style: {
      fontSize: '18px',
      fontWeight: 'bold',
    },
  },
  xAxis: {
    crosshair: true,
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Value (ms / score)',
    },
  },
  tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat:
      '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
    footerFormat: '</table>',
    shared: true,
    useHTML: true,
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0,
      dataLabels: {
        enabled: false,
      },
    },
  },
};

export const CHART_TITLES = {
  PERFORMANCE_SCORE: 'Performance Score',
  METRICS_COMPARISON: 'Metrics Comparison Across URLs',
};

export const CHART_TEXT_SHADOWS = {
  STRONG: '0 2px 4px rgba(0,0,0,0.4)',
  LIGHT: '0 1px 2px rgba(0,0,0,0.3)',
};

export const CHART_METRIC_IDS = ['lcp', 'fcp', 'inp', 'fid', 'cls', 'ttfb'];

