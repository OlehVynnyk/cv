import React from "react";
import Listing from "./Listing";
import data from "../data";
import HeadLine from "./HeadLine";

const WorkExperience = () => {
  return (
    <div>
      <HeadLine className="mb-6" children="WORK EXPERIENCE"></HeadLine>
      <Listing data={data.workExperience} />
    </div>
  );
};

export default WorkExperience;
