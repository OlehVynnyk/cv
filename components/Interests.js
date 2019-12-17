import React from "react";
import ball from "../foto/ball.svg";
import camera from "../foto/camera.svg";
import dumbbell from "../foto/dumbbell.svg";
import book from "../foto/book.svg";
import plane from "../foto/plane.svg";
import pool from "../foto/pool.svg";
import HeadLine from "./HeadLine";
import SubTitle from "./SubTitle";

const styles = {
  width: "30px",
  height: "30px",
  borderLeft: "40px solid transparent",
  borderRight: "40px solid transparent",
  borderTop: "50px solid #e2e8f0",
  left: "50%",
  right: "50%",
  transform: "translate(-50%, -50%)",
  position: "absolute"
};

const Interests = () => {
  return (
    <div className="bg-gray-800 text-xs text-white relative">
      <div style={styles} />
      <HeadLine
        className="py-4 text-white border-none pt-10 flex justify-center"
        children="INTERESTS"
      />
      <div className="flex mx-6 justify-center">
        <div className="w-8 mr-8 flex flex-col items-center pt-1">
          <img src={book} />
          <SubTitle className="pt-1" children="READING" />
        </div>
        <div className="w-8 mr-8 flex flex-col items-center">
          <img src={dumbbell} />
          <SubTitle className="pt-2" children="GYM" />
        </div>
        <div className="w-8 flex flex-col items-center">
          <img src={plane} />
          <SubTitle className="pt-2" children="TRAVELLING" />
        </div>
      </div>
      <div className="flex mx-6 py-6 justify-center">
        <div className="w-8 mr-8 flex flex-col items-center">
          <img src={ball} />
          <SubTitle className="pt-2" children="FOOTBAL" />
        </div>
        <div className="w-8 mr-8 flex flex-col items-center">
          <img src={camera} />
          <SubTitle className="pt-2" children="MOVIE" />
        </div>
        <div className="w-8 flex flex-col items-center">
          <img src={pool} />
          <SubTitle className="pt-2" children="SWIMMING" />
        </div>
      </div>
    </div>
  );
};

export default Interests;
