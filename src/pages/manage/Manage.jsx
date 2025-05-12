import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Heading from "../components/Heading";
import search from "./assets/search.png";
import arrow from "./assets/arrow.png";
import AllUsers from "./AllUsers";
import BlockedUsers from "./BlockedUsers";
import Pagination from "../components/Pagination";

const Manage = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selected, setSelected] = useState("all"); // Show AllUsers by default

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const handleSelect = (type) => {
    setSelected(type);
    setDropdownOpen(false);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Navbar />
      <div className="flex-1 flex flex-col">
        <Heading headingname={"User Management"} />
        <div className="mainsec p-4 space-y-4 flex-1 pb-20">
          {/* Search and Dropdown */}
          <div className="flex flex-col md:flex-row md:items-center md:gap-6">
            {/* Search box */}
            <div className="relative w-full lg:w-4/5 md:w-3/5">
              <input
                type="text"
                placeholder="Search for a user..."
                className="text-gray-400 border-[#E4E4E4] border-2 rounded-xl px-4 py-3 w-full"
              />
              <img
                src={search}
                alt="search"
                className="absolute h-7 w-7 right-3 bottom-2.5"
              />
            </div>

            {/* Dropdown */}
            <div className="relative mt-4 md:mt-0 lg:w-1/5 md:w-2/5">
              <div
                onClick={toggleDropdown}
                className="flex items-center justify-between px-4 py-3 border-2 border-[#E4E4E4] rounded-xl cursor-pointer bg-white"
              >
                <span>
                  {selected === "blocked" ? "Blocked Users" : "All Users"}
                </span>
                <img src={arrow} alt="arrow" className="w-3 h-1.5 ml-2" />
              </div>

              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                  {selected !== "blocked" && (
                    <div
                      onClick={() => handleSelect("blocked")}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      Blocked Users
                    </div>
                  )}
                  {selected === "blocked" && (
                    <div
                      onClick={() => handleSelect("all")}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      All Users
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
          {/* Conditionally Rendered Components */}
          <div className="mt-6 flex-1">
            {selected === "all" && <AllUsers />}
            {selected === "blocked" && <BlockedUsers />}
          </div>
        </div>

        {/* Pagination at bottom */}
        <div className="w-full">
          <Pagination totalItems={153} itemsPerPageOptions={[5, 10, 25, 50]} />
        </div>
      </div>
    </div>
  );
};

export default Manage;
