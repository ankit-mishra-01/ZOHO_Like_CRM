import React from 'react';
import { TrendingUp, Users, DollarSign, Target } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Analytics = () => {
  const salesData = [
    { month: 'Jul', sales: 42000, leads: 120 },
    { month: 'Aug', sales: 48000, leads: 145 },
    { month: 'Sep', sales: 51000, leads: 132 },
    { month: 'Oct', sales: 58000, leads: 168 },
    { month: 'Nov', sales: 62000, leads: 175 },
    { month: 'Dec', sales: 71000, leads: 192 },
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
              <h3 className="text-2xl font-bold text-gray-800 mt-2">$332K</h3>
              <p className="text-green-500 text-sm mt-1">+18% YoY</p>
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
              <h3 className="text-2xl font-bold text-gray-800 mt-2">932</h3>
              <p className="text-green-500 text-sm mt-1">+24% MoM</p>
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
              <h3 className="text-2xl font-bold text-gray-800 mt-2">28.4%</h3>
              <p className="text-green-500 text-sm mt-1">+3.2% MoM</p>
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
              <h3 className="text-2xl font-bold text-gray-800 mt-2">42%</h3>
              <p className="text-green-500 text-sm mt-1">+12% YoY</p>
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
    </div>
  );
};

export default Analytics;