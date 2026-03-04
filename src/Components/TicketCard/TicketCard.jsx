import React from "react";

const TicketCard = ({ ticket }) => {
  return (
    <div className="card bg-base-200 shadow-md border border-base-200 my-4">
      <div className="card-body p-6">
        {/* Top Row */}
        <div className="flex items-start justify-between gap-4">
          <h2 className="card-title text-2xl font-semibold">{ticket.title}</h2>

          {/* Status Badge */}
          <div
            className={`badge px-4 py-3 text-sm font-medium gap-2 ${
              ticket.status === "Open" ? "badge-success" : "badge-warning"
            }`}
          >
            <span className="w-2 h-2 bg-current rounded-full"></span>
            {ticket.status}
          </div>
        </div>

        {/* Description */}
        <p className="text-base-content/70 mt-2 text-base">
          {ticket.description}
        </p>

        {/* Bottom Row */}
        <div className="flex items-center justify-between mt-6 text-sm">
          {/* Left side */}
          <div className="flex items-center gap-6">
            <span className="text-base-content/60 font-medium">
              #{ticket.ticketNumber}
            </span>

            <span
              className={`font-semibold uppercase ${
                ticket.priority === "High"
                  ? "text-red-500"
                  : ticket.priority === "Medium"
                    ? "text-yellow-500"
                    : "text-green-500"
              }`}
            >
              {ticket.priority} Priority
            </span>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4 text-base-content/70">
            <span>{ticket.customerName}</span>

            <div className="flex items-center gap-1">
              {/* <CalendarDays size={18} /> */}
              <span>{ticket.date}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
