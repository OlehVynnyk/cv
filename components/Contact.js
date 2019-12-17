import React from "react";
import HeadLine from "./HeadLine";
import data from "../data";
import SubTitle from "./SubTitle";

const Contact = () => {
  return (
    <div className="text-sm">
      <HeadLine
        className="border-solid border-b border-gray-700"
        children="PERSONAL"
      />
      <div className="mx-6">
        {Object.entries(data.contact).map(([key, value], index) => {
          return (
            <div
              key={index}
              className="flex border-solid border-b border-gray-500 py-1"
            >
              <SubTitle className="w-16">{key}</SubTitle>
              {value}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Contact;
