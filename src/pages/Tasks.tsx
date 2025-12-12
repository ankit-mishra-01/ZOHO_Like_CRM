import React, { useState } from 'react';
import { Plus, CheckCircle, Circle, Calendar, User, Flag } from 'lucide-react';

const Tasks = () => {
  const [filter, setFilter] = useState('all');

  const tasks = [
    { id: 1, title: 'Follow up with John Doe', description: 'Discuss enterprise deal proposal', dueDate: '2024-01-15', priority: 'high', assignee: 'You', completed: false },
    { id: 2, title: 'Prepare quarterly report', description: 'Compile Q4 sales data and insights', dueDate: '2024-01-18', priority: 'medium', assignee: 'Sarah Johnson', completed: false },
    { id: 3, title: 'Update CRM database', description: 'Import new contacts from trade show', dueDate: '2024-01-12', priority: 'low', assignee: 'Mike Chen', completed: true },
    { id: 4, title: 'Client presentation', description: 'Present new product features to ABC Corp', dueDate: '2024-01-20', priority: 'high', assignee: 'You', completed: false },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Tasks</h1>
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2 shadow-md">
          <Plus size={20} /> New Task
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <div className="flex gap-4">
          <button onClick={() => setFilter('all')} className={`px-4 py-2 rounded-lg font-medium transition-colors ${filter === 'all' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
            All Tasks
          </button>
          <button onClick={() => setFilter('active')} className={`px-4 py-2 rounded-lg font-medium transition-colors ${filter === 'active' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
            Active
          </button>
          <button onClick={() => setFilter('completed')} className={`px-4 py-2 rounded-lg font-medium transition-colors ${filter === 'completed' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
            Completed
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {tasks.map((task) => (
          <div key={task.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <button className="mt-1">
                {task.completed ? (
                  <CheckCircle className="text-green-500" size={24} />
                ) : (
                  <Circle className="text-gray-400" size={24} />
                )}
              </button>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <h3 className={`text-lg font-bold ${task.completed ? 'text-gray-400 line-through' : 'text-gray-800'}`}>
                    {task.title}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 ${getPriorityColor(task.priority)}`}>
                    <Flag size={14} />
                    {task.priority}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{task.description}</p>
                <div className="flex items-center gap-6 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>Due: {task.dueDate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    <span>{task.assignee}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasks;