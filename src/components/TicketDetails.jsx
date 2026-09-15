import React from 'react';

export default function TicketDetails({ ticket, onClose }) {
  if (!ticket) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white p-6 md:p-8 rounded-3xl max-w-2xl w-full shadow-2xl border border-gray-200">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-2xl font-black text-gray-950 mb-1">{ticket.subject}</h2>
            <p className="text-sm font-bold text-gray-400">Ticket ID: {ticket.id}</p>
          </div>
          <button onClick={onClose} className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-500 transition-colors">
            <span className="text-xl font-bold">&times;</span>
          </button>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-6 bg-gray-50 p-5 rounded-2xl border border-gray-100">
          <div>
            <span className="text-gray-400 block text-xs font-bold uppercase tracking-wider mb-1">Customer Name</span>
            <span className="font-bold text-gray-900">{ticket.customerName}</span>
          </div>
          <div>
            <span className="text-gray-400 block text-xs font-bold uppercase tracking-wider mb-1">Date & Time</span>
            <span className="font-bold text-gray-900">{ticket.date}</span>
          </div>
          <div>
            <span className="text-gray-400 block text-xs font-bold uppercase tracking-wider mb-1">Priority</span>
            <span className="font-bold text-gray-900">{ticket.priority}</span>
          </div>
          <div>
            <span className="text-gray-400 block text-xs font-bold uppercase tracking-wider mb-1">Current Status</span>
            <span className="font-bold text-gray-900">{ticket.status}</span>
          </div>
        </div>

        <div className="bg-white border border-gray-200 p-5 rounded-2xl mb-8 shadow-sm">
          <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wider mb-4">Conversation History</h4>
          <div className="space-y-4">
            {ticket.messages.map((msg, i) => (
              <div key={i} className="bg-gray-50 border border-gray-100 text-gray-800 p-4 rounded-xl text-sm font-medium">
                {msg}
              </div>
            ))}
          </div>
        </div>

        <button onClick={onClose} className="w-full bg-black text-yellow-400 hover:bg-gray-900 px-4 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg">
          Close Ticket
        </button>
      </div>
    </div>
  );
}