import React from 'react';

export default function StatCard({ title, value, icon: Icon, colorClass }) {
  return (
    <div className="relative overflow-hidden bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
      <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-yellow-400/10 group-hover:bg-yellow-400/20 transition-colors duration-300" />
      <div className="relative p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">{title}</p>
            <p className="text-4xl font-black tracking-tight text-gray-950">{value}</p>
            <div className="flex items-center gap-1.5 mt-3">
              <span className="w-2 h-2 rounded-full bg-yellow-400" />
              <span className="text-xs font-semibold text-gray-500">Ticket overview</span>
            </div>
          </div>
          <div className={`w-14 h-14 rounded-2xl ${colorClass} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            <Icon className="w-7 h-7 text-black" strokeWidth={2.5} />
          </div>
        </div>
      </div>
      <div className="h-1 w-0 bg-yellow-400 group-hover:w-full transition-all duration-500" />
    </div>
  );
}