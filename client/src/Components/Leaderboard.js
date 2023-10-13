import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../Context/AuthContext";

const Leaderboard = (props) => {
  const { isSmashLeaderboard, isCodLeaderboard, isFnLeaderboard } = props;

  const [listUsers, setListUsers] = useState([]);
  const [noUsers, setNoUsers] = useState("");
  const [updateSmashWins, setUpdatedSmashWins] = useState(0);
  const [updateSmashLosses, setUpdatedSmashLosses] = useState(0);
  const [updateCodWins, setUpdatedCodWins] = useState(0);
  const [updateCodLosses, setUpdatedCodLosses] = useState(0);
  const [updateFnWins, setUpdatedFnWins] = useState(0);
  const [updateFnLosses, setUpdatedFnLosses] = useState(0);
  const [selectedUserId, setSelectedUserId] = useState(null); //Authorized state only !!
  //https://bbanditsden.onrender.com

  const { user } = useAuth();
  useEffect(() => {
    const getUsers = async () => {
      try {
        const list = await axios.get(
          "https://bbanditsden.onrender.com/leaderboard"
        );
        const updatedListUsers = list.data.map((user) => ({
          ...user,
          winLossRatio: user.smashWins / (user.smashLosses || 1),
        }));

        setListUsers(updatedListUsers);
        if (list.data.length === 0) {
          setNoUsers("No Players Currently");
        }
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, []);

  const handleUpdateWinsLosses = async () => {
    try {
      await axios.patch(
        `https://bbanditsden.onrender.com/leaderboard/${selectedUserId}`,
        {
          smashWins: updateSmashWins,
          smashLosses: updateSmashLosses,
          codWins: updateCodWins,
          codLosses: updateCodLosses,
          fnWins: updateFnWins,
          fnLosses: updateFnLosses,
        }
      );

      setUpdatedSmashWins(0);
      setUpdatedCodWins(0);
      setUpdatedFnWins(0);
      setUpdatedSmashLosses(0);
      setUpdatedCodLosses(0);
      setUpdatedFnLosses(0);
      setSelectedUserId(null);
    } catch (error) {
      console.log(error);
    }
  };

  const sortedUsers = [...listUsers].sort(
    (a, b) => b.winLossRatio - a.winLossRatio
  );

  return (
    <div>
      {isSmashLeaderboard && (
        <section className="flex md:mx-5 md:gap-5 justify-center items-center max-w-full">
          <ul className="">
            <h1 className="md:text-xl text-sm underline underline-offset-2">
              Players
            </h1>
            {sortedUsers.map((user) => (
              <li key={user._id} className="py-1">
                {user.username}
              </li>
            ))}
          </ul>
          <ul className="border-l px-2 flex flex-col items-center">
            <h1 className="md:text-xl text-sm underline underline-offset-2">
              Wins
            </h1>
            {sortedUsers.map((otherUser) => (
              <li
                key={otherUser._id}
                onClick={() => setSelectedUserId(otherUser._id)}
                className="py-1"
              >
                {otherUser.smashWins}
                {user?.isAdmin && selectedUserId === otherUser._id && (
                  <div>
                    <input
                      type="number"
                      value={updateSmashWins}
                      onChange={(e) => setUpdatedSmashWins(e.target.value)}
                      className="text-black"
                    />
                    <button
                      onClick={handleUpdateWinsLosses}
                      className="ml-2 px-3 py-1 bg-blue-500 text-white rounded"
                    >
                      Update
                    </button>
                  </div>
                )}
              </li>
            ))}
          </ul>
          <ul className="border-l px-2 flex flex-col items-center">
            <h1 className="md:text-xl text-sm underline underline-offset-2">
              Losses
            </h1>
            {sortedUsers.map((otherUser) => (
              <li
                key={otherUser._id}
                onClick={() => setSelectedUserId(otherUser._id)}
                className="py-1"
              >
                {otherUser.smashLosses}
                {isSmashLeaderboard &&
                  user?.isAdmin &&
                  selectedUserId === otherUser._id && (
                    <div>
                      <input
                        type="number"
                        value={updateSmashLosses}
                        onChange={(e) => setUpdatedSmashLosses(e.target.value)}
                        className="text-black"
                      />
                      <button
                        onClick={handleUpdateWinsLosses}
                        className="ml-2 px-3 py-1 bg-blue-500 text-white rounded"
                      >
                        Update
                      </button>
                    </div>
                  )}
              </li>
            ))}
          </ul>
          <ul className="border-l px-2 flex flex-col items-center">
            <h1 className="md:text-xl text-sm underline underline-offset-2">
              Main
            </h1>
            {sortedUsers.map((otherUser) => (
              <li key={otherUser._id} className="py-1">
                {otherUser.main ? otherUser.main : <h1>N/A</h1>}
              </li>
            ))}
          </ul>
          <ul className="border-l px-2 flex flex-col items-center">
            <h1 className="md:text-xl text-sm underline underline-offset-2">
              W/L
            </h1>
            {sortedUsers.map((otherUser) => (
              <li key={otherUser._id} className="py-1">
                {`${(
                  otherUser.smashWins / (otherUser.smashLosses || 1)
                ).toFixed(2)}`}
              </li>
            ))}
          </ul>
          <ul className="border-l px-2 flex flex-col items-center">
            <h1 className="md:text-xl text-sm underline underline-offset-2">
              Rank
            </h1>
            {sortedUsers.map((otherUser) => (
              <li key={otherUser._id} className="py-1">
                {sortedUsers.indexOf(otherUser) + 1}
              </li>
            ))}
          </ul>
        </section>
      )}
      {isCodLeaderboard && <h1>Leaderboard Coming Soon!</h1>}
      {isFnLeaderboard && <h1>Leaderboard Coming Soon!</h1>}
      {noUsers && <h1>{noUsers}</h1>}
    </div>
  );
};

export default Leaderboard;
