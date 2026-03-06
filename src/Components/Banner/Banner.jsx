import React from "react";

const Banner = ({ tasks, resolvedTasks }) => {
  // console.log(resolvedTasks);
  return (
    <div className="w-11/12 mx-auto my-10">
      {/* <h1 className="text-center text-3xl font-bold my-10">Banner Section</h1> */}
      <div className="grid sm:grid-cols-1 w-full gap-6 py-4 md:grid-cols-2 justify-items-center">
        <div className="hero min-h-60 bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)]">
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <p>In-progress</p>
              <h1 className="mb-5 text-5xl font-bold">{tasks.length}</h1>
            </div>
          </div>
        </div>
        <div className="hero min-h-60 bg-[linear-gradient(90deg,#54CF68_9.6%,#00827A_92.23%)]">
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <p>Resolved</p>
              <h1 className="mb-5 text-5xl font-bold">
                {resolvedTasks.length}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
