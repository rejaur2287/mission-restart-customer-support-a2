import React from "react";

const StatusBar = () => {
  return (
    <div className="flex flex-col items-stretch gap-4">
      <div>
        <h1 className="text-2xl font-bold my-5">Tickets Status</h1>
        <p>Select a ticket to add to Task Status</p>
      </div>
      <div>
        <h1 className="text-2xl font-bold my-5">Resolved Task</h1>
        <p>No resolved tasks yet.</p>
      </div>
    </div>
  );
};

export default StatusBar;
