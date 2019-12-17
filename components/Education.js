import React from "react";
import HeadLine from "./HeadLine";
import Listing from "./Listing";
import data from "../data";

const Education = () => {
  return (
    <>
      <HeadLine className="mb-6" children="EDUCATION" />
      <Listing data={data.education} />
    </>
  );
};

export default Education;
