import React, { useEffect } from 'react';
import {
  X,
  User,
  CalendarDays,
  Flag,
  CircleDot,
  MessageSquare,
} from 'lucide-react';

export default function TicketDetails({ ticket, onClose }) {
  useEffect(() => {
    if (!ticket) return;

    const originalOverflow = document.body.style.overflow;

    // Prevent background page from scrolling
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [ticket]);

  if (!ticket) return null;

  const priorityStyles = {
    High: 'bg-red-50 text-red-700 border-red-200',
    Medium: 'bg-yellow-50 text-yellow-800 border-yellow-200',
    Low: 'bg-green-50 text-green-700 border-green-200',
  };

  const statusStyles = {
    Open: 'bg-blue-50 text-blue-700 border-blue-200',
    'In Progress': 'bg-yellow-50 text-yellow-800 border-yellow-200',
    Resolved: 'bg-green-50 text-green-700 border-green-200',
  };

  return (
    <div
      className="
        fixed
        inset-0
        z-[9999]
        w-full
        h-[100dvh]
        flex
        items-center
        justify-center
        bg-black/60
        backdrop-blur-sm
        p-2
        sm:p-4
        overscroll-none
      "
      onClick={onClose}
    >
      <div
        className="
          relative
          w-full
          max-w-[360px]
          sm:max-w-[440px]
          md:max-w-[500px]
          lg:max-w-[560px]

          h-auto
          max-h-[94dvh]
          sm:max-h-[90vh]

          bg-white
          rounded-2xl
          sm:rounded-3xl

          shadow-2xl
          border
          border-gray-200

          overflow-hidden

          flex
          flex-col

          overscroll-none
        "
        onClick={(e) => e.stopPropagation()}
      >

        {/* Yellow Top Line */}
        <div
          className="
            absolute
            top-0
            left-0
            right-0
            h-1
            bg-yellow-400
            z-20
          "
        />

        {/* ================= HEADER ================= */}
{/* ================= HEADER ================= */}
<div
  className="
    shrink-0
    relative
    z-10
    bg-black
    text-white
    px-3
    py-2.5
    sm:px-4
    sm:py-3.5
    md:px-5
    md:py-4
    lg:px-6
    lg:py-5
    border-b
    border-gray-800
    shadow-md
  "
>
  <div className="flex items-center justify-between gap-2 sm:gap-3">

    {/* Header Content */}
    <div className="min-w-0 flex-1">

      {/* Ticket Label */}
      <div
        className="
          flex
          items-center
          gap-1.5
          sm:gap-2
          mb-1
          sm:mb-1.5
        "
      >
        <div
          className="
            w-6
            h-6
            sm:w-7
            sm:h-7
            md:w-8
            md:h-8
            rounded-md
            sm:rounded-lg
            bg-yellow-400
            flex
            items-center
            justify-center
            shrink-0
          "
        >
          <MessageSquare
            className="
              w-3
              h-3
              sm:w-3.5
              sm:h-3.5
              md:w-4
              md:h-4
              text-black
            "
            strokeWidth={2.5}
          />
        </div>

        <span
          className="
            text-[8px]
            sm:text-[9px]
            md:text-[10px]
            font-bold
            uppercase
            tracking-[0.12em]
            sm:tracking-widest
            text-yellow-400
          "
        >
          Ticket Details
        </span>
      </div>

      {/* Subject */}
      <h2
        className="
          text-sm
          sm:text-base
          md:text-lg
          lg:text-xl
          font-black
          leading-tight
          text-white
          line-clamp-1
          sm:line-clamp-2
          break-words
        "
      >
        {ticket.subject}
      </h2>

      {/* Ticket ID */}
      <p
        className="
          text-[8px]
          sm:text-[9px]
          md:text-[10px]
          font-medium
          text-gray-400
          mt-0.5
          sm:mt-1
        "
      >
        {ticket.id}
      </p>

    </div>

    {/* Close Button */}
    <button
      onClick={onClose}
      aria-label="Close ticket details"
      className="
        shrink-0

        w-7
        h-7

        sm:w-8
        sm:h-8

        md:w-9
        md:h-9

        rounded-md
        sm:rounded-lg
        md:rounded-xl

        bg-white/10
        hover:bg-white/20
        active:bg-white/30

        flex
        items-center
        justify-center

        text-gray-300
        hover:text-white

        transition-all
        duration-200

        active:scale-95
      "
    >
      <X
        className="
          w-3.5
          h-3.5

          sm:w-4
          sm:h-4

          md:w-5
          md:h-5
        "
        strokeWidth={2.5}
      />
    </button>

  </div>
</div>

        {/* ================= SCROLLABLE CONTENT ================= */}
        <div
          className="
            flex-1
            min-h-0

            overflow-y-auto
            overflow-x-hidden

            overscroll-contain

            bg-[#fafafa]

            px-3
            py-3

            sm:px-4
            sm:py-4

            touch-pan-y

            [scrollbar-width:thin]
          "
        >

          {/* Ticket Information */}
          <div
            className="
              grid
              grid-cols-2

              gap-2
              sm:gap-3

              mb-3
              sm:mb-4
            "
          >

            {/* Customer */}
            <div
              className="
                min-w-0

                bg-white

                border
                border-gray-200

                rounded-xl

                p-3
                sm:p-3.5

                shadow-sm
              "
            >
              <div className="flex items-center gap-2">

                <div
                  className="
                    w-7
                    h-7
                    sm:w-8
                    sm:h-8

                    rounded-lg

                    bg-gray-100

                    flex
                    items-center
                    justify-center

                    shrink-0
                  "
                >
                  <User
                    className="
                      w-3.5
                      h-3.5

                      sm:w-4
                      sm:h-4

                      text-gray-700
                    "
                    strokeWidth={2.3}
                  />
                </div>

                <div className="min-w-0 flex-1">

                  <p
                    className="
                      text-[8px]
                      sm:text-[9px]

                      font-bold
                      uppercase
                      tracking-wider

                      text-gray-400
                    "
                  >
                    Customer
                  </p>

                  <p
                    className="
                      text-[10px]
                      sm:text-xs

                      font-bold
                      text-gray-900

                      truncate

                      mt-0.5
                    "
                  >
                    {ticket.customerName}
                  </p>

                </div>

              </div>
            </div>

            {/* Date */}
            <div
              className="
                min-w-0

                bg-white

                border
                border-gray-200

                rounded-xl

                p-3
                sm:p-3.5

                shadow-sm
              "
            >
              <div className="flex items-center gap-2">

                <div
                  className="
                    w-7
                    h-7
                    sm:w-8
                    sm:h-8

                    rounded-lg

                    bg-gray-100

                    flex
                    items-center
                    justify-center

                    shrink-0
                  "
                >
                  <CalendarDays
                    className="
                      w-3.5
                      h-3.5

                      sm:w-4
                      sm:h-4

                      text-gray-700
                    "
                    strokeWidth={2.3}
                  />
                </div>

                <div className="min-w-0 flex-1">

                  <p
                    className="
                      text-[8px]
                      sm:text-[9px]

                      font-bold
                      uppercase
                      tracking-wider

                      text-gray-400
                    "
                  >
                    Date
                  </p>

                  <p
                    className="
                      text-[10px]
                      sm:text-xs

                      font-bold
                      text-gray-900

                      truncate

                      mt-0.5
                    "
                  >
                    {ticket.date}
                  </p>

                </div>

              </div>
            </div>

            {/* Priority */}
            <div
              className="
                min-w-0

                bg-white

                border
                border-gray-200

                rounded-xl

                p-3
                sm:p-3.5

                shadow-sm
              "
            >
              <div className="flex items-center gap-2">

                <div
                  className="
                    w-7
                    h-7
                    sm:w-8
                    sm:h-8

                    rounded-lg

                    bg-yellow-50

                    flex
                    items-center
                    justify-center

                    shrink-0
                  "
                >
                  <Flag
                    className="
                      w-3.5
                      h-3.5

                      sm:w-4
                      sm:h-4

                      text-yellow-700
                    "
                    strokeWidth={2.3}
                  />
                </div>

                <div className="min-w-0 flex-1">

                  <p
                    className="
                      text-[8px]
                      sm:text-[9px]

                      font-bold
                      uppercase
                      tracking-wider

                      text-gray-400

                      mb-1
                    "
                  >
                    Priority
                  </p>

                  <span
                    className={`
                      inline-flex

                      px-2
                      py-0.5

                      rounded-full

                      border

                      text-[8px]
                      sm:text-[9px]

                      font-bold

                      whitespace-nowrap

                      ${priorityStyles[ticket.priority]}
                    `}
                  >
                    {ticket.priority}
                  </span>

                </div>

              </div>
            </div>

            {/* Status */}
            <div
              className="
                min-w-0

                bg-white

                border
                border-gray-200

                rounded-xl

                p-3
                sm:p-3.5

                shadow-sm
              "
            >
              <div className="flex items-center gap-2">

                <div
                  className="
                    w-7
                    h-7
                    sm:w-8
                    sm:h-8

                    rounded-lg

                    bg-gray-100

                    flex
                    items-center
                    justify-center

                    shrink-0
                  "
                >
                  <CircleDot
                    className="
                      w-3.5
                      h-3.5

                      sm:w-4
                      sm:h-4

                      text-gray-700
                    "
                    strokeWidth={2.3}
                  />
                </div>

                <div className="min-w-0 flex-1">

                  <p
                    className="
                      text-[8px]
                      sm:text-[9px]

                      font-bold
                      uppercase
                      tracking-wider

                      text-gray-400

                      mb-1
                    "
                  >
                    Status
                  </p>

                  <span
                    className={`
                      inline-flex

                      px-2
                      py-0.5

                      rounded-full

                      border

                      text-[8px]
                      sm:text-[9px]

                      font-bold

                      whitespace-nowrap

                      ${statusStyles[ticket.status]}
                    `}
                  >
                    {ticket.status}
                  </span>

                </div>

              </div>
            </div>

          </div>

          {/* Conversation */}
          <div
            className="
              bg-white

              border
              border-gray-200

              rounded-xl
              sm:rounded-2xl

              shadow-sm

              overflow-hidden
            "
          >

            {/* Conversation Header */}
            <div
              className="
                flex
                items-center

                gap-2

                px-3
                py-2.5

                sm:px-4
                sm:py-3

                border-b
                border-gray-100

                bg-white
              "
            >

              <div
                className="
                  w-7
                  h-7

                  sm:w-8
                  sm:h-8

                  rounded-lg

                  bg-black

                  flex
                  items-center
                  justify-center

                  shrink-0
                "
              >
                <MessageSquare
                  className="
                    w-3.5
                    h-3.5

                    sm:w-4
                    sm:h-4

                    text-yellow-400
                  "
                  strokeWidth={2.3}
                />
              </div>

              <div className="min-w-0">

                <h3
                  className="
                    text-xs
                    sm:text-sm

                    font-black
                    text-gray-900
                  "
                >
                  Conversation
                </h3>

                <p
                  className="
                    text-[8px]
                    sm:text-[9px]

                    text-gray-400
                    font-medium
                  "
                >
                  {ticket.messages.length}{' '}
                  {ticket.messages.length === 1
                    ? 'message'
                    : 'messages'}
                </p>

              </div>

            </div>

            {/* Messages */}
            <div
              className="
                p-3
                sm:p-4

                space-y-2
                sm:space-y-3
              "
            >
              {ticket.messages.map((msg, i) => (
                <div
                  key={i}
                  className="
                    bg-gray-50

                    border
                    border-gray-100

                    rounded-lg
                    sm:rounded-xl

                    p-3
                    sm:p-3.5
                  "
                >

                  <div
                    className="
                      flex
                      items-center

                      gap-1.5

                      mb-1.5
                    "
                  >

                    <span
                      className="
                        w-5
                        h-5

                        rounded-full

                        bg-yellow-400
                        text-black

                        flex
                        items-center
                        justify-center

                        text-[8px]
                        font-black

                        shrink-0
                      "
                    >
                      {i + 1}
                    </span>

                    <span
                      className="
                        text-[9px]
                        sm:text-[10px]

                        font-bold
                        text-gray-400

                        uppercase
                        tracking-wider
                      "
                    >
                      Message {i + 1}
                    </span>

                  </div>

                  <p
                    className="
                      text-[10px]
                      sm:text-xs
                      md:text-sm

                      text-gray-700

                      leading-relaxed

                      font-medium

                      break-words
                    "
                  >
                    {msg}
                  </p>

                </div>
              ))}
            </div>

          </div>

        </div>

        {/* ================= FOOTER ================= */}
        <div
          className="
            shrink-0

            bg-white

            border-t
            border-gray-200

            p-3
            sm:p-4

            z-10
          "
        >
          <button
            onClick={onClose}
            className="
              w-full

              bg-black
              hover:bg-gray-900
              active:bg-black

              text-yellow-400

              py-2.5
              sm:py-3

              rounded-lg
              sm:rounded-xl

              text-xs
              sm:text-sm

              font-bold

              transition-all

              shadow-md
              hover:shadow-lg

              active:scale-[0.99]
            "
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}