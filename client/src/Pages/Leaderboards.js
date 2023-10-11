import React, { useState } from "react";
import Leaderboard from "../Components/Leaderboard";
import smashLogo from "../Assets/smashLogo.png";
import fortniteLogo from "../Assets/fortniteLogo.png";
import { useAuth } from "../Context/AuthContext";
const Leaderboards = () => {
  const [isSmashLeaderboard, setIsSmashLeaderboard] = useState(true);
  const [isCodLeaderboard, setIsCodLeaderboard] = useState(false);
  const [isFnLeaderboard, setIsFnLeaderboard] = useState(false);
  const { isAuth } = useAuth();

  return (
    <div>
      <section className=" h-[50rem]">
        <h1 className="max-w-full bg-black text-center p-3 text-3xl font-thin text-white">
          LEADERBOARDS
        </h1>
        <div className="bg-white p-2 flex gap-2 justify-center items-center">
          <button
            onClick={() => {
              setIsFnLeaderboard(false);
              setIsCodLeaderboard(false);
              setIsSmashLeaderboard(true);
            }}
            className={`p-2 ${
              isSmashLeaderboard
                ? "border-b-2 border-b-black"
                : "hover:border-b-red-900 hover:border-b "
            } transition-all duration-500`}
          >
            <img src={smashLogo} alt="smash" width={45}></img>
          </button>
          <button
            onClick={() => {
              setIsFnLeaderboard(true);
              setIsCodLeaderboard(false);
              setIsSmashLeaderboard(false);
            }}
            className={`p-2 ${
              isFnLeaderboard
                ? "border-b-2 border-b-black"
                : "hover:border-b-red-900 hover:border-b  "
            } transition-all duration-300`}
          >
            <img src={fortniteLogo} alt="fortnite" width={110}></img>
          </button>
          <button
            onClick={() => {
              setIsFnLeaderboard(false);
              setIsCodLeaderboard(true);
              setIsSmashLeaderboard(false);
            }}
            className={`flex gap-1 p-2 text-black justify-center items-center h-[3.9rem] ${
              isCodLeaderboard
                ? "border-b-2 border-b-black"
                : "hover:border-b-red-900 hover:border-b "
            } transition-all duration-500`}
          >
            <h2 className=" text-2xl font-bold">CALL</h2>
            <h2 className=" text-lg font-bold">OF</h2>
            <h2 className=" text-2xl font-bold">DUTY</h2>
          </button>
        </div>
        {isAuth ? (
          <Leaderboard
            isSmashLeaderboard={isSmashLeaderboard}
            isCodLeaderboard={isCodLeaderboard}
            isFnLeaderboard={isFnLeaderboard}
          ></Leaderboard>
        ) : (
          <h1 className="pl-10 text-3xl mt-10">
            Log-In to view the Leaderboards!
          </h1>
        )}
      </section>
    </div>
  );
};

export default Leaderboards;
