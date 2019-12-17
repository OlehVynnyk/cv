import React from "react";
import classnames from "classnames";

const SubTitle = ({ children, className }) => {
  return <div className={classnames("font-medium", className)}>{children}</div>;
};

export default SubTitle;
