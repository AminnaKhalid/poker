import React, { useState } from "react";
import profile from "./assets/profile1.png";
import SuspendModal from "./SuspendModal";

const AllUsers = () => {
  const data = [
    {
      id: 1,
      user: "Esther Howard",
      email: "curtis.weaver@example.com",
      status: "active",
    },
    {
      id: 2,
      user: "Jerome Howard",
      email: "curtis.weaver@example.com",
      status: "active",
    },
    {
      id: 3,
      user: "Suspended User",
      email: "suspended@example.com",
      status: "suspended",
    },
    {
      id: 4,
      user: "Blacklisted User",
      email: "blacklisted@example.com",
      status: "blacklisted",
    },
  ];

  const [open, setOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);

  const handleSuspendClick = (userId) => {
    setSelectedUserId(userId);
    setOpen(true);
  };

  return (
    <>
      <div className="relative overflow-x-auto">
        {/* Table Container */}
        <div className="min-w-[600px] md:min-w-auto">
          <div className="grid grid-cols-10 md:grid-cols-10 bg-[#EAEAEA] mb-4 text-center border border-[#0000001A] font-[600] text-[14px] text-gray-700 rounded-tl-xl rounded-tr-xl">
            <div className="userstable rounded-tl-xl col-span-2">Sr no</div>
            <div className="userstable col-span-3">User</div>
            <div className="userstable col-span-3">Email</div>
            <div className="userstable col-span-2 rounded-tr-xl">Action</div>
          </div>

          {/* Table Body */}
          <div className="bg-white">
            {data.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-10 md:grid-cols-10 text-center font-[600] text-[10px] md:text-[12px] text-black border-b border-[#0000001A] "
              >
                <div className="userstable col-span-2 userstext">{item.id}</div>
                <div className="userstable col-span-3 userstext flex items-center justify-center">
                  <img
                    src={profile}
                    alt=""
                    className="md:w-10 md:h-10 w-8 h-8 mr-3"
                  />
                  {item.user}
                </div>
                <div className="userstable col-span-3 userstext">
                  {item.email}
                </div>
                <div className="userstable col-span-2 py-2 flex flex-col items-center justify-center space-y-1">
                  {item.status === "active" && (
                    <>
                      <button
                        className="rounded-lg bg-[#EAEAEA] px-2 py-1 text-[10px] md:text-[12px] w-full max-w-[120px] cursor-pointer"
                        onClick={() => handleSuspendClick(item.id)}
                      >
                        Suspend
                      </button>
                      <button className="rounded-lg bg-[#FFD7D7] px-2 py-1 text-[10px] md:text-[12px] w-full max-w-[120px] cursor-pointer">
                        Blacklist
                      </button>
                    </>
                  )}
                  {item.status === "suspended" && (
                    <button
                      className="rounded-lg bg-[#EAEAEA] px-2 py-1 text-[10px] md:text-[12px] w-full max-w-[160px] cursor-pointer"
                      onClick={() => handleSuspendClick(item.id)}
                    >
                      Suspend for 24 hours
                    </button>
                  )}
                  {item.status === "blacklisted" && (
                    <button className="rounded-lg bg-[#FFD7D7] px-2 py-1 text-[10px] md:text-[12px] w-full max-w-[160px] cursor-pointer">
                      Remove from Blacklist
                    </button>
                  )}
                </div>
              </div>
            ))}

            {open && (
              <SuspendModal
                onClose={() => setOpen(false)}
                userId={selectedUserId}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllUsers;
