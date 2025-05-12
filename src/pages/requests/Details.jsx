import React from "react";
import Navbar from "../components/Navbar";
import Heading from "../components/Heading";
import profile from "./assets/profile2.png"
import time from "./assets/time.png"
import calendar from "./assets/calendar.png"
import { Link } from "react-router-dom";
import pdf from "./assets/pdf.png"
const Details = () => {
  const detailsdata = [
    { name: "Passport" },
    { name: "Passport size photo" },
    { name: "Resume" },
  ];
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <Navbar />
        <div className="flex-1">
          <Heading headingname={"Requests Details"} />
          <div className="mainsec">
            {/* profile card */}
            <div className="dashcard flex justify-between flex-col md:flex-row my-0">
              <div className="flex space-x-4 flex-col-reverse md:flex-row">
                <div className="flex space-x-2">
                  <img
                    src={profile}
                    alt=""
                    className="md:h-20 md:w-20 h-16 w-16"
                  />

                  <div className="flex flex-col justify-center">
                    <span className="font-medium text-xl md:text-2xl">
                      Ralph Edwards
                    </span>
                    <span className="font-normal text-xs md:text-lg text-gray-400 ">
                      alma.lawson@example.com
                    </span>
                  </div>
                </div>

                <div className="flex justify-center items-end md:items-center flex-col ml-8">
                  <img
                    src={calendar}
                    alt=""
                    className="w-24 h-7 object-cover"
                  />
                  <img src={time} alt="" className="w-24 h-7 object-cover" />
                </div>
              </div>

              <div className="flex flex-col justify-center space-y-2 md:w-[15%] w-full mt-8 md:mt-0">
                <Link
                  className=" bg-[#F6F6F6] request_btn"
                  to={"/request/detail"}
                >
                  Decline
                </Link>
                <Link
                  className=" bg-[#D35C57] text-white request_btn"
                  to={"/request/detail"}
                >
                  Accept
                </Link>
              </div>
            </div>

            {/* pdf card */}
            <div className="grid gap-4">
              {detailsdata.map((items) => (
                <div>
                  <div className="dashcard flex items-center justify-center py-18">
                    <img src={pdf} alt="" className="w-32 h-32" />
                  </div>
                  <div className="dashcard bg-[#EDEDED] text-black text-xl text-center py-3">
                    {items.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
