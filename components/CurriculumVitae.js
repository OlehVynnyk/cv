import React from "react";
import Header from "./Header";
import AboutMe from "./AboutMe";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import Logo from "./Logo";
import Personal from "./Personal";
import Contact from "./Contact";
import Skills from "./Skills";
import Interests from "./Interests";

const CurriculumVitae = () => {
  return (
    <div className="lg:flex lg:flex-row-reverse">
      <div className="w-full">
        <Header />
        <AboutMe />
        <WorkExperience />
        <Education />
      </div>
      <div className="bg-gray-300 lg:w-1/4">
        <Logo />
        <Personal />
        <Contact />
        <Skills />
        <Interests />
      </div>
    </div>
  );
};

export default CurriculumVitae;
