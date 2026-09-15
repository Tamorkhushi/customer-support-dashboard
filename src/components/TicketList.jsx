import React, { useState } from 'react';
import TicketCard from './TicketCard';

export default function TicketList({
  tickets,
  onUpdateStatus,
  onViewDetails,
}) {
  // Controls how many tickets are displayed
  const [visibleCount, setVisibleCount] = useState(5);

  // Reset visible count if the filtered ticket list becomes empty
  React.useEffect(() => {
    if (tickets.length === 0) {
      setVisibleCount(5);
    }
  }, [tickets.length]);

  // Empty State
  if (tickets.length === 0) {
    return (
      <div
        className="
          w-full
          min-h-[180px]
          sm:min-h-[200px]
          md:min-h-[220px]
          lg:min-h-[240px]
          bg-white
          rounded-xl
          sm:rounded-2xl
          border
          border-gray-200
          shadow-sm
          flex
          items-center
          justify-center
          px-4
          py-8
          sm:px-6
          sm:py-10
          md:px-8
          md:py-12
          lg:px-12
          lg:py-14
          text-center
        "
      >
        <div className="w-full max-w-md">
          <p
            className="
              text-sm
              sm:text-base
              md:text-lg
              lg:text-xl
              text-gray-500
              font-bold
              leading-tight
            "
          >
            No matching tickets found.
          </p>

          <p
            className="
              text-[11px]
              sm:text-xs
              md:text-sm
              lg:text-sm
              text-gray-400
              mt-1
              sm:mt-1.5
              md:mt-2
              leading-relaxed
            "
          >
            Try adjusting your search or filters.
          </p>
        </div>
      </div>
    );
  }

  // Display only the requested number of tickets
  const displayedTickets = tickets.slice(0, visibleCount);

  // Check if more tickets are available
  const hasMore = visibleCount < tickets.length;

  // Check if list has been expanded
  const isExpanded = visibleCount > 5;

  return (
    <div
      className="
        w-full
        min-w-0
        bg-white
        rounded-xl
        sm:rounded-2xl
        border
        border-gray-200
        shadow-sm
        overflow-hidden
      "
    >

      {/* Table Wrapper */}
      <div
        className="
          w-full
          overflow-x-auto
          overflow-y-hidden
          scrollbar-thin
          scrollbar-thumb-gray-300
          scrollbar-track-gray-100
        "
      >
        <table
          className="
            w-full
            min-w-[680px]
            sm:min-w-[720px]
            md:min-w-[800px]
            lg:min-w-full
            text-left
            border-collapse
          "
        >

          {/* Table Header */}
          <thead
            className="
              bg-gray-50
              border-b
              border-gray-200
            "
          >
            <tr>

              {/* Customer */}
              <th
                className="
                  p-2
                  sm:p-3
                  md:p-4
                  lg:p-5
                  xl:p-6
                  text-[9px]
                  sm:text-[10px]
                  md:text-xs
                  lg:text-xs
                  font-bold
                  uppercase
                  tracking-[0.08em]
                  sm:tracking-[0.1em]
                  md:tracking-wider
                  text-gray-500
                  whitespace-nowrap
                "
              >
                Customer Details
              </th>

              {/* Subject */}
              <th
                className="
                  p-2
                  sm:p-3
                  md:p-4
                  lg:p-5
                  xl:p-6
                  text-[9px]
                  sm:text-[10px]
                  md:text-xs
                  lg:text-xs
                  font-bold
                  uppercase
                  tracking-[0.08em]
                  sm:tracking-[0.1em]
                  md:tracking-wider
                  text-gray-500
                  whitespace-nowrap
                "
              >
                Issue Subject
              </th>

              {/* Date */}
              <th
                className="
                  p-2
                  sm:p-3
                  md:p-4
                  lg:p-5
                  xl:p-6
                  text-[9px]
                  sm:text-[10px]
                  md:text-xs
                  lg:text-xs
                  font-bold
                  uppercase
                  tracking-[0.08em]
                  sm:tracking-[0.1em]
                  md:tracking-wider
                  text-gray-500
                  whitespace-nowrap
                "
              >
                Date
              </th>

              {/* Priority */}
              <th
                className="
                  p-2
                  sm:p-3
                  md:p-4
                  lg:p-5
                  xl:p-6
                  text-[9px]
                  sm:text-[10px]
                  md:text-xs
                  lg:text-xs
                  font-bold
                  uppercase
                  tracking-[0.08em]
                  sm:tracking-[0.1em]
                  md:tracking-wider
                  text-gray-500
                  whitespace-nowrap
                "
              >
                Priority
              </th>

              {/* Status */}
              <th
                className="
                  p-2
                  sm:p-3
                  md:p-4
                  lg:p-5
                  xl:p-6
                  text-[9px]
                  sm:text-[10px]
                  md:text-xs
                  lg:text-xs
                  font-bold
                  uppercase
                  tracking-[0.08em]
                  sm:tracking-[0.1em]
                  md:tracking-wider
                  text-gray-500
                  whitespace-nowrap
                "
              >
                Status
              </th>

              {/* Action */}
              <th
                className="
                  p-2
                  sm:p-3
                  md:p-4
                  lg:p-5
                  xl:p-6
                  text-[9px]
                  sm:text-[10px]
                  md:text-xs
                  lg:text-xs
                  font-bold
                  uppercase
                  tracking-[0.08em]
                  sm:tracking-[0.1em]
                  md:tracking-wider
                  text-gray-500
                  text-right
                  whitespace-nowrap
                "
              >
                Action
              </th>

            </tr>
          </thead>

          {/* Table Body */}
          <tbody
            className="
              divide-y
              divide-gray-100
            "
          >
            {displayedTickets.map((ticket) => (
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

      {/* Show More / Show Less */}
      {(hasMore || isExpanded) && (
        <div
          className="
            w-full
            p-3
            sm:p-4
            md:p-5
            lg:p-6
            bg-gray-50/70
            border-t
            border-gray-200
            flex
            flex-col
            xs:flex-row
            sm:flex-row
            items-center
            justify-center
            gap-2
            sm:gap-3
            md:gap-4
          "
        >

          {/* Show More */}
          {hasMore && (
            <button
              onClick={() =>
                setVisibleCount((prev) => prev + 5)
              }
              className="
                w-full
                xs:w-auto
                sm:w-auto
                min-w-[130px]
                sm:min-w-[150px]
                md:min-w-[170px]
                px-3
                py-2
                sm:px-4
                sm:py-2.5
                md:px-5
                md:py-2.5
                lg:px-6
                lg:py-3
                bg-zinc-900
                hover:bg-black
                active:bg-black
                text-yellow-400
                font-bold
                rounded-lg
                sm:rounded-xl
                text-[10px]
                sm:text-xs
                md:text-sm
                lg:text-sm
                transition-all
                duration-200
                shadow-sm
                hover:shadow-md
                active:scale-[0.98]
                whitespace-nowrap
              "
            >
              Show More Tickets
            </button>
          )}

          {/* Show Less */}
          {isExpanded && (
            <button
              onClick={() => setVisibleCount(5)}
              className="
                w-full
                xs:w-auto
                sm:w-auto
                min-w-[130px]
                sm:min-w-[150px]
                md:min-w-[170px]
                px-3
                py-2
                sm:px-4
                sm:py-2.5
                md:px-5
                md:py-2.5
                lg:px-6
                lg:py-3
                bg-white
                border
                border-gray-200
                text-gray-700
                hover:bg-gray-100
                hover:text-black
                active:bg-gray-100
                font-bold
                rounded-lg
                sm:rounded-xl
                text-[10px]
                sm:text-xs
                md:text-sm
                lg:text-sm
                transition-all
                duration-200
                shadow-sm
                hover:shadow-md
                active:scale-[0.98]
                whitespace-nowrap
              "
            >
              Show Less
            </button>
          )}

        </div>
      )}

    </div>
  );
}