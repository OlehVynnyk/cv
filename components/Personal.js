import React from "react";
import HeadLine from "./HeadLine";
import data from "../data";
import SubTitle from "./SubTitle";

const Personal = () => {
  return (
    <div className="text-sm">
      <HeadLine
        className="border-solid border-b border-gray-700"
        children="PERSONAL"
      />
      <div className="mx-6">
        {Object.entries(data.personal).map(([key, value], index) => {
          return (
            <div
              key={index}
              className="flex mt-1 border-solid border-b border-gray-500 py-1"
            >
              <SubTitle className="w-24">{key}</SubTitle>
              {value}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Personal;
