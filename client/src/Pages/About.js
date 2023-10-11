import React from "react";
import tournament from "../Assets/tournament.jpg";

const About = () => {
  return (
    <div className="ABOUT__PAGE_CONTAINER max-w-full justify-center items-center flex flex-col gap-2">
      <section className="About--Info-Box relative h-[5rem] md:w-[30rem] w-[20rem]  mx-10 md:mx-[10rem] mt-10 ">
        <h1 className="About--Header text-5xl md:mb-10 mb-5 font-thin">
          What Are We <span className="text-red-900">About?</span>
        </h1>
        <p className="About--Text md:text-base text-sm indent-5">
          Bandits Den is not just a team of inspired workers, but we are also a
          family! Our goal is to unite the generation of our youth in a social
          and fun environment. Through social events such as e-sports
          tournaments and gatherings we strive to instill an impactful life into
          those who need it most. We look to bring out the maximum potential in
          our guests and help them thrive to potential success.
        </p>
      </section>
      <div className="About--Picture-Box relative md:w-[40rem] w-[20rem] md:top-[10rem] top-[12rem] md:h-[30rem] h-[20rem]">
        <img
          src={tournament}
          alt="Tournament"
          className="Tournament--Image w-full h-full object-cover"
        ></img>
      </div>
      <section className="Team--Info-Box text-center w-full md:h-[30rem] h-[34rem] bg-red-400 p-10">
        <h1 className="Team--Header text-4xl md:mt-[8rem] mt-[9rem] font-thin">
          Meet The Team
        </h1>
        <div className="Member--Flex-Box flex gap-5 justify-center ">
          <div className="Member--1-Sub__Flex_Box">
            <h2 className="Member--1-Title underline md:text-base text-sm">
              Founder and Event Organizer
            </h2>
            <h3 className="Member--1-Name md:text-base text-sm">
              Joshua Newkirk
            </h3>
          </div>
          <div className="Member--2-Sub__Flex_Box">
            <h2 className="Member--2-Title underline md:text-base text-sm">
              Founder and DevOps Infrastructure Manager
            </h2>
            <h3 className="Member--2-Name md:text-base text-sm">
              Arya Sharifai
            </h3>
          </div>
          <div className="Member--Honourable-Sub__Flex_Box">
            <h2 className="Member--Honourable-Title underline md:text-base text-sm">
              Honourable Mentions
            </h2>
            <h3 className="Member--Honourable-1 md:text-base text-sm">
              JJ Brown
            </h3>
            <h3 className="Member--Honourable-2 md:text-base text-sm">
              Zackary Lemus
            </h3>
            <h3 className="Member--Honourable-3 md:text-base text-sm">
              Jake Etheridge
            </h3>
            <h3 className="Member--Honourable-4 md:text-base text-sm">
              Maurice Mosley
            </h3>
            <h3 className="Member--Honourable-5 md:text-base text-sm">
              Chase Whitenton
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
