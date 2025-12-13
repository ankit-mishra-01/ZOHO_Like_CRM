import React from 'react';
import { Users, DollarSign, TrendingUp, CheckCircle } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useStore } from '../store/useStore';

const Dashboard = () => {
  const { contacts, deals, tasks } = useStore();
  
  const activeContacts = contacts.filter(c => c.status === 'Active').length;
  const totalDealsValue = deals.reduce((sum, deal) => sum + deal.value, 0);
  const completedTasks = tasks.filter(t => t.completed).length;
  const conversionRate = deals.length > 0 ? ((deals.filter(d => d.stage === 'Closed Won').length / deals.length) * 100).toFixed(1) : '0';

  const stats = [
    { label: 'Total Contacts', value: contacts.length.toString(), change: `${activeContacts} Active`, icon: Users, color: 'bg-blue-500' },
    { label: 'Active Deals', value: `$${(totalDealsValue / 1000).toFixed(0)}K`, change: `${deals.length} Deals`, icon: DollarSign, color: 'bg-green-500' },
    { label: 'Conversion Rate', value: `${conversionRate}%`, change: 'From all deals', icon: TrendingUp, color: 'bg-purple-500' },
    { label: 'Tasks Completed', value: completedTasks.toString(), change: `${tasks.length} Total`, icon: CheckCircle, color: 'bg-orange-500' },
  ];

  const revenueData = [
    { month: 'Jan', revenue: 45000 },
    { month: 'Feb', revenue: 52000 },
    { month: 'Mar', revenue: 48000 },
    { month: 'Apr', revenue: 61000 },
    { month: 'May', revenue: 55000 },
    { month: 'Jun', revenue: 67000 },
  ];

  const dealsData = [
    { stage: 'Lead', count: deals.filter(d => d.stage === 'Lead').length },
    { stage: 'Qualified', count: deals.filter(d => d.stage === 'Qualified').length },
    { stage: 'Proposal', count: deals.filter(d => d.stage === 'Proposal').length },
    { stage: 'Negotiation', count: deals.filter(d => d.stage === 'Negotiation').length },
    { stage: 'Closed', count: deals.filter(d => d.stage === 'Closed Won').length },
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">{stat.label}</p>
                <h3 className="text-2xl font-bold text-gray-800 mt-2">{stat.value}</h3>
                <p className="text-green-500 text-sm mt-1">{stat.change}</p>
              </div>
              <div className={`${stat.color} p-4 rounded-lg`}>
                <stat.icon className="text-white" size={24} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Revenue Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="revenue" stroke="#6366f1" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Deals Pipeline</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dealsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="stage" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#10b981" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;