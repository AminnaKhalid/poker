import React from "react";
import add from "./assets/adddocument.png";
import back from "./assets/backarrow.png";
const DocumentModal = ({ onclose }) => {
  return (
    <>
      <div className="fixed inset-0 bg-[#00000030] z-50 flex justify-center items-center">
        <div className="bg-[#FAFAFA] w-full max-w-xl max-h-[90vh] p-4 m-2 rounded-xl overflow-y-auto">
          <div className="flex">
            <img
              src={back}
              alt=""
              className="h-8 w-8 cursor-pointer"
              onClick={onclose}
            />
            <span className="mainhead mx-auto">Add Document</span>
          </div>
          <div className="m-4 flex flex-col justify-center space-y-3 ">
            <input
              type="text"
              className="bg-white border border-[#E4E4E4] py-2 px-3 rounded-lg"
              placeholder="Add Title"
            />

            <div className="h-60 border border-[#E4E4E4] rounded-lg flex justify-center items-center bg-white mb-8 ">
              <img src={add} alt="" className="h-15 w-24 object-cover" />
            </div>
            <button onClick={onclose} className="cursor-pointer bg-[#D35C57] text-white w-1/2 mx-auto py-3 px-2 rounded-lg ">
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DocumentModal;
