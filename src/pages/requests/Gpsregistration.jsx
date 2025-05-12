import React from "react";
import calendar from "./assets/calendar.png";
import time from "./assets/time.png";
import profile1 from "./assets/profile1.png";
import profile2 from "./assets/profile2.png";
import profile3 from "./assets/profile3.png";
import { Link } from "react-router-dom";
const Gpsregistration = () => {
  const gpsdata = [
    {
      profile: profile1,
      name: "Ralph Edwards",
      competition: "alma.lawson@example.com",
    },
    {
      profile: profile2,
      name: "Ralph Edwards",
      competition: "alma.lawson@example.com",
    },
    {
      profile: profile3,
      name: "Ralph Edwards",
      competition: "alma.lawson@example.com",
    },
    {
      profile: profile3,
      name: "Ralph Edwards",
      competition: "alma.lawson@example.com",
    },
    {
      profile: profile2,
      name: "Ralph Edwards",
      competition: "alma.lawson@example.com",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* card section */}
        {gpsdata.map((item) => (
          <div className="dashcard">
            <div className="flex xl:justify-between flex-col-reverse xl:flex-row">
              <div className="flex space-x-2">
                <img src={item.profile} alt="" className="h-16 w-16" />
                <div className="flex flex-col justify-center">
                  <span className="font-medium text-xl">{item.name}</span>
                  <span className="font-normal text-xs md:text-sm text-gray-400 ">
                    {item.competition}
                  </span>
                </div>
              </div>
              <div className="flex flex-col xl:justify-center items-end xl:items-start ">
                <img src={calendar} alt="" className="w-20 h-6" />
                <img src={time} alt="" className="w-20 h-6" />
              </div>
            </div>

            {/* buttons */}
            <div className="space-x-3 flex mt-6 ">
              <Link
                className="request_btn bg-[#F6F6F6] "
                to={"/request/detail"}
              >
                Decline
              </Link>
              <Link
                className="request_btn bg-[#D35C57] text-white"
                to={"/request/detail"}
              >
                Accept
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Gpsregistration;
