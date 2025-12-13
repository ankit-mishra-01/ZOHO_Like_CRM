import React, { useState } from 'react';
import { Plus, DollarSign, Calendar, User, Edit, Trash } from 'lucide-react';
import { useStore, Deal } from '../store/useStore';
import Modal from '../components/Modal';

const Deals = () => {
  const { deals, contacts, addDeal, updateDeal, deleteDeal } = useStore();
  const [showModal, setShowModal] = useState(false);
  const [editingDeal, setEditingDeal] = useState<Deal | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    value: 0,
    stage: 'Lead' as Deal['stage'],
    contactId: '',
    closeDate: '',
    probability: 50,
  });

  const totalPipelineValue = deals.reduce((sum, deal) => sum + deal.value, 0);
  const avgDealSize = deals.length > 0 ? totalPipelineValue / deals.length : 0;

  const handleOpenModal = (deal?: Deal) => {
    if (deal) {
      setEditingDeal(deal);
      setFormData({
        title: deal.title,
        value: deal.value,
        stage: deal.stage,
        contactId: deal.contactId,
        closeDate: deal.closeDate,
        probability: deal.probability,
      });
    } else {
      setEditingDeal(null);
      setFormData({
        title: '',
        value: 0,
        stage: 'Lead',
        contactId: '',
        closeDate: '',
        probability: 50,
      });
    }
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingDeal(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const contact = contacts.find(c => c.id === formData.contactId);
    if (!contact) return;

    const dealData = {
      ...formData,
      contactName: contact.name,
    };

    if (editingDeal) {
      updateDeal(editingDeal.id, dealData);
    } else {
      addDeal(dealData);
    }
    
    handleCloseModal();
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this deal?')) {
      deleteDeal(id);
    }
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Deals Pipeline</h1>
        <button onClick={() => handleOpenModal()} className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2 shadow-md">
          <Plus size={20} /> New Deal
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Pipeline Value</p>
              <h3 className="text-3xl font-bold text-gray-800 mt-2">${totalPipelineValue.toLocaleString()}</h3>
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
              <h3 className="text-3xl font-bold text-gray-800 mt-2">{deals.length}</h3>
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
              <h3 className="text-3xl font-bold text-gray-800 mt-2">${Math.round(avgDealSize).toLocaleString()}</h3>
            </div>
            <div className="bg-purple-500 p-4 rounded-lg">
              <DollarSign className="text-white" size={24} />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {deals.map((deal) => (
          <div key={deal.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow relative">
            <div className="absolute top-4 right-4 flex gap-2">
              <button onClick={() => handleOpenModal(deal)} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Edit size={16} className="text-gray-600" />
              </button>
              <button onClick={() => handleDelete(deal.id)} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Trash size={16} className="text-red-600" />
              </button>
            </div>
            <div className="flex justify-between items-start mb-4 pr-16">
              <h3 className="text-lg font-bold text-gray-800">{deal.title}</h3>
              <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium whitespace-nowrap">
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
                <span>{deal.contactName}</span>
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

      <Modal isOpen={showModal} onClose={handleCloseModal} title={editingDeal ? 'Edit Deal' : 'Create New Deal'}>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Deal Title *</label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Enterprise Software Deal"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Deal Value ($) *</label>
            <input
              type="number"
              required
              min="0"
              value={formData.value}
              onChange={(e) => setFormData({ ...formData, value: Number(e.target.value) })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="45000"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Stage *</label>
            <select
              value={formData.stage}
              onChange={(e) => setFormData({ ...formData, stage: e.target.value as Deal['stage'] })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              <option value="Lead">Lead</option>
              <option value="Qualified">Qualified</option>
              <option value="Proposal">Proposal</option>
              <option value="Negotiation">Negotiation</option>
              <option value="Closed Won">Closed Won</option>
              <option value="Closed Lost">Closed Lost</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Contact *</label>
            <select
              required
              value={formData.contactId}
              onChange={(e) => setFormData({ ...formData, contactId: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              <option value="">Select a contact</option>
              {contacts.map(contact => (
                <option key={contact.id} value={contact.id}>{contact.name} - {contact.company}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Expected Close Date *</label>
            <input
              type="date"
              required
              value={formData.closeDate}
              onChange={(e) => setFormData({ ...formData, closeDate: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Probability (%): {formData.probability}%</label>
            <input
              type="range"
              min="0"
              max="100"
              value={formData.probability}
              onChange={(e) => setFormData({ ...formData, probability: Number(e.target.value) })}
              className="w-full"
            />
          </div>
          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              className="flex-1 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors font-medium"
            >
              {editingDeal ? 'Update Deal' : 'Create Deal'}
            </button>
            <button
              type="button"
              onClick={handleCloseModal}
              className="flex-1 bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors font-medium"
            >
              Cancel
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Deals;