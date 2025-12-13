import React from 'react';
import { TrendingUp, Users, DollarSign, Target } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useStore } from '../store/useStore';

const Analytics = () => {
  const { contacts, deals, tasks } = useStore();

  const totalRevenue = deals.reduce((sum, deal) => sum + deal.value, 0);
  const newLeads = deals.filter(d => d.stage === 'Lead').length;
  const conversionRate = deals.length > 0 ? ((deals.filter(d => d.stage === 'Closed Won').length / deals.length) * 100).toFixed(1) : '0';
  const growthRate = 42; // This would be calculated from historical data

  const salesData = [
    { month: 'Jul', sales: 42000, leads: 120 },
    { month: 'Aug', sales: 48000, leads: 145 },
    { month: 'Sep', sales: 51000, leads: 132 },
    { month: 'Oct', sales: 58000, leads: 168 },
    { month: 'Nov', sales: 62000, leads: 175 },
    { month: 'Dec', sales: totalRevenue, leads: newLeads },
  ];

  const sourceData = [
    { name: 'Website', value: 35 },
    { name: 'Referral', value: 25 },
    { name: 'Social Media', value: 20 },
    { name: 'Email', value: 15 },
    { name: 'Other', value: 5 },
  ];

  const COLORS = ['#6366f1', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Analytics & Reports</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Revenue</p>
              <h3 className="text-2xl font-bold text-gray-800 mt-2">${(totalRevenue / 1000).toFixed(0)}K</h3>
              <p className="text-green-500 text-sm mt-1">From {deals.length} deals</p>
            </div>
            <div className="bg-green-500 p-4 rounded-lg">
              <DollarSign className="text-white" size={24} />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">New Leads</p>
              <h3 className="text-2xl font-bold text-gray-800 mt-2">{newLeads}</h3>
              <p className="text-green-500 text-sm mt-1">Active pipeline</p>
            </div>
            <div className="bg-blue-500 p-4 rounded-lg">
              <Users className="text-white" size={24} />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Conversion Rate</p>
              <h3 className="text-2xl font-bold text-gray-800 mt-2">{conversionRate}%</h3>
              <p className="text-green-500 text-sm mt-1">Win rate</p>
            </div>
            <div className="bg-purple-500 p-4 rounded-lg">
              <Target className="text-white" size={24} />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Growth Rate</p>
              <h3 className="text-2xl font-bold text-gray-800 mt-2">{growthRate}%</h3>
              <p className="text-green-500 text-sm mt-1">Year over year</p>
            </div>
            <div className="bg-orange-500 p-4 rounded-lg">
              <TrendingUp className="text-white" size={24} />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Sales & Leads Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="sales" stroke="#6366f1" strokeWidth={2} name="Sales ($)" />
              <Line type="monotone" dataKey="leads" stroke="#10b981" strokeWidth={2} name="Leads" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Lead Sources</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={sourceData} cx="50%" cy="50%" labelLine={false} label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`} outerRadius={100} fill="#8884d8" dataKey="value">
                {sourceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {contacts.slice(0, 5).map((contact, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-semibold">
                  {contact.avatar}
                </div>
                <div>
                  <p className="font-medium text-gray-800">{contact.name}</p>
                  <p className="text-sm text-gray-500">{contact.company}</p>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${contact.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                {contact.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Analytics;