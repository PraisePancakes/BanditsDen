import React from "react";
import Maps from "../Components/Maps";
const Locations = () => {
  return (
    <div>
      <section className="LOCATIONS__PAGE_CONTAINER mx-10 max-w-full justify-center items-center flex flex-col mb-20">
        <h1 className="Locations--Header text-center mt-10 mb-10 font-thin text-4xl">
          LOCATIONS
        </h1>
        <Maps></Maps>
        <h1 className="mt-5">UPCOMING EVENTS</h1>
        <div className="flex gap-10 mt-5">
          <div className="flex flex-col items-center">
            <h1 className="">BOLD MATSURI CON</h1>
            <h2>1000 Water St, Jacksonville, FL 32204 </h2>
            <h2>June 24-25, 2023 </h2>
            <h2>Tournament Registeration Begins at 10 A.M</h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Locations;
