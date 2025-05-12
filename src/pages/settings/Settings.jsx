import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Heading from "../components/Heading";
import Aboutus from "./Aboutus";
import Faq from "./Faq";
import Privacypolicy from "./Privacypolicy";
import Terms from "./Terms";
import Modal from "./Modal";
import back from "./assets/backarrow.png";
import FaqModal from "./FaqModal";
import add from "../components/assets/add.png"
const Settings = () => {
  const [ActiveTab, setActiveTab] = useState("About");
  const [showModal, setShowModal] = useState(false);

  const request = [
    { name: "About Us", value: "About" },
    { name: "Privacy Policy", value: "Privacy" },
    { name: "Terms & Conditions", value: "Terms" },
    { name: "FAQ", value: "Faq" },
  ];

  const getButtonText = () => {
    switch (ActiveTab) {
      case "Terms":
        return "Add Terms & Conditions";
      case "Privacy":
        return "Add Privacy Policy";
      case "Faq":
        return "Add FAQ";
      default:
        return "Add About Us";
    }
  };

  const renderContent = () => {
    switch (ActiveTab) {
      case "Terms":
        return <Terms />;
      case "Privacy":
        return <Privacypolicy />;
      case "Faq":
        return <Faq />;
      default:
        return <Aboutus />;
    }
  };

  const renderModalContent = () => {
    switch (ActiveTab) {
      case "Terms":
        return <Modal />;
      case "Privacy":
        return <Modal />;
      case "Faq":
        return <FaqModal />;
      default:
        return <Modal />;
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row">
        <Navbar />
        <div className="flex-1">
          <Heading headingname={"All Requests"} />
          <div className="mainsec px-4 md:px-8 py-4">
            {/* buttons for Requests */}
            <div className="flex flex-col md:flex-row md:items-center justify-between flex-wrap gap-4 mb-4">
              <div className="flex flex-wrap gap-3 w-full md:w-auto">
                {request.map((item) => (
                  <button
                    key={item.value}
                    className={`rounded-xl border-[#E4E4E4] border p-3 cursor-pointer font-normal text-sm md:text-base w-full md:w-[180px] ${
                      ActiveTab === item.value
                        ? "bg-[#777E90] text-white"
                        : "bg-white text-black"
                    }`}
                    onClick={() => setActiveTab(item.value)}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setShowModal(true)}
                className="rounded-xl bg-black text-white px-4 py-3 cursor-pointer font-normal text-sm md:text-base  flex items-center justify-center"
              >
                {/* <span className="text-lg md:text-2xl mr-2">

                </span> */}
                <img src={add} alt="" className="w-3 h-3 mr-4" />
                {getButtonText()}
              </button>
            </div>

            {/* content */}
            <div className="flex-1 mb-5">{renderContent()}</div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-[#00000050] flex items-center justify-center z-50 p-4">
          <div className="bg-[#FAFAFA] p-6 rounded-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center mb-4">
              <img
                src={back}
                alt="Back"
                onClick={() => setShowModal(false)}
                className="cursor-pointer md:h-10 md:w-10 w-8 h-8"
              />
              <div className="flex-grow flex justify-center text-center">
                <h3 className="text-xl md:text-[28px] font-semibold">
                  {getButtonText().replace("Add ", "")}
                </h3>
              </div>
            </div>
            {renderModalContent()}
            <div className="flex justify-center items-center mt-6">
              <button
                className="bg-[#D35C57] text-white px-6 py-2 md:px-8 md:py-3 rounded-xl w-full md:w-[40%] text-lg font-medium cursor-pointer"
                onClick={() => setShowModal(false)}
              >
                <h3>{getButtonText().replace("Add ", "")}</h3>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Settings;
