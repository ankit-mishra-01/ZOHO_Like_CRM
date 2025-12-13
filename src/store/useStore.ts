import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  status: 'Active' | 'Inactive';
  avatar: string;
  createdAt: string;
}

export interface Deal {
  id: string;
  title: string;
  value: number;
  stage: 'Lead' | 'Qualified' | 'Proposal' | 'Negotiation' | 'Closed Won' | 'Closed Lost';
  contactId: string;
  contactName: string;
  closeDate: string;
  probability: number;
  createdAt: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  priority: 'high' | 'medium' | 'low';
  assignee: string;
  completed: boolean;
  createdAt: string;
}

interface Store {
  contacts: Contact[];
  deals: Deal[];
  tasks: Task[];
  
  // Contact actions
  addContact: (contact: Omit<Contact, 'id' | 'createdAt'>) => void;
  updateContact: (id: string, contact: Partial<Contact>) => void;
  deleteContact: (id: string) => void;
  
  // Deal actions
  addDeal: (deal: Omit<Deal, 'id' | 'createdAt'>) => void;
  updateDeal: (id: string, deal: Partial<Deal>) => void;
  deleteDeal: (id: string) => void;
  
  // Task actions
  addTask: (task: Omit<Task, 'id' | 'createdAt'>) => void;
  updateTask: (id: string, task: Partial<Task>) => void;
  deleteTask: (id: string) => void;
  toggleTaskComplete: (id: string) => void;
}

const generateId = () => Math.random().toString(36).substr(2, 9);

export const useStore = create<Store>()(
  persist(
    (set) => ({
      contacts: [
        { id: '1', name: 'John Doe', email: 'john@example.com', phone: '+1 234 567 8900', company: 'Acme Corp', status: 'Active', avatar: 'JD', createdAt: new Date().toISOString() },
        { id: '2', name: 'Jane Smith', email: 'jane@example.com', phone: '+1 234 567 8901', company: 'Tech Inc', status: 'Active', avatar: 'JS', createdAt: new Date().toISOString() },
        { id: '3', name: 'Bob Johnson', email: 'bob@example.com', phone: '+1 234 567 8902', company: 'StartUp LLC', status: 'Inactive', avatar: 'BJ', createdAt: new Date().toISOString() },
        { id: '4', name: 'Alice Williams', email: 'alice@example.com', phone: '+1 234 567 8903', company: 'Global Solutions', status: 'Active', avatar: 'AW', createdAt: new Date().toISOString() },
      ],
      deals: [
        { id: '1', title: 'Enterprise Software Deal', value: 45000, stage: 'Proposal', contactId: '1', contactName: 'John Doe', closeDate: '2024-01-15', probability: 70, createdAt: new Date().toISOString() },
        { id: '2', title: 'Marketing Campaign', value: 12000, stage: 'Negotiation', contactId: '2', contactName: 'Jane Smith', closeDate: '2024-01-20', probability: 85, createdAt: new Date().toISOString() },
        { id: '3', title: 'Consulting Services', value: 28000, stage: 'Qualified', contactId: '3', contactName: 'Bob Johnson', closeDate: '2024-02-01', probability: 50, createdAt: new Date().toISOString() },
        { id: '4', title: 'Product License', value: 8500, stage: 'Lead', contactId: '4', contactName: 'Alice Williams', closeDate: '2024-02-10', probability: 30, createdAt: new Date().toISOString() },
      ],
      tasks: [
        { id: '1', title: 'Follow up with John Doe', description: 'Discuss enterprise deal proposal', dueDate: '2024-01-15', priority: 'high', assignee: 'You', completed: false, createdAt: new Date().toISOString() },
        { id: '2', title: 'Prepare quarterly report', description: 'Compile Q4 sales data and insights', dueDate: '2024-01-18', priority: 'medium', assignee: 'Sarah Johnson', completed: false, createdAt: new Date().toISOString() },
        { id: '3', title: 'Update CRM database', description: 'Import new contacts from trade show', dueDate: '2024-01-12', priority: 'low', assignee: 'Mike Chen', completed: true, createdAt: new Date().toISOString() },
        { id: '4', title: 'Client presentation', description: 'Present new product features to ABC Corp', dueDate: '2024-01-20', priority: 'high', assignee: 'You', completed: false, createdAt: new Date().toISOString() },
      ],
      
      // Contact actions
      addContact: (contact) => set((state) => ({
        contacts: [...state.contacts, { ...contact, id: generateId(), createdAt: new Date().toISOString() }]
      })),
      updateContact: (id, contact) => set((state) => ({
        contacts: state.contacts.map(c => c.id === id ? { ...c, ...contact } : c)
      })),
      deleteContact: (id) => set((state) => ({
        contacts: state.contacts.filter(c => c.id !== id)
      })),
      
      // Deal actions
      addDeal: (deal) => set((state) => ({
        deals: [...state.deals, { ...deal, id: generateId(), createdAt: new Date().toISOString() }]
      })),
      updateDeal: (id, deal) => set((state) => ({
        deals: state.deals.map(d => d.id === id ? { ...d, ...deal } : d)
      })),
      deleteDeal: (id) => set((state) => ({
        deals: state.deals.filter(d => d.id !== id)
      })),
      
      // Task actions
      addTask: (task) => set((state) => ({
        tasks: [...state.tasks, { ...task, id: generateId(), createdAt: new Date().toISOString() }]
      })),
      updateTask: (id, task) => set((state) => ({
        tasks: state.tasks.map(t => t.id === id ? { ...t, ...task } : t)
      })),
      deleteTask: (id) => set((state) => ({
        tasks: state.tasks.filter(t => t.id !== id)
      })),
      toggleTaskComplete: (id) => set((state) => ({
        tasks: state.tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t)
      })),
    }),
    {
      name: 'crm-storage',
    }
  )
);