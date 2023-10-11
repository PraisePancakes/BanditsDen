import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="FOOTER_COMPONENT_CONTAINER relative p-10 border-t-[1px]">
      <section className="text-white flex md:flex-row flex-col md:gap-[5rem] gap-1 justify-center">
        <div className="Footer--Contact">
          <h2 className="underline underline-offset-4">CONTACT</h2>
          <h3>Phone : (904) 314-1478</h3>
          <h3>Email : bbanditreach@gmail.com </h3>
          <h3>Location: Jacksonville, FL</h3>
        </div>
        <div className="Footer--Inquiries flex flex-col">
          <h2 className="underline underline-offset-4">INQUIRIES</h2>
          <Link to="/contact">
            <button className=" hover:text-red-500 transition-colors duration-500">
              Questions? Click here
            </button>
          </Link>
          <Link to="/contact">
            <button className="hover:text-red-500 transition-colors duration-500">
              Suggestions/Feedback
            </button>
          </Link>
        </div>
        <div className="Footer--Policies flex flex-col">
          <h2 className="underline underline-offset-4">POLICIES</h2>
          <Link to="/privacy">
            <button className="hover:text-red-500 transition-colors duration-500">
              Privacy Policy
            </button>
          </Link>
          <Link to="/contact">
            <button className="hover:text-red-500 transition-colors duration-500">
              Refunds
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Footer;
