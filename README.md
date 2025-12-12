# Enterprise CRM Platform

A fully functional, modern CRM (Customer Relationship Management) application built with React, TypeScript, and Tailwind CSS.

## Features

- **Dashboard** - Real-time metrics, revenue trends, and deals pipeline visualization
- **Contacts Management** - Complete contact database with search, filtering, and CRUD operations
- **Deals Pipeline** - Track deals through various stages with probability tracking
- **Task Management** - Priority-based task system with assignments and due dates
- **Analytics & Reports** - Interactive charts, graphs, KPIs, and lead source analysis
- **Settings** - Profile management, notifications, security, and integrations

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Routing**: React Router v6
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React
- **Build Tool**: Vite
- **State Management**: Zustand

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ankit-mishra-01/ZOHO_Like_CRM.git
cd ZOHO_Like_CRM
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

## Project Structure

```
├── src/
│   ├── components/     # Reusable components
│   ├── pages/          # Page components
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── public/             # Static assets
└── index.html          # HTML template
```

## Features Overview

### Dashboard
- Key performance metrics
- Revenue trend visualization
- Deals pipeline overview
- Quick stats cards

### Contacts
- Contact list with search
- Add/Edit/Delete contacts
- Contact details with company info
- Email and phone integration

### Deals
- Visual pipeline management
- Deal value tracking
- Probability indicators
- Stage-based organization

### Tasks
- Task creation and management
- Priority levels (High/Medium/Low)
- Due date tracking
- Assignment to team members

### Analytics
- Sales and leads trends
- Lead source breakdown
- Conversion rate tracking
- Growth metrics

## License

MIT License

## Author

Created by Ankit Mishra