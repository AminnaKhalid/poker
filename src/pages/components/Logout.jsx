import React from 'react'
import logout from "./assets/logoutmodal.png"
const Logout = ({onclose}) => {
  return (
    <>
      <div className="fixed inset-0 z-50 flex justify-center items-center bg-[#0000002f]">
        <div className="bg-[#FFFFFF] rounded-2xl w-full max-w-md m-2 py-6 px-6">
          <div className="flex justify-end cursor-pointer text-3xl" onClick={onclose}>
            x
          </div>
          <div className="flex justify-center items-center flex-col">
            <img src={logout} alt="" className='h-20 w-20' />
            <span className="mainhead">Logout</span>
            <span className="mainsub mt-3">
              Are you sure to log out your account?
            </span>
            <button className="cursor-pointer bg-[#D35C57] rounded-lg py-3 px-2 text-white w-1/2 mt-6" onClick={onclose}>
              Log Out
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Logout