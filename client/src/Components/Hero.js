import { React } from "react";
import Trophy from "../Assets/—Pngtree—beautiful trophy_4541793.png";
import Elites from "../Assets/pngwing.com.png";
import Prizes from "../Assets/us-dollar-coin-color-icon.png";
import Smash from "../Assets/Smash.jpg";
import Fortnite from "../Assets/fortnitebus.jpg";
import Cod from "../Assets/cod.jpg";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const Hero = () => {
  const { isAuth } = useAuth();
  return (
    <div className="HERO_COMPONENT_CONTAINER relative">
      <section className="Main--Hero-Container font-thin lg:px-[16rem] px-10 text-center mt-10 ">
        <h1 className="Main--Header md:text-5xl text-4xl   ">
          JOIN{" "}
          <span className="Main--Header-Style_Span1 text-red-700">
            TOURNAMENTS
          </span>
          , PLAY WITH THE{" "}
          <span className="Main--Header-Style_Span2 text-red-700">ELITES</span>,
          WIN{" "}
          <span className="Main--Header-Style_Span3 text-red-700">PRIZES</span>.
        </h1>
        {!isAuth && (
          <h2 className="Main--Sub-Header text-xl mt-2">
            <Link
              to="/auth/register"
              className="!Token--Sign-Up_Btn underline underline-offset-4 text-red-600"
            >
              Sign up
            </Link>{" "}
            for free and join locals near you
          </h2>
        )}

        <section className="Main--Hero-items mt-[8rem] flex gap-5 justify-center items-center">
          <div className="Tournaments--box flex flex-col gap-3 w-[20rem] justify-center items-center">
            <img
              src={Trophy}
              alt="Trophy"
              className="Tournaments--Image w-[5rem] opacity-70"
            ></img>
            <h3 className="Tournaments--Main-Text font-bold md:text-md text-sm">
              TOURNAMENTS
            </h3>
            <h4 className="Tournaments--Sub-Text font-thin  md:text-lg sm:text-md xs:text-sm">
              The Bandits host tournaments with up to{" "}
              <span className="Tournaments--Style-Span text-red-700 font-bold">
                100
              </span>{" "}
              participants at a time!
            </h4>
          </div>
          <div className="Elites--box flex flex-col gap-3 w-[20rem] justify-center items-center">
            <img
              src={Elites}
              alt="Crown"
              className="Elites--Image w-[6rem] opacity-70"
            ></img>
            <h3 className="Elites--Main-Text font-bold md:text-md text-sm">
              PLAY THE ELITES
            </h3>
            <h4 className="Elites--Sub-Text font-thin  md:text-lg sm:text-md xs:text-sm">
              Find and play the{" "}
              <span className="Elites-Style-Span font-bold text-red-700">
                ELITES
              </span>{" "}
              in your area in a high level tournament setting.
            </h4>
          </div>
          <div className="Prizes--box flex flex-col gap-3 w-[20rem] justify-center items-center">
            <img
              src={Prizes}
              alt="Prize"
              className="Prizes--Image w-[4rem] opacity-70"
            ></img>
            <h3 className="Prizes--Main-Text font-bold md:text-md text-sm">
              WIN GREAT PRIZES
            </h3>
            <h4 className="Prizes--Sub-Text font-thin md:text-lg sm:text-md xs:text-lg">
              Win amazing prizes ranging from{" "}
              <span className="Prizes--Style-Span1 text-red-700 font-bold">
                $100
              </span>{" "}
              to ultra rare signed{" "}
              <span className="Prizes--Style-Span2 text-red-700 font-bold">
                Funko Pops
              </span>
            </h4>
          </div>
        </section>
        {!isAuth && (
          <Link
            to="/auth/register"
            className="!Token--Register-Btn mt-7 border-white border-[1px] p-3 hover:bg-red-900 transition-colors duration-500"
          >
            REGISTER TO PLAY
          </Link>
        )}
      </section>
      <section className="Sub--Hero--Container lg:px-[16rem] text-center mt-10 px-10">
        <h1 className="sub--Hero-Header text-xl font-thin">
          GAMES INLCUDING BUT NOT LIMITED TO:
        </h1>
        <div className="Sub--Hero-Games__Flex_Col mt-5 mb-5">
          <Link to="/smash">
            <div className="Smash--Box relative hover:cursor-pointer w-full h-[15rem] ">
              <img
                src={Smash}
                alt="Super Smash Bros Ultimate Logo With Mario"
                className="Smash--Image absolute h-[15rem]  hover:opacity-40 transition-opacity duration-500 w-full object-cover opacity-60"
              ></img>
              <h2 className="Smash--Main-Text absolute pl-5 top-1/2 font-thin text-3xl">
                SMASH ULTIMATE
              </h2>
            </div>
          </Link>
          <Link to="/fortnite">
            <div className="Fortnite--Box relative hover:cursor-pointer w-full mt-5 h-[15rem] ">
              <img
                src={Fortnite}
                alt="Fortnite Logo With Fortnite Bus"
                className="Fortnite--Image absolute h-[15rem]  hover:opacity-40 transition-opacity duration-500 w-full object-cover opacity-60"
              ></img>
              <h2 className="Fortnite--Main-Text absolute pl-5 top-1/2 font-thin text-3xl">
                FORTNITE
              </h2>
            </div>
          </Link>
          <Link to="/cod">
            {" "}
            <div className="Cod--Box relative hover:cursor-pointer w-full mt-5 h-[15rem] ">
              <img
                src={Cod}
                alt="Call Of Duty"
                className="Cod--Image absolute h-[15rem]  hover:opacity-40 transition-opacity duration-500 w-full object-cover opacity-60"
              ></img>
              <h2 className="Cod--Main-Text absolute pl-5 top-1/2 font-thin text-3xl">
                CALL OF DUTY
              </h2>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Hero;
