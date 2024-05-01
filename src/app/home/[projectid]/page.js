import { Button, Input } from "antd";
import React from "react";

const ProjectDetails = ({ params }) => {
  return (
    <div className="max-w-7xl mx-auto">
      <div>
        <h1 className="bg-blue-400 p-3 text-white text-2xl">
          Projects Details
        </h1>
        <div>
          <p className="p-3 text-blue-400 font-semibold">
            Project Title:<span className="text-black"> This is a title</span>
          </p>
          <p className="p-3 text-blue-400 font-semibold">
            Project Leader:<span className="text-black"> Kazi Sadman</span>
          </p>
          <p className="p-3 text-blue-400 font-semibold">
            Team Members:<span className="text-black"> Sadman, Tasnim</span>
          </p>
        </div>
      </div>
      <div>
        <h1 className="bg-blue-400 p-3 text-white text-2xl">
          Recent Activities
        </h1>
        <ul className="ml-9" style={{ listStyleType: "disc" }}>
          <li>task 1</li>
          <li>task 2</li>
          <li>task 3</li>
        </ul>
        <Input placeholder="Add Activity" />
        <div className="flex justify-end my-2">
          <Button type="primary">Add</Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
