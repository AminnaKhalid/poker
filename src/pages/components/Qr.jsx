import React from "react";
import Navbar from "./Navbar";
import Heading from "./Heading";
import qr from "./assets/Qr.png";
const Qr = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <Navbar />
        <div className="flex-1">
          <Heading headingname={"Check in QR"} />
          <div className="mainsec">
            {/* card section of qr in the middle */}
            <div className="flex justify-center items-center">
              <div className="dashcard m-6">
                <img src={qr} alt="" className="w-sm h-sm" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Qr;
