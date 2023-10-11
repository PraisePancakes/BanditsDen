import React from "react";

const Privacy = () => {
  return (
    <div>
      <section className="LOCATIONS__PAGE_CONTAINER mx-10 max-w-full justify-center items-center flex flex-col gap-5 mb-20">
        <h1 className="Locations--Header text-center mt-10 font-thin text-4xl">
          PRIVACY POLICIES
        </h1>
        <h2 className="text-lg md:text-xl text-center">
          How do we protect your personal information?
        </h2>
        <p className="indent-5 md:mx-[10rem] mx-5 text-center">
          The Bandits Den DevOps team protects your passwords through a series
          of{" "}
          <span className="text-red-500">hashing and salting algorithms</span>{" "}
          to encrypt your password, statistically to crack a unique password on
          this website it would take a malevolent intruder roughly{" "}
          <span className="text-red-500">4000 years</span>!{" "}
        </p>
        <h2 className="text-xl text-center">
          What kind of data do we collect?
        </h2>
        <p className="indent-5 md:mx-[10rem] mx-5 text-center">
          Bandits Den collects only the necessary information for a conventional
          website, we want our data to relate with other users data and render
          these abstractions on the website for convience.{" "}
          <span className="text-red-500">
            For the users our database collects hashed and salted passwords
            meaning we on the backend cant view your secret passwords.
          </span>{" "}
          We collect your name and email as well for refund policies and
          organizing our event and web structures.
        </p>
        <h2 className="text-xl text-center">
          What happens in case of a database breech?
        </h2>
        <p className="indent-5 md:mx-[10rem] mx-5  text-center ">
          Your privacy and security is our priority! in the case of any database
          breech we have a{" "}
          <span className="text-red-500">
            backup database to store all our users
          </span>{" "}
          as well as a
          <span className="text-red-500">
            {" "}
            production database which will be discarded as soon as the breech
            occurs
          </span>
        </p>
      </section>
    </div>
  );
};

export default Privacy;
