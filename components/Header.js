import React from "react";
import data from "../data";

const styles = {
  width: "0",
  height: "0",
  borderTop: "50px solid transparent",
  borderRight: "70px solid #2d3748",
  borderBottom: "50px solid transparent",
  position: "absolute",
  left: "-23px"
};

const Header = () => {
  return (
    <div className="bg-gray-800 py-10 text-white font-mono tracking-widest text-center relative">
      <div style={styles} />
      <div className="border-solid border-2 border-white inline-block">
        <div className="text-4xl px-4 py-1 border-b-2 w-full font-bold">
          {data.name}
        </div>
        <div className="text-lg py-1">{data.job}</div>
      </div>
    </div>
  );
};

export default Header;
