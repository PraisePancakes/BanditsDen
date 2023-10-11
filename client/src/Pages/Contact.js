import React from "react";

//Name and Number of all working members
//Help Section
const Contact = () => {
  return (
    <div>
      <section className="CONTACT__PAGE_CONTAINER max-w-full justify-center  items-center flex flex-col gap-2 ">
        <div className="mb-10 mt-5">
          <h1 className="Contact--Header text-center  font-thin text-4xl">
            CONTACT
          </h1>
          <h1 className="Contact--Our-Members text-center mt-5 text-xl underline underline-offset-2">
            Contact Directly
          </h1>
          <div className="Member--Contact-Info__Box flex justify-start flex-col">
            <div className="Event--Info-Box border w-[15rem] p-2 mt-2">
              <h2 className="Member--1-Name">Organization : Bandits Den</h2>
              <h2 className="Member--1-Number">
                Phone Number : (904) 314-1478
              </h2>
              <h2 className="Member--1-Email">
                Email : bbanditreach@gmail.com{" "}
              </h2>
            </div>
            <div className="Member--1-Info__Box border w-[15rem] p-2 mt-2">
              <h2 className="Member--1-Name">
                Event Organizer : Joshua Newkirk
              </h2>
              <h2 className="Member--1-Number">
                Phone Number : (904) 422-9007
              </h2>
              <h2 className="Member--1-Email">
                Email : Joshua.newkirk10@gmail.com
              </h2>
            </div>
            <div className="Member--2-Info__Box border w-[15rem] p-2 mt-2">
              <h2 className="Member--1-Name">
                DevOps and Infrastructure Organizer : Arya Sharifai
              </h2>
              <h2 className="Member--1-Number">
                Phone Number : (904) 314-1478
              </h2>
              <h2 className="Member--1-Email">
                Email : Aryasharifai01@yahoo.com{" "}
              </h2>
            </div>
            <h1 className="font-thin w-[15rem] mt-3">
              Feel free to contact us about suggestions and feedback! It would
              be very much appreciated
            </h1>
          </div>
        </div>

        <div className="Common--Questions-Box flex flex-col gap-2 bg-red-400 h-[30rem] w-full">
          <div className="mx-10">
            <h1 className="text-xl text-center underline underline-offset-2 md:mt-10 mt-5">
              FREQUENTLY ASKED QUESTIONS
            </h1>
            <h2>
              1 : How do we accept payment?{" "}
              <span className="font-thin">
                Currently we only accept{" "}
                <span className="text-lg text-black font-bold underline underline-offset-2">
                  cash payments
                </span>{" "}
                sorry for the inconvience!
              </span>
            </h2>
            <h2>
              2 : Will we branch out to other cities?{" "}
              <span className="font-thin">
                At this moment we are trying to branch out as much as we can,
                our plan is to{" "}
                <span className="text-lg text-black font-bold underline underline-offset-2">
                  start with local conventions
                </span>{" "}
                and hopefully expanding to conventions through out{" "}
                <span className="text-lg text-black font-bold underline underline-offset-2">
                  all of florida and potentially all of the United States.
                </span>
              </span>
            </h2>
            <h2>
              3 : What are your refund policies?{" "}
              <div className="font-thin">
                <li>Change in event schedules</li>
                <li>Change in convention schedules</li>
                <li>Absent Opponents </li>
              </div>
            </h2>
            <h2>
              4: Are we accepting applications?{" "}
              <span className="font-thin">
                For the time being{" "}
                <span className="text-lg text-black font-bold underline underline-offset-2">
                  we are not looking for workers
                </span>{" "}
                however, as we branch out and spread our events{" "}
                <span className="text-lg text-black font-bold underline underline-offset-2">
                  in the future workers will be needed!{" "}
                </span>
              </span>
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
