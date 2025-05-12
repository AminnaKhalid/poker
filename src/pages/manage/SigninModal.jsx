import React from "react";
import back from "./assets/backarrow.png";

const SigninModal = ({ onClose }) => {
  const datacard = [
    { time: "10:00 am", break: "Dinner Break", hours: "Working Hours" },
    { time: "10:00 am", break: "Dinner Break", hours: "Working Hours" },
    { time: "10:00 am", break: "Dinner Break", hours: "Working Hours" },
    { time: "10:00 am", break: "Dinner Break", hours: "Working Hours" },
    { time: "10:00 am", break: "Dinner Break", hours: "Working Hours" },
    { time: "10:00 am", break: "Dinner Break", hours: "Working Hours" },
  ];

  return (
    <div className="fixed inset-0 bg-[#00000030] z-50 flex justify-center items-center">
      <div className="bg-white w-full max-w-3xl max-h-[90vh] p-4 m-2 rounded-xl overflow-y-auto">
        {/* Header */}
        <div className="flex items-center mb-4">
          <img
            src={back}
            alt="Back"
            className="w-8 h-8 cursor-pointer"
            onClick={onClose}
          />
          <span className="mainhead text-lg font-semibold mx-auto">
            Sign In and Out History
          </span>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {datacard.map((items, index) => (
            <div key={index} className="flex flex-col">
              {/* Date with line */}
              <div className="flex items-center my-2">
                <span className="mainsub text-sm font-medium">12/02/25</span>
                <span className="flex-grow border-t-2 border-gray-300 ml-4"></span>
              </div>

              {/* Card Content */}
              <div className="dashcard p-4 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <span className="maintitle">{items.time}</span>
                    <span className="mainsub">Check in</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="maintitle">{items.time}</span>
                    <span className="mainsub">Check out</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <span className="maintitle">No</span>
                    <span className="mainsub">{items.break}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="maintitle">7 hours</span>
                    <span className="mainsub">{items.hours}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SigninModal;
