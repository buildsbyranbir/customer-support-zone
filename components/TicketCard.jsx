import React from 'react';

const PriorityBadge = ({ priority }) => {
  const baseClasses = "text-xs font-bold px-3 py-1 rounded-full";

  switch (priority) {
    case "HIGH PRIORITY":
      return <span className={`${baseClasses} bg-red-100 text-red-700`}>{priority}</span>;
    case "MEDIUM PRIORITY":
      return <span className={`${baseClasses} bg-yellow-100 text-yellow-700`}>{priority}</span>;
    case "LOW PRIORITY":
      return <span className={`${baseClasses} bg-green-100 text-green-700`}>{priority}</span>;
    default:
      return <span className={`${baseClasses} bg-gray-100 text-gray-700`}>{priority}</span>;
  }
};

const StatusBadge = ({ status }) => {
  const baseClasses = "text-xs font-bold px-3 py-1 rounded-full";

  switch (status) {
    case "Open":
      return <span className={`${baseClasses} bg-green-200 text-green-800`}>{status}</span>;
    case "In-Progress":
      return <span className={`${baseClasses} bg-yellow-200 text-yellow-800`}>{status}</span>;
    default:
      return <span className={`${baseClasses} bg-gray-200 text-gray-800`}>{status}</span>;
  }
};

const TicketCard = ({ ticket, onSelect }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer overflow-hidden"
      onClick={() => onSelect(ticket)}
    >
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-gray-800 pr-4">
            {ticket.title}
          </h3>
          <StatusBadge status={ticket.status} />
        </div>

        <p className="text-gray-600 text-sm mb-4">
          {ticket.description}
        </p>

        <PriorityBadge priority={ticket.priority} />
      </div>

      <div className="bg-gray-50 px-5 py-3 border-t border-gray-200">
        <div className="flex justify-between items-center text-sm text-gray-500">
          <div className="flex items-center">
            {/* Avatar Removed — Only Name */}
            <span>{ticket.customer.name}</span>
          </div>

          <span>{ticket.createdAt}</span>
        </div>

        <span className="text-xs text-gray-400 font-mono block mt-1">
          #{ticket.id}
        </span>
      </div>
    </div>
  );
};

export default TicketCard;
