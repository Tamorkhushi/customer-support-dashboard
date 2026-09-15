import React, { useState } from 'react';
import TicketCard from './TicketCard';

export default function TicketList({ tickets, onUpdateStatus, onViewDetails }) {
  // State to control how many tickets are shown (defaults to 5)
  const [visibleCount, setVisibleCount] = useState(5);

  if (tickets.length === 0) {
    return (
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-12 text-center">
        <p className="text-gray-500 font-semibold text-lg">No matching tickets found.</p>
        <p className="text-gray-400 text-sm mt-1">Try adjusting your search or filters.</p>
      </div>
    );
  }

  // Slice the array to only show the requested number of tickets
  const displayedTickets = tickets.slice(0, visibleCount);
  const hasMore = visibleCount < tickets.length;
  const isExpanded = visibleCount > 5;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="p-5 text-xs font-bold uppercase tracking-wider text-gray-500">Customer Details</th>
              <th className="p-5 text-xs font-bold uppercase tracking-wider text-gray-500">Issue Subject</th>
              <th className="p-5 text-xs font-bold uppercase tracking-wider text-gray-500">Date</th>
              <th className="p-5 text-xs font-bold uppercase tracking-wider text-gray-500">Priority</th>
              <th className="p-5 text-xs font-bold uppercase tracking-wider text-gray-500">Status</th>
              <th className="p-5 text-xs font-bold uppercase tracking-wider text-gray-500 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {displayedTickets.map(ticket => (
              <TicketCard 
                key={ticket.id} 
                ticket={ticket} 
                onUpdateStatus={onUpdateStatus} 
                onViewDetails={onViewDetails} 
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* Show More / Show Less Controls */}
      {(hasMore || isExpanded) && (
        <div className="p-5 bg-gray-50/50 border-t border-gray-200 flex flex-wrap justify-center gap-4">
          {hasMore && (
            <button
              onClick={() => setVisibleCount(prev => prev + 5)}
              className="px-6 py-2.5 bg-zinc-900 text-yellow-400 font-bold rounded-xl hover:bg-black transition-colors shadow-sm text-sm"
            >
              Show More Tickets
            </button>
          )}
          
          {isExpanded && (
            <button
              onClick={() => setVisibleCount(5)}
              className="px-6 py-2.5 bg-white border border-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-50 hover:text-black transition-colors shadow-sm text-sm"
            >
              Show Less
            </button>
          )}
        </div>
      )}
    </div>
  );
}