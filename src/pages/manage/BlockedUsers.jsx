import React from "react";
import profile from "./assets/profile1.png";
import {Link} from 'react-router-dom';
const BlockedUsers = () => {
  const data = [
    {
      id: 1,
      user: "Esther Howard",
      email: "curtis.weaver@example.com",
      button: "Remove from Blacklist",
    },
    {
      id: 2,
      user: "Jerome Howard",
      email: "curtis.weaver@example.com",
      button: "suspend for 24 hours",
    },
    {
      id: 3,
      user: "Esther Howard",
      email: "curtis.weaver@example.com",
      button: "suspend for 24 hours",
    },
  ];

  return (
    <>
      <div className="relative overflow-x-auto">
        {/* Table Container */}
        <div className="min-w-[600px] md:min-w-auto">
          <div className="grid grid-cols-10 md:grid-cols-10 bg-[#EAEAEA] mb-4 text-center border border-[#0000001A] font-[600] text-[14px] text-gray-700 rounded-tl-xl rounded-tr-xl">
            <div className="userstable col-span-2">Sr no</div>
            <div className="userstable col-span-3">User</div>
            <div className="userstable col-span-3">Email</div>
            <div className="userstable col-span-2">Action</div>
          </div>
          {/* Table Body */}
          <div className="bg-white">
            {data.map((items) => (
              <div
                key={items.id}
                className="grid grid-cols-10 md:grid-cols-10 text-center font-[600] text-[10px] md:text-[12px] text-black"
              >
                <div className="userstable col-span-2 userstext">
                  {items.id}
                </div>
                <div className="userstable col-span-3 userstext flex items-center justify-center space-x-2">
                  <img
                    src={profile}
                    alt=""
                    className="md:w-10 md:h-10 w-8 h-8"
                  />
                  <span>{items.user}</span>
                </div>
                <div className="userstable col-span-3 userstext">
                  {items.email}
                </div>
                <div className="userstable col-span-2 flex flex-col space-y-1 items-center justify-center">
                  <Link
                    className={`rounded-lg px-5 py-1 cursor-pointer text-center ${
                      items.button.toLowerCase().includes("blacklist")
                        ? "bg-[#FFD7D7] text-black"
                        : "bg-[#EAEAEA] text-black"
                    }`}

                    to={'/manage/details'}
                  >
                    {items.button}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlockedUsers;
