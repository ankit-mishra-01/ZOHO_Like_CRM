# Enterprise CRM Platform

A fully functional, modern CRM (Customer Relationship Management) application built with React, TypeScript, and Tailwind CSS. All features are fully working with complete CRUD operations and persistent local storage.

## ✨ Features

### 📊 Dashboard
- Real-time metrics and KPIs
- Revenue trend visualization
- Deals pipeline overview
- Dynamic statistics from actual data

### 👥 Contacts Management
- ✅ **Add new contacts** with full form validation
- ✅ **Edit existing contacts** with pre-filled data
- ✅ **Delete contacts** with confirmation
- ✅ **Search contacts** by name, email, or company
- ✅ **Status management** (Active/Inactive)
- Auto-generated avatars from initials

### 💼 Deals Pipeline
- ✅ **Create new deals** with contact association
- ✅ **Edit deal details** including stage and probability
- ✅ **Delete deals** with confirmation
- ✅ **Track deal stages**: Lead → Qualified → Proposal → Negotiation → Closed Won/Lost
- ✅ **Probability slider** for win likelihood
- Real-time pipeline value calculation
- Average deal size tracking

### ✅ Task Management
- ✅ **Create tasks** with priority levels
- ✅ **Edit task details** and reassign
- ✅ **Delete tasks** with confirmation
- ✅ **Toggle completion** with one click
- ✅ **Filter tasks** by status (All/Active/Completed)
- Priority indicators (High/Medium/Low)
- Due date tracking
- Task assignment

### 📈 Analytics & Reports
- Real-time revenue tracking
- Lead source breakdown
- Conversion rate analysis
- Growth metrics
- Recent activity feed
- Interactive charts and graphs

### 💾 Data Persistence
- All data saved to browser localStorage
- Survives page refreshes
- No backend required
- Instant data synchronization

## 🚀 Tech Stack

- **Frontend**: React 18 + TypeScript
- **Routing**: React Router v6
- **State Management**: Zustand with persist middleware
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React
- **Build Tool**: Vite

## 📦 Getting Started

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

## 🏗️ Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

## 📁 Project Structure

```
├── src/
│   ├── components/        # Reusable components
│   │   ├── Sidebar.tsx   # Navigation sidebar
│   │   └── Modal.tsx     # Reusable modal component
│   ├── pages/            # Page components
│   │   ├── Dashboard.tsx # Dashboard with metrics
│   │   ├── Contacts.tsx  # Contact management
│   │   ├── Deals.tsx     # Deal pipeline
│   │   ├── Tasks.tsx     # Task management
│   │   ├── Analytics.tsx # Analytics & reports
│   │   └── Settings.tsx  # Settings page
│   ├── store/            # State management
│   │   └── useStore.ts   # Zustand store with persist
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles
├── public/               # Static assets
└── index.html            # HTML template
```

## 🎯 Key Features Explained

### State Management
- Uses Zustand for lightweight, performant state management
- Persist middleware saves all data to localStorage
- Type-safe with TypeScript interfaces

### CRUD Operations
All entities (Contacts, Deals, Tasks) support:
- **Create**: Modal forms with validation
- **Read**: List views with search/filter
- **Update**: Edit existing records
- **Delete**: Remove with confirmation

### Data Flow
1. User interacts with UI (button click, form submit)
2. Action dispatched to Zustand store
3. Store updates state immutably
4. Persist middleware saves to localStorage
5. React re-renders affected components
6. UI updates instantly

## 🔧 Customization

### Adding New Fields
Edit the interfaces in `src/store/useStore.ts`:
```typescript
export interface Contact {
  id: string;
  name: string;
  // Add your custom fields here
  customField: string;
}
```

### Changing Colors
Modify Tailwind classes in components or update `tailwind.config.js`

### Adding New Pages
1. Create component in `src/pages/`
2. Add route in `src/App.tsx`
3. Add navigation item in `src/components/Sidebar.tsx`

## 🐛 Troubleshooting

**Data not persisting?**
- Check browser localStorage is enabled
- Clear localStorage and refresh: `localStorage.clear()`

**Build errors?**
- Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Clear Vite cache: `rm -rf .vite`

## 📝 License

MIT License

## 👨‍💻 Author

Created by Ankit Mishra

## 🙏 Acknowledgments

- Built with modern React best practices
- Inspired by enterprise CRM solutions like Zoho, Salesforce, and HubSpot
- UI/UX designed for productivity and ease of use