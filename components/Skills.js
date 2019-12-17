import React from "react";
import HeadLine from "./HeadLine";
import data from "../data";

const Skills = () => {
  return (
    <>
      <HeadLine
        className="border-solid border-b mb-2 border-gray-700"
        children="SKILLS"
      />
      {data.skills.map(skill => (
        <div className="flex mx-6 italic font-semibold text-gray-800 uppercase">
          <div className="mt-2 mr-3 rounded-full h-2 w-2 bg-black" />
          {skill}
        </div>
      ))}
    </>
  );
};

export default Skills;
