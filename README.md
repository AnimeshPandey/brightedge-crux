# CrUX Explorer

A modern web application for exploring Chrome User Experience Report (CrUX) data with filtering, sorting, and visualization capabilities.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Component Architecture](#component-architecture)
- [API Documentation](#api-documentation)
- [Development](#development)

## 🎯 Overview

CrUX Explorer is a full-stack application that allows users to query and analyze Chrome User Experience Report data. It provides an intuitive interface to search for URLs, view Core Web Vitals metrics, and filter/sort results based on various criteria.

## ✨ Features

### Core Functionality
- **URL Search**: Query CrUX data for any URL
- **Form Factor Selection**: Filter by device type (Phone, Desktop, Tablet, or Any)
- **Origin Fallback**: Automatically fall back to origin-level data when URL-specific data is unavailable
- **Core Web Vitals Display**: View all 6 metrics (LCP, FCP, INP, FID, CLS, TTFB)

### Advanced Features
- **Filtering**: Filter metrics by threshold values (Greater Than, Less Than, Equal To)
- **Sorting**: Sort metrics by name or value (ascending/descending)
- **Real-time Updates**: Hot module replacement for instant feedback during development
- **Error Handling**: Comprehensive error messages and loading states
- **Responsive Design**: Material UI components for a professional, mobile-friendly interface

## 🏗️ Architecture

### Frontend
- **Framework**: React 19 with functional components and hooks
- **UI Library**: Material UI (MUI) v7
- **Build Tool**: Vite for fast development and optimized production builds
- **State Management**: React useState hooks
- **Component Pattern**: Atomic Design (Atoms → Molecules → Organisms → Pages)

### Backend
- **Runtime**: Node.js with Express
- **API Client**: Axios for CrUX API requests
- **Middleware**: CORS, body-parser
- **Environment**: dotenv for configuration

## 🛠️ Tech Stack

### Frontend Dependencies
```json
{
  "react": "^19.2.0",
  "react-dom": "^19.2.0",
  "@mui/material": "^7.3.4",
  "@mui/icons-material": "^7.3.4",
  "@emotion/react": "^11.14.0",
  "@emotion/styled": "^11.14.1"
}
```

### Backend Dependencies
```json
{
  "express": "^5.1.0",
  "axios": "^1.13.1",
  "cors": "^2.8.5",
  "dotenv": "^17.2.3"
}
```

## 📁 Project Structure

```
brightedge-crux/
├── backend/
│   ├── src/
│   │   └── index.js          # Express server & CrUX API proxy
│   ├── package.json
│   └── pnpm-lock.yaml
│
├── frontend/
│   ├── src/
│   │   ├── components/       # Atomic Design components
│   │   │   ├── atoms/        # Basic building blocks
│   │   │   ├── molecules/    # Simple component groups
│   │   │   ├── organisms/    # Complex components
│   │   │   └── pages/        # Full page layouts
│   │   ├── constants/        # Configuration & constants
│   │   ├── readers/          # Safe property accessors
│   │   ├── services/         # API service layer
│   │   ├── utils/            # Utility functions
│   │   ├── App.jsx           # Root component
│   │   ├── main.jsx          # Entry point
│   │   └── index.css         # Global styles
│   ├── package.json
│   ├── vite.config.js
│   └── index.html
│
└── README.md                 # This file
```

## 🚀 Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd brightedge-crux
```

2. **Install backend dependencies**
```bash
cd backend
pnpm install
```

3. **Configure environment variables**
Create a `.env` file in the `backend` directory:
```env
CRUX_API_KEY=your_crux_api_key_here
PORT=3001
```

4. **Install frontend dependencies**
```bash
cd ../frontend
pnpm install
```

### Running the Application

1. **Start the backend server** (from `backend/` directory):
```bash
pnpm run dev
```
Server will run on `http://localhost:3001`

2. **Start the frontend dev server** (from `frontend/` directory):
```bash
pnpm run dev
```
Application will be available at `http://localhost:5173`

### Building for Production

**Frontend**:
```bash
cd frontend
pnpm run build
```
Production files will be in `frontend/dist/`

## 📖 Usage

1. **Enter a URL** in the search field (e.g., `https://developer.chrome.com`)
2. **Select a form factor** (Any, Phone, Desktop, or Tablet)
3. **Toggle origin fallback** if you want to fall back to origin-level data
4. **Click Search** to fetch CrUX data
5. **View results** in the data table showing all Core Web Vitals
6. **Filter metrics** using the filter toolbar (All, Greater Than, Less Than, Equal To)
7. **Sort metrics** by clicking on column headers (Metric name or Value)

## 🧩 Component Architecture

The application follows **Atomic Design** principles:

### Atoms (8 components)
Basic building blocks:
- `SearchButton` - Search button with loading state
- `UrlInput` - URL input field
- `FormFactorSelect` - Form factor dropdown
- `OriginFallbackCheckbox` - Origin fallback checkbox
- `MetricValue` - Metric value display
- `MetricName` - Metric name display
- `MetricDescription` - Metric description display
- `EmptyState` - Empty state message

### Molecules (5 components)
Simple component groups:
- `PageHeader` - Page title and subtitle
- `MetricRow` - Complete metric row
- `SortableTableHeader` - Sortable table header cell
- `FilterTypeSelect` - Filter type dropdown
- `ThresholdInput` - Threshold value input

### Organisms (6 components)
Complex components:
- `SearchForm` - Complete search form
- `ErrorMessage` - Error alert display
- `ResultHeader` - Result information display
- `FilterToolbar` - Filter controls with count
- `MetricsTable` - Complete metrics table
- `CruxDataTable` - Full data table with filtering/sorting

### Pages (1 component)
Full page layouts:
- `CruxExplorerPage` - Main application page

## 🔌 API Documentation

### Backend Endpoint

**POST** `/api/crux`

Request body:
```json
{
  "urls": ["https://example.com"],
  "formFactor": "PHONE",
  "originFallback": true
}
```

Response:
```json
{
  "results": [{
    "status": "ok",
    "url": "https://example.com",
    "formFactor": "PHONE",
    "metrics": {
      "lcp": { "p75": 2500 },
      "fcp": { "p75": 1800 },
      "inp": { "p75": 200 },
      "fid": { "p75": 100 },
      "cls": { "p75": 0.1 },
      "ttfb": { "p75": 800 }
    }
  }]
}
```

## 💻 Development

### Code Organization

- **Constants**: All magic values are extracted to `constants/` directory
- **Readers**: Safe property accessors in `readers/` directory
- **Utils**: Pure utility functions in `utils/` directory
- **Services**: API communication in `services/` directory
- **Components**: Atomic Design structure in `components/` directory

### Key Design Decisions

1. **Atomic Design**: Ensures reusability and maintainability
2. **Readers Pattern**: Provides null-safe property access throughout the app
3. **Constants Extraction**: Single source of truth for all configuration
4. **Separation of Concerns**: Clear boundaries between UI, logic, and data
5. **Material UI**: Professional, accessible, and responsive components

### Development Tools

- **Vite**: Fast HMR and optimized builds
- **ESLint**: Code quality and consistency
- **React DevTools**: Component inspection and debugging
- **Nodemon**: Auto-restart backend on changes

## 📝 Notes

- The backend acts as a proxy to the CrUX API to keep the API key secure
- All Core Web Vitals are displayed at the p75 (75th percentile) value
- Form factor "Any" sends an empty string to the API
- Origin fallback is enabled by default for better data availability

## 🤝 Contributing

1. Follow the Atomic Design pattern for new components
2. Use readers for all property access
3. Extract magic values to constants
4. Write clean, self-documenting code
5. Test thoroughly before committing

## 📄 License

[Your License Here]

