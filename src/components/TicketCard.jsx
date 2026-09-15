import React from 'react';

export default function TicketCard({
  ticket,
  onUpdateStatus,
  onViewDetails,
}) {
  const priorityStyles = {
    High: 'bg-red-50 text-red-700 border-red-200',
    Medium: 'bg-yellow-50 text-yellow-800 border-yellow-200',
    Low: 'bg-green-50 text-green-700 border-green-200',
  };

  return (
    <tr
      className="
        group
        border-b
        border-gray-100
        hover:bg-gray-50/70
        transition-colors
      "
    >
      {/* Customer */}
      <td
        className="
          p-2
          sm:p-3
          md:p-4
          lg:p-5
          align-middle
        "
      >
        <div
          className="
            font-bold
            text-gray-900
            text-[11px]
            sm:text-xs
            md:text-sm
            lg:text-base
            leading-tight
            max-w-[90px]
            sm:max-w-[130px]
            md:max-w-[170px]
            lg:max-w-[220px]
            truncate
          "
          title={ticket.customerName}
        >
          {ticket.customerName}
        </div>

        <div
          className="
            text-[9px]
            sm:text-[10px]
            md:text-xs
            text-gray-400
            mt-0.5
            sm:mt-1
            font-medium
            truncate
            max-w-[90px]
            sm:max-w-[130px]
            md:max-w-[170px]
            lg:max-w-[220px]
          "
        >
          {ticket.id}
        </div>
      </td>

      {/* Subject */}
      <td
        className="
          p-2
          sm:p-3
          md:p-4
          lg:p-5
          align-middle
        "
      >
        <div
          className="
            text-gray-700
            font-medium
            text-[10px]
            sm:text-xs
            md:text-sm
            lg:text-sm
            leading-snug
            max-w-[100px]
            sm:max-w-[160px]
            md:max-w-[240px]
            lg:max-w-[320px]
            xl:max-w-[400px]
            truncate
          "
          title={ticket.subject}
        >
          {ticket.subject}
        </div>
      </td>

      {/* Date */}
      <td
        className="
          p-2
          sm:p-3
          md:p-4
          lg:p-5
          align-middle
        "
      >
        <span
          className="
            text-gray-500
            text-[10px]
            sm:text-xs
            md:text-sm
            font-medium
            whitespace-nowrap
          "
        >
          {ticket.date.split(' ')[0]}
        </span>
      </td>

      {/* Priority */}
      <td
        className="
          p-2
          sm:p-3
          md:p-4
          lg:p-5
          align-middle
        "
      >
        <span
          className={`
            inline-flex
            items-center
            justify-center
            px-2
            py-0.5
            sm:px-2.5
            sm:py-1
            md:px-3
            md:py-1
            rounded-full
            text-[9px]
            sm:text-[10px]
            md:text-xs
            font-bold
            border
            whitespace-nowrap
            ${priorityStyles[ticket.priority]}
          `}
        >
          {ticket.priority}
        </span>
      </td>

      {/* Status */}
      <td
        className="
          p-2
          sm:p-3
          md:p-4
          lg:p-5
          align-middle
        "
      >
        <select
          value={ticket.status}
          onChange={(e) =>
            onUpdateStatus(ticket.id, e.target.value)
          }
          className="
            w-full
            min-w-[90px]
            sm:min-w-[105px]
            md:min-w-[120px]
            lg:min-w-[135px]
            py-1
            px-1.5
            sm:py-1.5
            sm:px-2
            md:px-3
            border
            border-gray-200
            rounded-md
            sm:rounded-lg
            text-[9px]
            sm:text-[10px]
            md:text-xs
            lg:text-sm
            font-semibold
            text-gray-800
            bg-white
            cursor-pointer
            hover:border-yellow-400
            focus:ring-2
            focus:ring-yellow-400
            focus:border-yellow-400
            outline-none
            transition-all
            shadow-sm
          "
        >
          <option value="Open">Open</option>
          <option value="In Progress">In Progress</option>
          <option value="Resolved">Resolved</option>
        </select>
      </td>

      {/* View Details */}
      <td
        className="
          p-2
          sm:p-3
          md:p-4
          lg:p-5
          align-middle
          text-right
        "
      >
        <button
          onClick={() => onViewDetails(ticket)}
          className="
            inline-flex
            items-center
            justify-center
            whitespace-nowrap
            bg-yellow-400
            hover:bg-yellow-500
            active:bg-yellow-600
            text-black
            px-2
            py-1.5
            sm:px-3
            sm:py-2
            md:px-3.5
            md:py-2
            lg:px-4
            lg:py-2
            rounded-md
            sm:rounded-lg
            text-[9px]
            sm:text-[10px]
            md:text-xs
            lg:text-sm
            font-bold
            transition-all
            duration-200
            shadow-sm
            hover:shadow-md
            active:scale-95
          "
        >
          <span className="hidden sm:inline">
            View Details
          </span>

          <span className="sm:hidden">
            View
          </span>
        </button>
      </td>
    </tr>
  );
}