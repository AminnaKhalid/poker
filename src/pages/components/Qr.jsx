import React from "react";
import Navbar from "./Navbar";
import Heading from "./Heading";
import qr from "./assets/Qr.png";

const Qr = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row min-h-screen">
        <Navbar />
        <div className="flex-1 flex flex-col">
          <Heading headingname={"Check in QR"} />
          <div className="mainsec flex-1 flex justify-center items-center">
            {/* card section of qr in the middle */}
            <div className="flex justify-center items-center w-full">
              <div className="dashcard m-6">
                <img
                  src={qr}
                  alt="QR Code"
                  className="w-auto h-auto max-w-xs md:max-w-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Qr;
