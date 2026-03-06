import React from "react";

const StatusBar = ({ tasks, handleComplete, resolvedTasks }) => {
  return (
    <div className="flex flex-col items-stretch gap-4">
      <div>
        <h1 className="text-2xl font-bold my-5">Tickets Status</h1>
        <div className="space-y-3">
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <div
                key={task.id}
                className="flex justify-between items-center bg-white p-3 rounded-lg shadow"
              >
                <p className="text-black">{task.title}</p>

                <button
                  onClick={() => handleComplete(task.id)}
                  className="btn btn-success btn-sm"
                >
                  Complete
                </button>
              </div>
            ))
          ) : (
            <p>Select a ticket to add to Task Status</p>
          )}
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-bold my-5">Resolved Task</h1>
        <div className="space-y-3">
          {resolvedTasks.length > 0 ? (
            resolvedTasks.map((resolvedTask) => (
              <div
                key={resolvedTask.id}
                className="flex justify-between items-center bg-white p-3 rounded-lg shadow"
              >
                <p className="text-black">{resolvedTask.title}</p>
              </div>
            ))
          ) : (
            <p>No resolved tasks yet.</p>
          )}
        </div>
        {/* <p>{resolvedTasks}</p>
        <p> */}
      </div>
    </div>
  );
};

export default StatusBar;
