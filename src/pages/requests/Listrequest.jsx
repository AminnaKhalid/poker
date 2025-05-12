import React from "react";
import profile1 from "./assets/profile1.png";
import profile2 from "./assets/profile2.png";
import profile3 from "./assets/profile3.png";
const Listrequest = () => {

  const requestdata = [
    {
      pic: profile1,
      name: "Ralph Edwards",
      competition: "Poker Stars Open Competition",
    },
    {
      pic: profile2,
      name: "Ralph Edwards",
      competition: "Poker Stars Open Competition",
    },
    {
      pic: profile3,
      name: "Ralph Edwards",
      competition: "Poker Stars Open Competition",
    },
    {
      pic: profile1,
      name: "Ralph Edwards",
      competition: "Poker Stars Open Competition",
    },
  ];
  return (
    <>
      {/* grid of cards with random data  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-3 gap-4">
        {/* yahan sa mapping hogi */}
        {requestdata.map((item) => (
          <div className="dashcard">
            <div className="row space-x-2">
              <img src={item.pic} alt="" className="w-16 h-16" />
              <div className="flex flex-col justify-center">
                <span className="font-medium text-xl">{item.name}</span>
                <span className="font-normal text-sm text-gray-400 ">
                  {item.competition}
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex gap-2 ">
                <span className="request_title w-28">Start Time</span>
                <span className="request_sub">:</span>
                <span className="request_sub">12:00 pm</span>
              </div>
              <div className="flex gap-2">
                <span className="request_title w-28">Request Time</span>
                <span className="request_sub">:</span>
                <span className="request_sub">04:00 pm</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Listrequest;
