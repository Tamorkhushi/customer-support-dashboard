import React from 'react';

export default function TicketCard({ ticket, onUpdateStatus, onViewDetails }) {
  const priorityStyles = {
    High: 'bg-red-50 text-red-700 border-red-200',
    Medium: 'bg-yellow-50 text-yellow-800 border-yellow-200',
    Low: 'bg-green-50 text-green-700 border-green-200'
  };

  return (
    <tr className="hover:bg-gray-50/50 transition-colors whitespace-nowrap">
      <td className="p-5">
        <div className="font-bold text-gray-900">{ticket.customerName}</div>
        <div className="text-xs text-gray-400 mt-0.5">{ticket.id}</div>
      </td>
      <td className="p-5 text-gray-700 font-medium">{ticket.subject}</td>
      <td className="p-5 text-gray-500 text-sm font-medium">{ticket.date.split(' ')[0]}</td>
      <td className="p-5">
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border ${priorityStyles[ticket.priority]}`}>
          {ticket.priority}
        </span>
      </td>
      <td className="p-5">
        <select 
          value={ticket.status} 
          onChange={(e) => onUpdateStatus(ticket.id, e.target.value)} 
          className="py-1.5 px-3 border border-gray-200 rounded-lg text-sm font-semibold bg-white cursor-pointer hover:border-yellow-400 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-all shadow-sm"
        >
          <option value="Open">Open</option>
          <option value="In Progress">In Progress</option>
          <option value="Resolved">Resolved</option>
        </select>
      </td>
      <td className="p-5 text-right">
        <button 
          onClick={() => onViewDetails(ticket)} 
          className="text-black bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-lg text-sm font-bold transition-colors shadow-sm"
        >
          View Details
        </button>
      </td>
    </tr>
  );
}