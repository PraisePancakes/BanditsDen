import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const Profile = () => {
  const { logout, user } = useAuth();
  const [main, setMain] = useState("");
  const [charList, setCharList] = useState([]);
  const [newUsername, setNewUsername] = useState("");
  const [openConfirmation, setOpenConfirmation] = useState(false);
  const [passwordCheck, setPasswordCheck] = useState("");
  const [isNewUnameClicked, setIsNewUnameClicked] = useState(false);
  const [isOpenCharMenu, setIsOpenCharMenu] = useState(false);

  let username = user.username;
  let createdAt = user.createdAt;

  const handleOpenCharMenu = async () => {
    try {
      const list = await axios.get(
        "https://bbanditservices.onrender.com/smashCharacters"
      );
      const charNames = list.data.map((chars) => ({
        ...chars,
      }));

      setCharList(charNames);
      setIsOpenCharMenu(!isOpenCharMenu);
    } catch (error) {
      console.log(error);
    }
  };

  const handleMainChange = async () => {
    try {
      await axios.patch(
        `https://bbanditservices.onrender.com/setSmashMain/${user._id}`,
        {
          main,
        }
      );
      localStorage.setItem("main", main);
      alert("Changing your main will require you to log in");
      logout();
    } catch (error) {
      console.log(error);
    }
  };

  const handleUsernameChange = async () => {
    try {
      await axios.patch(
        `https://bbanditservices.onrender.com/changeUsername/${user._id}`,
        {
          username: newUsername,
        }
      );

      alert("Username successfully updated!");
      localStorage.setItem("username", newUsername);
      logout();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDiscardAcc = async () => {
    try {
      await axios.delete(
        `https://bbanditservices.onrender.com/deleteUser/${user._id}`,
        {
          data: { password: passwordCheck },
        }
      );
      logout();
      alert("Account deleted successfully");
    } catch (error) {
      alert("Password Compare failed: retry");
    }
  };

  return (
    <div>
      <div className="PROFILE__PAGE_CONTAINER mx-10 max-w-full justify-center items-center flex flex-col gap-2 mb-20">
        {" "}
        <h1 className="Profile--Header text-center mt-10  font-thin text-4xl">
          PROFILE
        </h1>
        <h2 className="Username--Sub-Header text-center text-2xl  font-bold">
          <span className="Username::Before-Text font-thin underline underline-offset-4">
            Bandit username:{" "}
          </span>
          {username}
        </h2>
        <button
          onClick={() => setIsNewUnameClicked(!isNewUnameClicked)}
          className="Edit--Username-Btn text-pink-400 w-[10rem] font-thin  hover:text-white hover:bg-black transition-colors duration-500 border"
        >
          Edit your username
        </button>
        {isNewUnameClicked && (
          <div>
            <input
              type="text"
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
              className="New--Username-Input text-black px-5 focus:outline-none"
            />{" "}
            <button
              onClick={handleUsernameChange}
              className="Update--Username-Btn"
            >
              Update Username
            </button>{" "}
          </div>
        )}
        <h3 className="CreatedAt--Text text-center ">
          Account Birthday : {createdAt}
        </h3>
        <h3 className="Free--Entry-Text font-thin">
          One free tournament entry each account birthday!
        </h3>
        <div className="Bottom--Profile-Flex__Box_Row flex gap-5 mb-5">
          <Link to="/privacy">
            <button className="Privacy--Policy-Btn border px-1 hover:bg-slate-200 hover:text-black transition-colors duration-500">
              PRIVACY POLICY
            </button>
          </Link>

          <div className="Smash--Mains-Modal__Box">
            <button
              onClick={() => handleOpenCharMenu()}
              className="Smash--Mains-Modal_Btn border-[1px] px-1 hover:bg-slate-200 hover:text-black transition-colors duration-500"
            >
              {user.main !== "" ? (
                `Your Current Main : ${user.main}`
              ) : (
                <h1 className="Default--Smash-Mains__Modal_Text">
                  PROVIDE A SMASH ULTIMATE MAIN
                </h1>
              )}
            </button>
            {isOpenCharMenu && (
              <ul className="Smash--CharList-Ul absolute z-[10] w-[17rem] overflow-auto max-h-[300px] mt-1 bg-white ">
                {charList.map((chars) => {
                  return (
                    <li
                      className="Smash--CharList-List__Items text-black px-2 border-b-2"
                      key={chars.order}
                    >
                      <button
                        value={chars.name}
                        onClick={(e) => setMain(e.target.value)}
                        className="Smash--CharList-List__Items_Btn hover:text-red-300 transition-colors duration-300"
                      >
                        {chars.name}
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}

            {main !== "" ? (
              <button
                onClick={handleMainChange}
                className="Smash--Update-Main_Btn hover:text-red-400 duration-500 transition-colors"
              >
                UPDATE MAIN
              </button>
            ) : (
              ""
            )}
          </div>
          <Link to="/privSettings">
            <button className="Edit--Privacy-Settings_Btn border px-1 hover:bg-slate-200 hover:text-black transition-colors duration-500">
              EDIT PRIVACY SETTINGS
            </button>
          </Link>

          <button
            className="Terminate--Account-Btn border-red-800 border bg-black text-red-500 px-1"
            onClick={() => setOpenConfirmation(true)}
          >
            DISCARD ACCOUNT
          </button>
        </div>
        {openConfirmation && (
          <div className="w-[20rem]">
            <h1>Please confirm your password to delete your account: </h1>
            <input
              type="text"
              value={passwordCheck}
              onChange={(e) => setPasswordCheck(e.target.value)}
              className="w-full focus:outline-none px-5 text-black"
            ></input>
            <button
              onClick={handleDiscardAcc}
              className="border-red-900 border bg-black text-red-500 px-4 mt-2"
            >
              DELETE
            </button>
          </div>
        )}
        <button
          onClick={logout}
          className="Log--Out-Btn border px-1 hover:bg-slate-200 hover:text-black transition-colors duration-500"
        >
          LOG-OUT
        </button>
      </div>
    </div>
  );
};

export default Profile;
