import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, DollarSign, CheckSquare, BarChart3, Settings, ChevronLeft, ChevronRight } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const navItems = [
    { path: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/contacts', icon: Users, label: 'Contacts' },
    { path: '/deals', icon: DollarSign, label: 'Deals' },
    { path: '/tasks', icon: CheckSquare, label: 'Tasks' },
    { path: '/analytics', icon: BarChart3, label: 'Analytics' },
    { path: '/settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <aside className={`fixed left-0 top-0 h-screen bg-gradient-to-b from-indigo-600 to-indigo-800 text-white transition-all duration-300 ${isOpen ? 'w-64' : 'w-20'} shadow-xl z-50`}>
      <div className="flex items-center justify-between p-6">
        {isOpen && <h1 className="text-2xl font-bold">CRM Pro</h1>}
        <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-lg hover:bg-indigo-700 transition-colors">
          {isOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </button>
      </div>
      <nav className="mt-8">
        {navItems.map((item) => (
          <NavLink key={item.path} to={item.path} className={({ isActive }) => `flex items-center px-6 py-4 transition-all hover:bg-indigo-700 ${isActive ? 'bg-indigo-700 border-l-4 border-white' : ''}`}>
            <item.icon size={24} />
            {isOpen && <span className="ml-4 font-medium">{item.label}</span>}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;