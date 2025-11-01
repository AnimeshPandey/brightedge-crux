# CrUX Explorer

A full-stack web application for exploring and visualizing Chrome User Experience Report (CrUX) data with advanced filtering, sorting, and performance insights.

**Live Demo:** [https://brightedge-crux.vercel.app/](https://brightedge-crux.vercel.app/)  
👉 [Jump to Local Setup Instructions](#7-setup-instructions)

---

## Table of Contents

1. [Overview](#1-overview)
2. [Features](#2-features)
3. [Screenshots](#3-screenshots)
4. [Architecture](#4-architecture)
5. [Tech Stack](#5-tech-stack)
6. [Project Structure](#6-project-structure)
7. [Setup Instructions](#7-setup-instructions)
8. [Usage](#8-usage)
9. [API Reference](#9-api-reference)
10. [Development Notes](#10-development-notes)
11. [Known Limitations](#11-known-limitations)
12. [Roadmap](#12-roadmap)
13. [Key Notes](#13-key-notes)
14. [License](#14-license)
15. [Maintainer](#15-maintainer)

---

## 1. Overview

**CrUX Explorer** allows developers and analysts to query Google’s Chrome UX Report (CrUX) API, visualize Core Web Vitals, and compare multiple URLs in real time.  
It is built as a **modern production-ready application** with a strong emphasis on performance, maintainability, and scalability.

**Highlights**
- Built with **React 19 + Material UI 7** frontend and **Node.js/Express 5** backend.
- Implements **Atomic Design** and **constants-driven architecture** for consistency and scalability.
- Uses **Highcharts 12** for rich interactive visualization.
- Secures API calls via backend proxy to hide the CrUX API key.

---

## 2. Features

### Core Capabilities
- Multi-URL search with real-time URL validation and graceful error handling.
- Form factor selection (Any / Phone / Desktop / Tablet).
- Origin fallback for URLs without sufficient field data.
- Displays all six Core Web Vitals metrics at p75 (75th percentile):  
  **LCP, FCP, INP, FID, CLS, TTFB**

### Visualization & Insights
- Performance gauge charts (0–100 score visualization).
- Metrics comparison chart for multi-URL analysis.
- Aggregated averages and summary statistics.
- Automated performance insights and recommendations.
- Color-coded metric thresholds: *Good*, *Needs Improvement*, *Poor*.

### Advanced Functions
- Filter metrics by threshold (>, <, =).
- Sort metrics by name or value.
- Responsive Material UI design with consistent theme and typography.
- Partial results display for enhanced reliability.

---

## 3. Screenshots

### Search Interface
![Search Interface](./screenshots/search-interface.png)

### Performance Metrics & Insights
![Performance Gauge](./screenshots/performance-gauge.png)

### Comparison Chart & Summary
![Metrics Comparison](./screenshots/metrics-comparison.png)

---

## 4. Architecture

### System Overview
```
User → React Frontend → Express Backend → Google CrUX API
```

### Frontend (React + Vite)
- **UI Layer:** React 19 with Material UI v7 and Emotion styling.
- **Visualization:** Highcharts for dynamic gauges, comparisons, and summaries.
- **Build System:** Vite 7 for ultra-fast HMR and optimized production builds.
- **State Management:** React hooks for simplicity and maintainability.
- **Design Pattern:** Strictly follows **Atomic Design** → Atoms → Molecules → Organisms → Pages.
- **Configuration:** All constants centralized in `/constants/` to avoid magic values.

### Backend (Node.js + Express)
- **Server:** Express 5 with CORS middleware.
- **API Requests:** Axios for CrUX API queries.
- **Security:** Environment variables stored in `.env`; API key never exposed to frontend.
- **Proxy Role:** Acts as a secure intermediary between frontend and Google CrUX API.
- **Error Handling:** Graceful fallback with structured response even when partial data is available.

---

## 5. Tech Stack

| Layer | Technologies |
|-------|---------------|
| **Frontend** | React 19, Material UI 7, Highcharts 12, Vite 7 |
| **Backend** | Node.js 22+, Express 5, Axios, dotenv, CORS |
| **Dev Tools** | pnpm, ESLint, Nodemon |

---

## 6. Project Structure

```
brightedge-crux/
├── backend/
│   ├── src/
│   │   └── server.js                    # Express server & CrUX API proxy
│   ├── package.json
│   ├── pnpm-lock.yaml
│   └── .env                            # Environment variables (not in git)
│
├── frontend/
│   ├── public/                         # Static assets
│   ├── src/
│   │   ├── components/                 # Atomic Design components
│   │   │   ├── atoms/                  # Basic building blocks (11 components)
│   │   │   │   ├── EmptyState/
│   │   │   │   ├── FormFactorSelect/
│   │   │   │   ├── MetricDescription/
│   │   │   │   ├── MetricName/
│   │   │   │   ├── MetricValue/
│   │   │   │   ├── OriginFallbackCheckbox/
│   │   │   │   ├── SearchButton/
│   │   │   │   ├── UrlInput/
│   │   │   │   └── index.js
│   │   │   ├── molecules/              # Groups of atoms (5 components)
│   │   │   │   ├── FilterTypeSelect/
│   │   │   │   ├── PageHeader/
│   │   │   │   ├── PerformanceGauge/
│   │   │   │   ├── SortableTableHeader/
│   │   │   │   ├── ThresholdInput/
│   │   │   │   └── index.js
│   │   │   ├── organisms/              # Larger composites (8 components)
│   │   │   │   ├── CruxDataTable/
│   │   │   │   ├── ErrorMessage/
│   │   │   │   ├── FilterToolbar/
│   │   │   │   ├── InsightsPanel/
│   │   │   │   ├── MetricsComparisonChart/
│   │   │   │   ├── MetricsTable/
│   │   │   │   ├── ResultHeader/
│   │   │   │   ├── SearchForm/
│   │   │   │   ├── SummarySection/
│   │   │   │   └── index.js
│   │   │   └── pages/                  # Page-level layouts
│   │   │       ├── CruxExplorerPage/
│   │   │       └── index.js
│   │   ├── constants/                  # Centralized configuration
│   │   │   ├── chart.constants.js
│   │   │   ├── crux.constants.js
│   │   │   ├── metrics.constants.js
│   │   │   └── theme.constants.js
│   │   ├── readers/                    # Null-safe accessors
│   │   │   └── index.js
│   │   ├── services/                   # API service layer
│   │   │   └── api.service.js
│   │   ├── utils/                      # Reusable logic and helpers
│   │   │   ├── chart.utils.js
│   │   │   ├── crux.utils.js
│   │   │   ├── metrics.utils.js
│   │   │   └── validation.utils.js
│   │   ├── App.jsx                     # Root component
│   │   ├── main.jsx                    # Entry point
│   │   └── index.css                   # Global styles
│   ├── package.json
│   ├── pnpm-lock.yaml
│   ├── vite.config.js
│   ├── eslint.config.js
│   └── index.html
│
└── README.md
```

### Component Architecture

The application follows **Atomic Design** principles with 25 total components:

### Atoms (11 components)
Basic building blocks that cannot be broken down further:

| Component | Purpose | Props |
|-----------|---------|-------|
| `SearchButton` | Submit button with loading state | `loading`, `type` |
| `UrlInput` | Multi-line URL input with validation | `value`, `onChange`, `error`, `helperText` |
| `FormFactorSelect` | Device type dropdown | `value`, `onChange` |
| `OriginFallbackCheckbox` | Origin fallback toggle | `checked`, `onChange` |
| `MetricValue` | Formatted metric value display | `value`, `unit` |
| `MetricName` | Metric name with tooltip | `name` |
| `MetricDescription` | Metric description text | `description` |
| `EmptyState` | Empty state message | `message` |

### Molecules (5 components)
Simple component groups combining atoms:

| Component | Purpose | Atoms Used |
|-----------|---------|------------|
| `PageHeader` | Page title and subtitle with gradient | Typography, Paper, Box |
| `PerformanceGauge` | Speedometer chart (0-100 score) | Highcharts, Box, Typography |
| `SortableTableHeader` | Clickable table header with sort icon | TableCell, TableSortLabel |
| `FilterTypeSelect` | Filter type dropdown | FormControl, Select, MenuItem |
| `ThresholdInput` | Numeric threshold input | TextField |

### Organisms (8 components)
Complex components combining molecules and atoms:

| Component | Purpose | Key Features |
|-----------|---------|--------------|
| `SearchForm` | Complete search form | URL validation, form factor, fallback, submit |
| `ErrorMessage` | Error alert display | Dismissible, color-coded severity |
| `ResultHeader` | Result information header | URL, form factor, gradient background |
| `FilterToolbar` | Filter controls | Filter type, threshold, metric count |
| `MetricsTable` | Sortable metrics table | Sorting, custom columns, empty state |
| `CruxDataTable` | Full data table | Filtering, sorting, all metrics |
| `InsightsPanel` | Performance insights | Automated recommendations, color-coded |
| `SummarySection` | Aggregated statistics | Average metrics, performance gauge |
| `MetricsComparisonChart` | Column chart | Multi-URL comparison, tooltips |

### Pages (1 component)
Full page layouts orchestrating all organisms:

| Component | Purpose | Key Features |
|-----------|---------|--------------|
| `CruxExplorerPage` | Main application page | State management, API calls, error handling, layout |

---

## 7. Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- pnpm (recommended)

### Installation
```bash
git clone https://github.com/AnimeshPandey/brightedge-crux.git
cd brightedge-crux
```

#### Backend Setup
```bash
cd backend
pnpm install
```
Create `.env` file:
```env
CRUX_API_KEY=your_crux_api_key_here
PORT=8080
```

#### Frontend Setup
```bash
cd ../frontend
pnpm install
```

### Running Locally
```bash
# Terminal 1
cd backend
pnpm run dev

# Terminal 2
cd frontend
pnpm run dev
```

- Frontend → http://localhost:5173  
- Backend → http://localhost:8080  

### Production Build
```bash
cd frontend
pnpm run build
```
Build output: `frontend/dist/`

---

## 8. Usage

1. Enter one or more URLs (comma or newline separated).  
2. Select a form factor (Any / Phone / Desktop / Tablet).  
3. Toggle **Origin Fallback** if needed.  
4. Click **Search** to query CrUX API.  
5. View Core Web Vitals data with color-coded metrics and charts.  
6. Filter or sort results as needed.

---

## 9. API Reference

**Endpoint:** `POST /api/crux`

**Request:**
```json
{
  "urls": ["https://example.com"],
  "formFactor": "PHONE",
  "originFallback": true
}
```

**Response:**
```json
{
  "results": [{
    "url": "https://example.com",
    "formFactor": "PHONE",
    "metrics": {
      "lcp": { "p75": 2500 },
      "fcp": { "p75": 1800 },
      "inp": { "p75": 200 },
      "cls": { "p75": 0.1 },
      "ttfb": { "p75": 800 }
    }
  }]
}
```

---

## 10. Development Notes

- Frontend auto-reloads with **Vite HMR**.  
- Backend auto-restarts via **Nodemon**.  
- **ESLint** enforces consistent code quality.  
- Check browser DevTools → Network tab for CrUX API responses.  
- Modular atomic components allow isolated testing and debugging.

---

## 11. Known Limitations

| Issue | Description | Workaround |
|--------|--------------|-------------|
| CrUX data gaps | Some URLs lack field data | Enable Origin Fallback |
| Rate limiting | Google API throttles heavy use | Batch URLs |
| Historical data | Only recent 28-day dataset | Store snapshots locally |
| Bundle size | ~283 KB gzipped | Lazy-load Highcharts |
| Mobile layout | Charts may overflow | Responsive chart scaling (planned) |

---

## 12. Roadmap

### Near Term
- Enhanced error classification & retry logic  
- Code-splitting and lazy loading  
- CSV export, skeleton loading states  
- Unit and integration tests  

### Mid Term
- Historical trend storage  
- Percentile distribution (p50–p95)  
- Scheduled queries and exports  

### Long Term
- Real-time performance monitoring  
- AI-driven insights & alerts  
- Authentication & team dashboards  
- Integrations: Slack, Jira, Lighthouse CI

---

## 13. Key Notes
- Backend proxy hides API key and handles all CrUX API requests.  
- All Core Web Vitals shown at **p75 percentile**.  
- “Any” form factor passes empty string to API.  
- Partial results displayed instead of all-or-nothing errors.  
- Origin fallback enabled by default for reliability.

---

## 14. License

**MIT License** — use freely for educational or commercial purposes.

---

## 15. Maintainer

**Author:** [Animesh Pandey](https://github.com/AnimeshPandey)  
Contact: animeshpandey1909@gmail.com