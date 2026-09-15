import React from 'react';

export default function StatCard({
  title,
  value,
  icon: Icon,
  colorClass,
}) {
  return (
    <div
      className=" relative w-full min-w-0 h-full overflow-hidden bg-white rounded-xl sm:rounded-2xl md:rounded-2xl lg:rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg sm:hover:shadow-xl hover:-translate-y-0.5 sm:hover:-translate-y-1 transition-all duration-300 group "
    >

      {/* Decorative Circle */}
      <div
        className=" absolute -right-6 -top-6 w-20 h-20 sm:-right-8 sm:-top-8 sm:w-24 sm:h-24 md:-right-9 md:-top-9 md:w-28 md:h-28 lg:-right-10 lg:-top-10 lg:w-32 lg:h-32 rounded-full bg-yellow-400/10 group-hover:bg-yellow-400/20 transition-colors duration-300 pointer-events-none"
      />

      {/* Card Content */}
      <div
        className=" relative p-3 sm:p-4 md:p-5 lg:p-6 xl:p-7
        "
      >
        <div
          className=" flex items-start justify-between gap-2 sm:gap-3 md:gap-4
          "
        >

          {/* Text Section */}
          <div className="min-w-0 flex-1">

            {/* Title */}
            <p
              className=" text-[9px] sm:text-[10px] md:text-xs lg:text-xs font-bold uppercase tracking-[0.08em] sm:tracking-[0.12em] md:tracking-widest text-gray-400 mb-1.5 sm:mb-2 md:mb-3 leading-tight truncate"
              title={title}
            >
              {title}
            </p>

            {/* Value */}
            <p
              className=" text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-black tracking-tight text-gray-950 leading-none truncate "
            >
              {value}
            </p>

            {/* Ticket Overview */}
            <div
              className=" flex items-center gap-1 sm:gap-1.5 mt-2 sm:mt-2.5 md:mt-3
              "
            >
              <span
                className=" shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-yellow-400
                "
              />

              <span
                className=" text-[9px] sm:text-[10px] md:text-xs font-semibold text-gray-500 truncate
                "
              >
                Ticket overview
              </span>
            </div>

          </div>

          {/* Icon */}
          <div
            className=" shrink-0 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center shadow-md sm:shadow-lg group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300
            "
            style={{ backgroundColor: undefined }}
          >
            <div
              className={` w-full h-full rounded-lg sm:rounded-xl md:rounded-2xl ${colorClass} flex items-center justify-center
              `}
            >
              <Icon
                className=" w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 text-black
                "
                strokeWidth={2.5}
              />
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Hover Line */}
      <div
        className=" h-0.5 sm:h-1 w-0 bg-yellow-400 group-hover:w-full transition-all duration-500
        "
      />

    </div>
  );
}