import React, { useEffect, useState, useMemo } from 'react';
import {  Ticket,
  Clock,
  CheckCircle2,
  AlertCircle,
  RefreshCw,
  Zap } from 'lucide-react';
import TicketList from './components/TicketList';
import Filters from './components/Filters';
import StatCard from './components/StatCard';
import { useTicketStore } from './store/ticketStore';
import TicketDetails from './components/TicketDetails';


export default function App() {
  const { tickets, isLoading, error, fetchTickets, updateStatus } = useTicketStore();
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('All');
  const [priority, setPriority] = useState('All');
  const [selectedTicket, setSelectedTicket] = useState(null);

  useEffect(() => { 
    fetchTickets(); 
  }, [fetchTickets]);

  const stats = useMemo(() => ({
    Total: tickets.length,
    Open: tickets.filter(t => t.status === 'Open').length,
    'In Progress': tickets.filter(t => t.status === 'In Progress').length,
    Resolved: tickets.filter(t => t.status === 'Resolved').length,
  }), [tickets]);

  const filteredTickets = useMemo(() => tickets.filter(t => {
    const matchSearch = t.customerName.toLowerCase().includes(search.toLowerCase()) || 
                        t.subject.toLowerCase().includes(search.toLowerCase());
    const matchStatus = status === 'All' || t.status === status;
    const matchPriority = priority === 'All' || t.priority === priority;
    return matchSearch && matchStatus && matchPriority;
  }), [tickets, search, status, priority]);

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-gray-900 font-bold">Loading Workspace...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-50 p-4">
        <div className="bg-white border border-red-200 p-8 rounded-2xl shadow-sm flex flex-col items-center max-w-md w-full">
          <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
          <p className="font-bold text-gray-900 text-center mb-6">{error}</p>
          <button onClick={fetchTickets} className="w-full py-3 bg-black text-yellow-400 font-bold rounded-xl hover:bg-gray-900">
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fafafa] text-gray-900 p-4 sm:p-6 lg:p-10 font-sans selection:bg-yellow-400 selection:text-black">
      <div className="max-w-7xl mx-auto">
        <header className="mb-10">
          <h1 className="text-4xl font-black tracking-tight text-gray-950">Support Workspace</h1>
          <p className="text-sm font-semibold text-gray-500 mt-2">Manage and resolve customer inquiries.</p>
        </header>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <StatCard title="Total Tickets" value={stats.Total} icon={Ticket} colorClass="bg-blue-50" />
          <StatCard title="Open" value={stats.Open} icon={AlertCircle} colorClass="bg-red-50" />
          <StatCard title="In Progress" value={stats['In Progress']} icon={Clock} colorClass="bg-yellow-50" />
          <StatCard title="Resolved" value={stats.Resolved} icon={CheckCircle2} colorClass="bg-green-50" />
        </div>

        <Filters 
          search={search} setSearch={setSearch} 
          status={status} setStatus={setStatus} 
          priority={priority} setPriority={setPriority} 
        />

        <TicketList 
          tickets={filteredTickets} 
          onUpdateStatus={updateStatus} 
          onViewDetails={setSelectedTicket} 
        />

        <TicketDetails 
          ticket={selectedTicket} 
          onClose={() => setSelectedTicket(null)} 
        />
      </div>
    </div>
  );
}