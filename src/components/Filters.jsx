import React from 'react';
import {
  Search,
  Filter,
  SlidersHorizontal,
  X,
} from 'lucide-react';

export default function Filters({
  search,
  setSearch,
  status,
  setStatus,
  priority,
  setPriority,
}) {
  const hasActiveFilters =
    status !== 'All' ||
    priority !== 'All' ||
    search.trim() !== '';

  const clearFilters = () => {
    setSearch('');
    setStatus('All');
    setPriority('All');
  };

  return (
    <div
      className="
        w-full
        min-w-0
        mb-5
        sm:mb-6
        md:mb-8
      "
    >
      <div
        className="
          w-full
          bg-white
          rounded-xl
          sm:rounded-2xl
          border
          border-gray-200
          shadow-sm
          p-3
          sm:p-4
          md:p-5
          lg:p-6
        "
      >

        {/* ================= FILTER CONTROLS ================= */}
        <div
          className="
            flex
            flex-col
            xl:flex-row
            gap-2.5
            sm:gap-3
            md:gap-4
          "
        >

          {/* ================= SEARCH ================= */}
          <div
            className="
              relative
              w-full
              min-w-0
              flex-1
            "
          >
            <Search
              className="
                absolute
                left-3
                sm:left-3.5
                md:left-4
                top-1/2
                -translate-y-1/2

                w-4
                h-4

                sm:w-4.5
                sm:h-4.5

                md:w-5
                md:h-5

                text-gray-400

                pointer-events-none
              "
            />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search tickets..."
              className="
                w-full
                min-w-0

                pl-10
                pr-9

                sm:pl-11
                sm:pr-10

                md:pl-12
                md:pr-11

                py-2.5
                sm:py-3
                md:py-3.5

                bg-gray-50
                border
                border-gray-200

                rounded-lg
                sm:rounded-xl

                text-xs
                sm:text-sm
                md:text-sm

                font-medium
                text-gray-900

                placeholder:text-gray-400

                focus:bg-white
                focus:ring-2
                focus:ring-yellow-400
                focus:border-yellow-400

                outline-none

                transition-all
                duration-200
              "
            />

            {/* Clear Search */}
            {search && (
              <button
                type="button"
                onClick={() => setSearch('')}
                aria-label="Clear search"
                className="
                  absolute
                  right-2
                  sm:right-2.5
                  md:right-3

                  top-1/2
                  -translate-y-1/2

                  w-6
                  h-6
                  sm:w-7
                  sm:h-7

                  rounded-md
                  sm:rounded-lg

                  bg-gray-200
                  hover:bg-gray-300

                  flex
                  items-center
                  justify-center

                  text-gray-500

                  transition-colors
                "
              >
                <X
                  className="
                    w-3
                    h-3
                    sm:w-3.5
                    sm:h-3.5
                  "
                  strokeWidth={2.5}
                />
              </button>
            )}
          </div>

          {/* ================= SELECT FILTERS ================= */}
          <div
            className="
              w-full
              xl:w-auto

              grid
              grid-cols-2

              gap-2
              sm:gap-3
            "
          >

            {/* Status */}
            <div
              className="
                relative
                min-w-0

                w-full
                sm:min-w-[150px]
                md:min-w-[170px]
                lg:min-w-[180px]
              "
            >
              <Filter
                className="
                  absolute
                  left-3
                  sm:left-3.5
                  md:left-4

                  top-1/2
                  -translate-y-1/2

                  w-3.5
                  h-3.5

                  sm:w-4
                  sm:h-4

                  text-gray-500

                  pointer-events-none
                  z-10
                "
              />

              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="
                  w-full

                  pl-9
                  pr-7

                  sm:pl-10
                  sm:pr-8

                  md:pl-11
                  md:pr-9

                  py-2.5
                  sm:py-3
                  md:py-3.5

                  bg-gray-50

                  border
                  border-gray-200

                  rounded-lg
                  sm:rounded-xl

                  appearance-none

                  text-[10px]
                  sm:text-xs
                  md:text-sm

                  font-semibold

                  text-gray-800

                  focus:bg-white
                  focus:ring-2
                  focus:ring-yellow-400
                  focus:border-yellow-400

                  outline-none

                  transition-all

                  cursor-pointer
                "
              >
                <option value="All">
                  All Statuses
                </option>

                <option value="Open">
                  Open
                </option>

                <option value="In Progress">
                  In Progress
                </option>

                <option value="Resolved">
                  Resolved
                </option>
              </select>

              {/* Custom Arrow */}
              <div
                className="
                  absolute
                  right-2.5
                  sm:right-3
                  md:right-3.5

                  top-1/2
                  -translate-y-1/2

                  pointer-events-none

                  text-gray-400

                  text-[9px]
                  sm:text-[10px]
                "
              >
                ▼
              </div>
            </div>

            {/* Priority */}
            <div
              className="
                relative
                min-w-0

                w-full
                sm:min-w-[150px]
                md:min-w-[170px]
                lg:min-w-[180px]
              "
            >
              <SlidersHorizontal
                className="
                  absolute
                  left-3
                  sm:left-3.5
                  md:left-4

                  top-1/2
                  -translate-y-1/2

                  w-3.5
                  h-3.5

                  sm:w-4
                  sm:h-4

                  text-gray-500

                  pointer-events-none
                  z-10
                "
              />

              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="
                  w-full

                  pl-9
                  pr-7

                  sm:pl-10
                  sm:pr-8

                  md:pl-11
                  md:pr-9

                  py-2.5
                  sm:py-3
                  md:py-3.5

                  bg-gray-50

                  border
                  border-gray-200

                  rounded-lg
                  sm:rounded-xl

                  appearance-none

                  text-[10px]
                  sm:text-xs
                  md:text-sm

                  font-semibold

                  text-gray-800

                  focus:bg-white
                  focus:ring-2
                  focus:ring-yellow-400
                  focus:border-yellow-400

                  outline-none

                  transition-all

                  cursor-pointer
                "
              >
                <option value="All">
                  All Priorities
                </option>

                <option value="Low">
                  Low Priority
                </option>

                <option value="Medium">
                  Medium Priority
                </option>

                <option value="High">
                  High Priority
                </option>
              </select>

              {/* Custom Arrow */}
              <div
                className="
                  absolute
                  right-2.5
                  sm:right-3
                  md:right-3.5

                  top-1/2
                  -translate-y-1/2

                  pointer-events-none

                  text-gray-400

                  text-[9px]
                  sm:text-[10px]
                "
              >
                ▼
              </div>
            </div>

          </div>

        </div>

        {/* ================= ACTIVE FILTERS ================= */}
        <div
          className="
            mt-3
            sm:mt-4

            flex
            flex-wrap
            items-center

            gap-1.5
            sm:gap-2

            min-w-0
          "
        >

          <span
            className="
              text-[8px]
              sm:text-[9px]
              md:text-[10px]

              font-bold
              uppercase

              tracking-[0.08em]
              sm:tracking-wider

              text-gray-400

              mr-0.5
              sm:mr-1
            "
          >
            Filters
          </span>

          {/* Status Badge */}
          {status !== 'All' && (
            <span
              className="
                inline-flex
                items-center

                max-w-full

                px-2
                sm:px-2.5
                md:px-3

                py-1
                sm:py-1.5

                rounded-full

                bg-black
                text-yellow-400

                text-[9px]
                sm:text-[10px]
                md:text-xs

                font-bold

                truncate
              "
            >
              <span className="truncate">
                Status: {status}
              </span>
            </span>
          )}

          {/* Priority Badge */}
          {priority !== 'All' && (
            <span
              className="
                inline-flex
                items-center

                max-w-full

                px-2
                sm:px-2.5
                md:px-3

                py-1
                sm:py-1.5

                rounded-full

                bg-yellow-400
                text-black

                text-[9px]
                sm:text-[10px]
                md:text-xs

                font-bold

                truncate
              "
            >
              <span className="truncate">
                Priority: {priority}
              </span>
            </span>
          )}

          {/* Search Badge */}
          {search.trim() !== '' && (
            <span
              className="
                inline-flex
                items-center

                max-w-[180px]
                sm:max-w-[240px]

                px-2
                sm:px-2.5
                md:px-3

                py-1
                sm:py-1.5

                rounded-full

                bg-gray-100
                border
                border-gray-200

                text-gray-700

                text-[9px]
                sm:text-[10px]
                md:text-xs

                font-bold

                truncate
              "
            >
              <span className="truncate">
                Search: {search}
              </span>
            </span>
          )}

          {/* No Filters */}
          {!hasActiveFilters && (
            <span
              className="
                text-[9px]
                sm:text-[10px]
                md:text-xs

                font-medium

                text-gray-400
              "
            >
              Showing all tickets
            </span>
          )}

          {/* Clear All */}
          {hasActiveFilters && (
            <button
              type="button"
              onClick={clearFilters}
              className="
                inline-flex
                items-center
                gap-1

                ml-auto

                px-2
                sm:px-2.5

                py-1
                sm:py-1.5

                rounded-lg

                text-[9px]
                sm:text-[10px]
                md:text-xs

                font-bold

                text-gray-500

                hover:text-black
                hover:bg-gray-100

                transition-colors

                whitespace-nowrap
              "
            >
              <X
                className="
                  w-3
                  h-3
                  sm:w-3.5
                  sm:h-3.5
                "
                strokeWidth={2.5}
              />

              Clear
            </button>
          )}

        </div>

      </div>
    </div>
  );
}