import React, { useState } from 'react'
import profile from "./assets/profile1.png"
import SuspendModal from './SuspendModal';
const AllUsers = () => {
  const data = [
    { id: 1, user: "Esther Howard", email: "curtis.weaver@example.com" },
    { id: 2, user: "Jerome Howard", email: "curtis.weaver@example.com" },
    { id: 3, user: "Esther Howard", email: "curtis.weaver@example.com" },
  ];

  const [open , setOpen] = useState(false)
  return (
    <>
      <div className="relative overflow-x-auto">
        {/* Table Container */}
        <div className="min-w-[600px] md:min-w-auto">
          <div className="grid grid-cols-10 md:grid-cols-10 bg-[#EAEAEA] mb-4 text-center border border-[#0000001A] font-[600]  text-[14px] text-gray-700 rounded-tl-xl rounded-tr-xl">
            <div className="userstable col-span-2">Sr no</div>
            <div className="userstable col-span-3">User</div>
            <div className="userstable col-span-3">Email</div>
            <div className="userstable col-span-2">Action</div>
          </div>
          {/* Table Body */}
          <div className="bg-white">
            {data.map((items) => (
              <div className="grid grid-cols-10 md:grid-cols-10 text-center  font-[600]  text-[10px] md:text-[12px] text-black">
                <div className="userstable col-span-2 userstext">
                  {items.id}
                </div>
                <div className="userstable col-span-3 userstext">
                  <img src={profile} alt="" className="md:w-10 md:h-10 w-8 h-8 mr-3" />
                  {items.user}
                </div>
                <div className="userstable col-span-3 userstext">
                  {items.email}
                </div>
                <div className="userstable col-span-2 flex flex-col space-y-1">
                  <button className="rounded-lg bg-[#EAEAEA] px-5 py-1 cursor-pointer" onClick={()=>setOpen(true)}>Suspend</button>
                  <button className="rounded-lg bg-[#FFD7D7] px-5 py-1">Blacklist</button>
                </div>
              </div>
            ))}

            {open && <SuspendModal onClose={()=>setOpen(false)} />}
          </div>
            {/* <Pagination totalItems={153} itemsPerPageOptions={[5, 10, 25, 50]} /> */}

        </div>
      </div>
    </>
  );
}

export default AllUsers