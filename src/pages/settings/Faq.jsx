import React, { useState } from "react";
import dots from "./assets/dots.png";

const Faq = () => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const faqdata = [
    {
      question:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    },
    {
      question:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      question:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    },
  ];

  return (
    <>
      <div className="space-y-4 flex flex-col px-4 sm:px-6 md:px-10">
        <div className="setting_title mt-6 text-xl sm:text-2xl font-semibold">
          FAQ
        </div>

        {faqdata.map((item, index) => (
          <div
            key={index}
            className="dashcard flex flex-col relative p-4 sm:p-6 bg-white rounded shadow-sm"
          >
            {/* for question */}
            <div className="flex justify-between items-start text-base sm:text-lg font-normal gap-4">
              <div className="flex-1 break-words">
                <b>Q :</b> <span>{item.question}</span>
              </div>
              <div className="relative">
                <img
                  src={dots}
                  alt=""
                  className="h-6 w-6 cursor-pointer"
                  onClick={() =>
                    setOpenDropdownIndex(
                      openDropdownIndex === index ? null : index
                    )
                  }
                />
                {openDropdownIndex === index && (
                  <div className="absolute right-2 mt-0 min-w-[6rem] bg-white border border-gray-200 rounded shadow-md z-10 text-sm">
                    <button className="w-full text-left px-3 py-2 hover:bg-gray-100 border-b border-gray-200">
                      Edit
                    </button>
                    <button className="w-full text-left px-3 py-2 hover:bg-gray-100">
                      Delete
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* for answer */}
            <div className="text-base sm:text-lg font-normal mt-2 break-words">
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Faq;
