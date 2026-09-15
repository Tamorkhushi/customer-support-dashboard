import React from 'react';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';

export default function Filters({ search, setSearch, status, setStatus, priority, setPriority }) {
  return (
    <div className="mb-8">
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 md:p-5">
        <div className="flex flex-col xl:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input type="text" placeholder="Search tickets by customer or subject..." className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:bg-white focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-all" value={search} onChange={(e) => setSearch(e.target.value)} />
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative min-w-[180px]">
              <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
              <select className="w-full pl-11 pr-10 py-3.5 bg-gray-50 border border-gray-200 rounded-xl appearance-none text-sm font-semibold text-gray-800 focus:bg-white focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-all cursor-pointer" value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="All">All Statuses</option>
                <option value="Open">Open</option>
                <option value="In Progress">In Progress</option>
                <option value="Resolved">Resolved</option>
              </select>
            </div>
            <div className="relative min-w-[180px]">
              <SlidersHorizontal className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
              <select className="w-full pl-11 pr-10 py-3.5 bg-gray-50 border border-gray-200 rounded-xl appearance-none text-sm font-semibold text-gray-800 focus:bg-white focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-all cursor-pointer" value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option value="All">All Priorities</option>
                <option value="Low">Low Priority</option>
                <option value="Medium">Medium Priority</option>
                <option value="High">High Priority</option>
              </select>
            </div>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Active filters</span>
          {status !== 'All' && <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black text-yellow-400 text-xs font-bold">Status: {status}</span>}
          {priority !== 'All' && <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-yellow-400 text-black text-xs font-bold">Priority: {priority}</span>}
          {status === 'All' && priority === 'All' && <span className="text-xs font-medium text-gray-400">Showing all tickets</span>}
        </div>
      </div>
    </div>
  );
}