import React from "react";
import Text from "./Text";
import SubTitle from "./SubTitle";
import Info from "./Info";
import "./Listing.css";

const Listing = ({ data }) => {
  return data.map(({ institution, date, title, description }, index) => {
    return (
      <div
        key={index}
        className="mx-6 md:my-0 my-6 md:mx-4 border-solid border-2 shadow-inner md:border-none md:shadow-none md:flex experience"
      >
        <div className="px-2 py-2 md:py-0 md:flex-shrink-0 md:pr-10 md:w-40 md:pb-10">
          <SubTitle className="leading-none">{institution}</SubTitle>
          <Info>{date}</Info>
        </div>
        <div
          style={{ marginLeft: "157px" }}
          className="md:rounded-full md:h-2 md:w-2 md:bg-black absolute"
        />
        <div className="left">
          <SubTitle className="leading-none">{title}</SubTitle>
          <Text>{description}</Text>
        </div>
      </div>
    );
  });
};

export default Listing;
