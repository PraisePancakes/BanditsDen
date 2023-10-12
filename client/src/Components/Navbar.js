import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsInstagram, BsTwitter, BsYoutube, BsSnapchat } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { CiLogin } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const Navbar = (props) => {
  const { isMenuOpen, setIsMenuOpen } = props;
  const { isAuth, user, logout } = useAuth();

  let navLinks = [
    {
      title: "Home",
      id: 1,
      link: "/",
    },
    {
      title: "About",
      id: 2,
      link: "/about",
    },
    {
      title: "Contact",
      id: 3,
      link: "/contact",
    },
    {
      title: "Locations",
      id: 4,
      link: "/location",
    },
    {
      title: "Leaderboards",
      id: 5,
      link: "/leaderboards",
    },
  ];
  return (
    <div className="NAVBAR__COMPONENT__CONTAINER px-3">
      {isMenuOpen && (
        <section
          className={`Menu--Right-Container transition-all right-0 duration-500 text-black ${
            isMenuOpen
              ? "Open--Menu h-full bg-white z-[1000] fixed  w-[250px]"
              : "Close--Menu h-0 w-0 right-0 "
          } md:hidden`}
        >
          <h1 className="Menu--Right-Header text-3xl px-3 font-thin mt-3">
            Navigate
          </h1>
          {isAuth && (
            <h2 className="Token--Decoded-Username text-black text-center w-full text-xl font-thin ">
              Welcome {user?.username} to the den!{" "}
            </h2>
          )}
          <nav className="Open--Menu-Navbar">
            <ul className="Open--Menu-Ul flex flex-col gap-5 px-5 mt-3 items-end">
              {navLinks.map((nav) => {
                return (
                  <Link
                    to={nav.link}
                    key={nav.id}
                    className="Open--Menu-List__Items hover:text-red-900 underline underline-offset-4 decoration-white hover:decoration-red-900 transition-all duration-500 font-thin text-[1.3rem] hover:cursor-pointer h-full"
                  >
                    {nav.title}
                  </Link>
                );
              })}
            </ul>
          </nav>
          <div className="Menu--Registeration-box mt-10 flex justify-center gap-2">
            {isAuth ? (
              <button onClick={logout}>
                <span className="md:text-base text-xs">LOG-OUT</span>
              </button>
            ) : (
              <Link to="/login">
                <button className="border-[1px] border-black p-1 h-[2.2rem] md:w-[7rem] w-[5rem] flex items-center gap-2 hover:bg-red-900 transition-colors duration-500">
                  <CiLogin size={20} />
                  <span className="md:text-base text-xs ">LOG-IN</span>
                </button>
              </Link>
            )}
            {isAuth ? (
              <Link to="/profile">
                <button className="flex border-2 rounded-[50%] p-[.1rem]">
                  <BiUser size={25} />
                </button>
              </Link>
            ) : (
              <Link to="/register">
                <button className="h-[2.2rem] md:w-[7rem] w-[5rem] border-[1px] hover:bg-red-900 transition-colors duration-500 border-black">
                  <span className="md:text-base text-xs ">SIGN-UP</span>
                </button>
              </Link>
            )}
          </div>
          <div className="Socials--box mt-10 px-3">
            <h3>Follow Our Socials: </h3>
            <div className="flex mt-2 gap-3">
              <BsInstagram size={30} />
              <BsTwitter size={30} />
              <BsSnapchat size={30} />
              <BsYoutube size={35} />
            </div>
          </div>
          <div className="Policy--box mt-20 px-3">
            <button className="hover:text-red-900 transition-all hover:text-lg duration-500 text-gray-500 text-md underline underline-offset-4">
              View Our Policies
            </button>
          </div>
        </section>
      )}
      <section className="NAVBAR_TOP_CONTAINER flex justify-center  h-[70px] mx-10">
        <Link
          to="/"
          className="Brand--Container  bg-black px-3 flex flex-col justify-center"
        >
          <header className="text-left text-xl md:text-3xl font-semibold">
            BANDITS<span className="text-red-800">&lt;DEN&gt;</span>
          </header>
          <h2 className="px-3 md:text-md text-sm">Where the elites play.</h2>
        </Link>
        {isAuth && (
          <h2 className=" w-full text-sm font-thin mt-2 ">
            Welcome {user?.username} to the den!{" "}
          </h2>
        )}
        <div className="Register--Container md:flex gap-2 hidden items-center ml-auto">
          {isAuth ? (
            <button onClick={logout} className="w-[100px]">
              <span className="md:text-base ">LOG-OUT</span>
            </button>
          ) : (
            <Link
              to="/auth/login"
              className="p-1 h-[2.2rem] md:w-[7rem] w-[5rem] flex items-center
            gap-2 hover:bg-red-900 hover:border-[1px] transition-colors
            duration-500"
            >
              {" "}
              <CiLogin size={20} />
              <span className="md:text-base text-xs">LOG-IN</span>
            </Link>
          )}
          {isAuth ? (
            <Link to="/profile">
              <button className="flex border-2 rounded-[50%] p-[.1rem]">
                <BiUser size={25} />
              </button>
            </Link>
          ) : (
            <Link
              to="/auth/register"
              className="border-[1px] h-[2.2rem] md:w-[7rem] w-[5rem]
            hover:bg-red-900 transition-colors duration-500"
            >
              {" "}
              <span className="md:text-base text-xs">SIGN-UP</span>
            </Link>
          )}
        </div>
        <div className="flex items-center ml-auto md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="">
            <RxHamburgerMenu color="white" size={30} />
          </button>
        </div>
      </section>
      <section className="NAVBAR_BOTTOM_CONTAINER">
        <nav className="Navbar--Bottom-Navigator hidden text-black md:flex justify-center items-center bg-white hover:h-[80px] px-5 h-[60px] transition-all duration-500">
          <ul className="flex  items-center gap-10 px-5">
            {navLinks.map((nav) => {
              return (
                <Link
                  to={nav.link}
                  key={nav.id}
                  className="hover:text-red-900 underline underline-offset-4 decoration-white hover:decoration-red-900 transition-all duration-500 font-thin text-[1.3rem] hover:cursor-pointer h-full"
                >
                  {nav.title}
                </Link>
              );
            })}
          </ul>
        </nav>
      </section>
    </div>
  );
};

export default Navbar;
