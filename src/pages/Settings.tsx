import React from 'react';
import { User, Bell, Lock, Palette, Globe, Database } from 'lucide-react';

const Settings = () => {
  const sections = [
    { icon: User, title: 'Profile Settings', description: 'Manage your personal information and preferences' },
    { icon: Bell, title: 'Notifications', description: 'Configure email and push notification preferences' },
    { icon: Lock, title: 'Security', description: 'Password, two-factor authentication, and security settings' },
    { icon: Palette, title: 'Appearance', description: 'Customize theme, layout, and display options' },
    { icon: Globe, title: 'Integrations', description: 'Connect with third-party apps and services' },
    { icon: Database, title: 'Data & Privacy', description: 'Manage your data, exports, and privacy settings' },
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Settings</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sections.map((section, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer">
            <div className="flex items-start gap-4">
              <div className="bg-indigo-100 p-3 rounded-lg">
                <section.icon className="text-indigo-600" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{section.title}</h3>
                <p className="text-gray-600">{section.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 mt-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Account Information</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <input type="text" defaultValue="John Doe" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input type="email" defaultValue="john@example.com" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
            <input type="text" defaultValue="Acme Corporation" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
          </div>
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;