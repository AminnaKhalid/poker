import React, { useState } from "react";
import backarrow from "./assets/backarrow.png";

const SuspendModal = ({ onClose }) => {
  const suspenddata = [
    { data: "Current Stream" },
    { data: "24 hours" },
    { data: "One Week" },
    { data: "1 Month" },
    { data: "3 Month" },
    { data: "365 Days" },
    { data: "700 Days" },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="fixed z-50 inset-0 bg-[#00000044] flex justify-center items-center ">
      <div className="bg-[#FAFAFA] dashcard max-w-xl w-full p-4 rounded-md m-2">
        {/* arrow and heading */}
        <div className="flex items-center mb-4">
          <img
            src={backarrow}
            alt="Back"
            className="h-10 w-10 cursor-pointer"
            onClick={onClose}
          />
          <div className="flex-grow text-center font-semibold text-2xl">
            Suspend
          </div>
        </div>

        {/* suspend options */}
        <div className="grid grid-cols-3 gap-2 mb-6 dashcard">
          {suspenddata.map((item, index) => (
            <button
              key={index}
              className={`cursor-pointer border rounded-lg px-3 py-3 text-sm font-normal ${
                activeIndex === index
                  ? "bg-[#eeeded] border-[#E4E4E4] text-black"
                  : "border-[#E4E4E4] text-black"
              }`}
              onClick={() => setActiveIndex(index)}
            >
              {item.data}
            </button>
          ))}
        </div>

        <button
          onClick={onClose}
          className="cursor-pointer text-lg bg-[#D35C57] font-medium flex justify-center items-center mx-auto px-4 py-2 w-1/2 text-white rounded-lg"
        >
          Suspend
        </button>
      </div>
    </div>
  );
};

export default SuspendModal;
