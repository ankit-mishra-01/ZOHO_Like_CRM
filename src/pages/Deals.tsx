import React, { useState } from 'react';
import { Plus, DollarSign, Calendar, User } from 'lucide-react';

const Deals = () => {
  const stages = ['Lead', 'Qualified', 'Proposal', 'Negotiation', 'Closed Won', 'Closed Lost'];
  
  const deals = [
    { id: 1, title: 'Enterprise Software Deal', value: 45000, stage: 'Proposal', contact: 'John Doe', closeDate: '2024-01-15', probability: 70 },
    { id: 2, title: 'Marketing Campaign', value: 12000, stage: 'Negotiation', contact: 'Jane Smith', closeDate: '2024-01-20', probability: 85 },
    { id: 3, title: 'Consulting Services', value: 28000, stage: 'Qualified', contact: 'Bob Johnson', closeDate: '2024-02-01', probability: 50 },
    { id: 4, title: 'Product License', value: 8500, stage: 'Lead', contact: 'Alice Williams', closeDate: '2024-02-10', probability: 30 },
  ];

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Deals Pipeline</h1>
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2 shadow-md">
          <Plus size={20} /> New Deal
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Pipeline Value</p>
              <h3 className="text-3xl font-bold text-gray-800 mt-2">$93,500</h3>
            </div>
            <div className="bg-green-500 p-4 rounded-lg">
              <DollarSign className="text-white" size={24} />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Active Deals</p>
              <h3 className="text-3xl font-bold text-gray-800 mt-2">4</h3>
            </div>
            <div className="bg-blue-500 p-4 rounded-lg">
              <Calendar className="text-white" size={24} />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Avg Deal Size</p>
              <h3 className="text-3xl font-bold text-gray-800 mt-2">$23,375</h3>
            </div>
            <div className="bg-purple-500 p-4 rounded-lg">
              <DollarSign className="text-white" size={24} />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {deals.map((deal) => (
          <div key={deal.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-bold text-gray-800">{deal.title}</h3>
              <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                {deal.stage}
              </span>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-600">
                <DollarSign size={18} />
                <span className="font-semibold text-green-600">${deal.value.toLocaleString()}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <User size={18} />
                <span>{deal.contact}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar size={18} />
                <span>{deal.closeDate}</span>
              </div>
              <div className="mt-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Probability</span>
                  <span className="font-semibold">{deal.probability}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-indigo-600 h-2 rounded-full" style={{ width: `${deal.probability}%` }}></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Deals;