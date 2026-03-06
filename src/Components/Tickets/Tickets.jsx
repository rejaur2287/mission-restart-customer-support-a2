import React, { use, useState } from "react";
import TicketCard from "../TicketCard/TicketCard";
import StatusBar from "../StatusBar/StatusBar";
import Banner from "../Banner/Banner";
import { toast } from "react-toastify";

const Tickets = ({ ticketPromise }) => {
  const initialTickets = use(ticketPromise);
  const [tickets, setTickets] = useState(initialTickets);
  const [tasks, setTasks] = useState([]);
  const [resolvedTasks, setResolvedTasks] = useState([]);
  const handleAddTask = (ticket) => {
    setTasks([...tasks, ticket]);
    toast("Ticket added to Task Status!");
    // console.log(tasks);
  };

  const handleComplete = (id) => {
    toast("Task Completed!");
    const completedTask = tasks.find((task) => task.id === id);
    const remaining = tasks.filter((task) => task.id !== id);
    // console.log(remaining);
    setTasks(remaining);
    setResolvedTasks([...resolvedTasks, completedTask]);
    const remainingTickets = tickets.filter((ticket) => ticket.id !== id);
    setTickets(remainingTickets);
  };
  return (
    <>
      <Banner tasks={tasks} resolvedTasks={resolvedTasks}></Banner>
      <div className="w-11/12 mx-auto my-5">
        <div className="grid grid-cols-1 md:grid-cols-[70%_30%] gap-6 ">
          <div>
            <h1 className="text-2xl font-bold my-5">Customer Tickets</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tickets.map((ticket) => (
                <TicketCard
                  handleAddTask={handleAddTask}
                  key={ticket.id}
                  ticket={ticket}
                ></TicketCard>
              ))}
            </div>
          </div>
          <StatusBar
            tasks={tasks}
            resolvedTasks={resolvedTasks}
            handleComplete={handleComplete}
          ></StatusBar>
        </div>
      </div>
    </>
  );
};

export default Tickets;
