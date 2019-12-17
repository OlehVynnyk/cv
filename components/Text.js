import React from "react";
import classnames from "classnames";

const Text = ({ children, className }) => {
  return (
    <div className={classnames("italic text-gray-700", className)}>
      {children}
    </div>
  );
};

export default Text;
