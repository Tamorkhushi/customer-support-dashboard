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
<div className="min-h-screen w-full bg-[#fafafa] text-gray-900 font-sans selection:bg-yellow-400 selection:text-black overflow-x-hidden">
  <div className="w-full max-w-[1600px] mx-auto px-3 py-4 sm:px-5 sm:py-6 md:px-6 md:py-8 lg:px-8 lg:py-10 xl:px-10 2xl:px-12">

    {/* Header */}
    <header className="mb-6 sm:mb-8 md:mb-10 lg:mb-12">
      <div className="max-w-4xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-black tracking-tight leading-tight text-gray-950 break-words">
          Support Workspace
        </h1>

        <p className="text-xs sm:text-sm md:text-base lg:text-base font-semibold text-gray-500 mt-1.5 sm:mt-2 md:mt-3 leading-relaxed">
          Manage and resolve customer inquiries.
        </p>
      </div>
    </header>

    {/* Statistics */}
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-6 sm:mb-8 md:mb-10">

      <div className="min-w-0">
        <StatCard
          title="Total Tickets"
          value={stats.Total}
          icon={Ticket}
          colorClass="bg-blue-50"
        />
      </div>

      <div className="min-w-0">
        <StatCard
          title="Open"
          value={stats.Open}
          icon={AlertCircle}
          colorClass="bg-red-50"
        />
      </div>

      <div className="min-w-0">
        <StatCard
          title="In Progress"
          value={stats["In Progress"]}
          icon={Clock}
          colorClass="bg-yellow-50"
        />
      </div>

      <div className="min-w-0">
        <StatCard
          title="Resolved"
          value={stats.Resolved}
          icon={CheckCircle2}
          colorClass="bg-green-50"
        />
      </div>

    </div>

    {/* Filters */}
    <div className="w-full min-w-0 mb-6 sm:mb-8 md:mb-10">
      <Filters
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
        priority={priority}
        setPriority={setPriority}
      />
    </div>

    {/* Ticket List */}
    <section className="w-full min-w-0">
      <TicketList
        tickets={filteredTickets}
        onUpdateStatus={updateStatus}
        onViewDetails={setSelectedTicket}
      />
    </section>

    {/* Ticket Details */}
    <TicketDetails
      ticket={selectedTicket}
      onClose={() => setSelectedTicket(null)}
    />

  </div>
</div>
  );
}