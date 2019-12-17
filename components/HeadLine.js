import React from "react";
import classnames from "classnames";

const HeadLine = ({ children, className }) => {
  return (
    <div
      className={classnames(
        "font-mono text-xl font-bold tracking-widest border-solid border-b-2 border-gray-400 mt-8 mx-6",
        className
      )}
    >
      {children}
    </div>
  );
};

export default HeadLine;
