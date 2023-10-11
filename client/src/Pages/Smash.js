import React from "react";

const Smash = () => {
  return (
    <div className="SMASH__PAGE_CONTAINER max-w-full justify-center mx-10 items-center flex flex-col gap-2">
      <div className="Normal--Smash-Box mb-10 mt-5 md:mx-[15rem]  flex flex-col items-center justify-center gap-5">
        <h1 className="Smash--Header text-center  font-thin text-4xl">SMASH</h1>
        <p className="text-lg font-thin indent-1 text-center ">
          {" "}
          In the den you can join our normal smash tournaments with all the main
          characters, we have a limit of 50 players so make sure to join as fast
          as you can and most importantly make sure to have fun!
        </p>
        <h2 className="text-center underline underline-offset-2">
          OUR NORMAL SMASH RULESET :{" "}
        </h2>
        <ul className=" list-disc text-left">
          <li>3 Stocks</li>
          <li>Best of 3</li>
          <li>Time Limit: 6-8 minutes</li>
          <li>Items: Off</li>
          <li>Stage Hazard Toggle: Off</li>
          <li>Final Smash Meter: Off</li>
          <li>Spirits: Off</li>
          <li>Damage Handicap: Off</li>
          <li>Launch Rate: 1.0x</li>
          <li>Underdog Boost: Off</li>
          <li>Score Display: Off</li>
          <li>% Show Damage: Yes</li>
          <li>Custom Balance: Off</li>
          <li>Echo Fighters: Separate</li>
          <li>Radar: Big</li>
          <li>Mii Fighters are allowed</li>
          <li>If time runs out, most stocks wins</li>
        </ul>
      </div>
      <div className="Modded--Smash-Box mb-10 mt-5  md:mx-[15rem]  flex items-center justify-center flex-col gap-5">
        <h1 className="Modded--Smash-Header text-center  font-thin text-4xl">
          MODDED SMASH{" "}
          <span className=" text-orange-300 text-xl underline underline-offset-2">
            NEW!
          </span>
        </h1>
        <p className="text-lg font-thin indent-1 text-center ">
          {" "}
          Modded Smash is a great way to play as your favorite anime/movie/tv
          show characters! Characters that are included but not limited to are :
          <span className=" text-orange-300 text-xl underline underline-offset-2">
            Naruto Uzumaki
          </span>
          ,{" "}
          <span className=" text-orange-300 text-xl underline underline-offset-2">
            Sasuke Uchiha
          </span>
          ,{" "}
          <span className=" text-orange-300 text-xl underline underline-offset-2">
            Itachi Uchiha
          </span>
          ,{" "}
          <span className=" text-orange-300 text-xl underline underline-offset-2">
            Dio Brando
          </span>
          ,{" "}
          <span className=" text-orange-300 text-xl underline underline-offset-2">
            Jotaro Kujo
          </span>
          ,{" "}
          <span className=" text-orange-300 text-xl underline underline-offset-2">
            Spongebob
          </span>
          ,{" "}
          <span className=" text-orange-300 text-xl underline underline-offset-2">
            Spiderman
          </span>
          ,{" "}
          <span className=" text-orange-300 text-xl underline underline-offset-2">
            Venom
          </span>
          ,{" "}
          <span className=" text-orange-300 text-xl underline underline-offset-2">
            Thor
          </span>
          ,{" "}
          <span className=" text-orange-300 text-xl underline underline-offset-2">
            Iron-Man
          </span>
          , and many more!
        </p>
        <h2 className="text-center underline underline-offset-2">
          OUR MODDED SMASH RULESET :{" "}
        </h2>
        <ul className=" list-disc text-left">
          <li>3 Stocks</li>
          <li>Best of 3</li>
          <li>Time Limit: 6-8 minutes</li>
          <li>Items: Off</li>
          <li>Stage Hazard Toggle: Off</li>
          <li>Final Smash Meter: Off</li>
          <li>Spirits: Off</li>
          <li>Damage Handicap: Off</li>
          <li>Launch Rate: 1.0x</li>
          <li>Underdog Boost: Off</li>
          <li>Score Display: Off</li>
          <li>% Show Damage: Yes</li>
          <li>Custom Balance: Off</li>
          <li>Echo Fighters: Separate</li>
          <li>Radar: Big</li>
          <li>Mii Fighters are allowed</li>
          <li>If time runs out, most stocks wins</li>
        </ul>
      </div>
    </div>
  );
};

export default Smash;
