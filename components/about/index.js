import React from "react";
import { SectionHeader } from "../../common/section-header/index";

const About = () => {
  const title = "About";
  const subtitle =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi unde impedit, necessitatibus, soluta sit quam minima expedita atque corrupti reiciendis.";
  return (
    <section className="section bg-light" id="about">
      <SectionHeader title={title} subtitle={subtitle} />
    </section>
  );
};

export default About;
