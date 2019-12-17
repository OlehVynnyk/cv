import React from "react";
import HeadLine from "./HeadLine";
import Text from "./Text";
import data from "../data";

const AboutMe = () => {
  return (
    <>
      <HeadLine children="ABOUT ME" />
      <div className="pt-4 mx-6">
        <Text>{data.aboutMe}</Text>
      </div>
    </>
  );
};

export default AboutMe;
