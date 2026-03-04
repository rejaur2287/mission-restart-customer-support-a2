import React, { use } from "react";
import TicketCard from "../TicketCard/TicketCard";

const Tickets = ({ ticketPromise }) => {
  const tickets = use(ticketPromise);
  //   console.log(tickets);
  return (
    <div className="w-11/12 mx-auto my-10">
      <h1>Customer Tickets</h1>
      {tickets.map((ticket) => (
        <TicketCard key={ticket.id} ticket={ticket}></TicketCard>
      ))}
    </div>
  );
};

export default Tickets;
