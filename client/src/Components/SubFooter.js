import React from "react";
import { Link } from "react-router-dom";
import { BsInstagram, BsTwitter, BsYoutube, BsSnapchat } from "react-icons/bs";

const SubFooter = () => {
  return (
    <div className="Sub--Footer--Socials text-white mt-10 mb-10 px-[6rem]">
      <h3>Follow Our Socials: </h3>
      <div className="flex mt-2 gap-3">
        <Link to="https://www.instagram.com/baggedbandits?igshid=MmJiY2I4NDBkZg==">
          <BsInstagram size={30} />
        </Link>
        <Link to="https://twitter.com/BaggedBanditos">
          <BsTwitter size={30} />
        </Link>
        <Link to="">
          <BsSnapchat size={30} />
        </Link>
        <Link to="https://www.youtube.com/@thebaggedbandits/videos">
          <BsYoutube size={35} />
        </Link>
      </div>
    </div>
  );
};

export default SubFooter;
