import React, { use } from "react";
import TicketCard from "../TicketCard/TicketCard";
import StatusBar from "../StatusBar/StatusBar";

const Tickets = ({ ticketPromise }) => {
  const tickets = use(ticketPromise);
  //   console.log(tickets);
  return (
    <div className="w-11/12 mx-auto my-5">
      <div className="grid grid-cols-1 md:grid-cols-[70%_30%] gap-6 ">
        <div>
          <h1 className="text-2xl font-bold my-5">Customer Tickets</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tickets.map((ticket) => (
              <TicketCard key={ticket.id} ticket={ticket}></TicketCard>
            ))}
          </div>
        </div>
        <StatusBar></StatusBar>
      </div>
    </div>
  );
};

export default Tickets;
