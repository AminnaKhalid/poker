  import React, { useState } from "react";
  import Navbar from "../components/Navbar";
  import Heading from "../components/Heading";
  import profile from "./assets/profile1.png";
  import star from "./assets/star.png";
  import line from "./assets/line.png";
  import date from "./assets/date.png";
  import navigate from "./assets/naviagte.png";
  import complete from "./assets/complete.png";
  import upcoming from "./assets/upcoming.png";
  import active from "./assets/active.png";
  import calendar from "./assets/Calendar.png";
  import seeall from "./assets/seeallarrow.png";
  import pdf from "./assets/pdf.png";
  import clock from "./assets/time.png";
  import slider from "./assets/Slider.png";
  import SigninModal from "./SigninModal";
  import DocumentModal from "./DocumentModal";
import add from "../components/assets/add.png"
  const Userdetails = () => {
    const data = [{ image: complete }, { image: upcoming }, { image: active }];

    const datacard = [
      { time: "10:00 am", break: "Dinner Break", hours: "Working Hours" },
      { time: "10:00 am", break: "Dinner Break", hours: "Working Hours" },
      { time: "10:00 am", break: "Dinner Break", hours: "Working Hours" },
    ];

    const eventdata = [
      { data: "Company :", name: "PokerStars" },
      { data: "Country :", name: "Monaco" },
      { data: "City :", name: "MonteCarlo" },
      { data: "Salary :", name: "$ 123" },
      { data: "Position :", name: "Dealer Coordinator" },
      { data: "Food :", name: "No" },
      { data: "Uniform :", name: "Refer to the invitation" },
      { data: "Tips :", name: "Voluntary tips" },
      { data: "Accomodation :", name: "$90 per working day + $90" },
      { data: "Working Dates :", name: "Not Assigned" },
      { data: "Travel :", name: "No travel expenses" },
      { data: "Inivitation Expiry Date :", name: "15/02/2025 " },
      { data: "Arrival Date :", name: "15/02/2025 " },
      { data: "Departure Date :", name: "15/02/2025 " },
      { data: "Start Date :", name: "15/02/2025 " },
      { data: "End Date :", name: "15/02/2025 " },
      { data: "Venue Address :", name: "Sporting Monte-Carlo " },
    ];

    // data for documents

    const documentdata = [
      { id: 1, time: "10:00 AM", date: "05:00 PM", image: pdf },
      { id: 2, time: "10:00 AM", date: "05:00 PM", image: pdf },
      { id: 3, time: "10:00 AM", date: "05:00 PM", image: pdf },
    ];

    // expense data
    const expensedata = [
      { id: 1, name: "Travel", amount: "$ 220" },
      { id: 2, name: "Food", amount: "$ 54" },
      { id: 3, name: "Drinks", amount: "$ 46" },
    ];

    // for signinmodal
    const [openSignIn, setOpenSignIn] = useState(false);
    const [openDocument, setOpenDocument] = useState(false)
    return (
      <div className="flex flex-col md:flex-row">
        <Navbar />
        <div className="flex-1">
          <Heading headingname={"User Details"} />
          <div className="mainsec">
            {/* profile section */}
            <div className="flex justify-between flex-col lg:flex-row dashcard mt-0 items-center">
              {/* profile */}
              <div className="flex flex-col md:flex-row justify-center items-center">
                <div className="flex">
                  <img src={profile} alt="" className="w-16 h-16 mr-3" />
                  <div className="flex flex-col justify-center">
                    <span className="font-medium text-xl md:text-2xl">
                      Ralph Edwards
                    </span>
                    <span className="font-normal text-xs md:text-lg text-gray-400 ">
                      alma.lawson@example.com
                    </span>
                  </div>
                </div>
                <div className=" border-[#0000001A] border-2 rounded-lg bg-gray-50 ml-4 grid grid-cols-1 lg:grid-cols-3 px-3 py-3 mt-4 md:mt-0">
                  <div className="lg:border-r border-b border-[#E7E2DD]  p-2 mr-2 md:border-b-0">
                    <span className="userdetail">Hours Work With Gps</span>
                    <h3 className="userfigure">21,200</h3>
                  </div>
                  <div className="lg:border-r border-b p-2 border-[#E7E2DD] md:border-b-0">
                    <span className="userdetail">Hours Work With Gps</span>
                    <h3 className="userfigure">21,200</h3>
                  </div>
                  <div className="p-2">
                    <span className="userdetail">Hours Work With Gps</span>
                    <h3 className="userfigure">21,200</h3>
                  </div>
                </div>
              </div>

              {/* buttons */}
              <div className="flex flex-col space-y-2 lg:w-1/6 w-full mt-6 lg:mt-0">
                <button className="px-3 py-2 bg-[#EAEAEA] rounded-lg font-normal cursor-pointer">
                  Suspend
                </button>
                <button className="px-3 py-2 bg-[#FFD7D7] rounded-lg font-normal cursor-pointer">
                  Blacklist
                </button>
              </div>
            </div>

            {/* two sections for details */}
            <div className="dashcard grid grid-cols-1 lg:grid-cols-2 gap-2">
              <div>
                {data.map((items) => (
                  <div className="dashcard bg-[#FAFAFA] border-[#0000001A] border-[1px]">
                    <div className="flex space-x-3 justify-between">
                      <div className="flex flex-col">
                        <div className="flex space-x-3">
                          <img
                            src={line}
                            alt=""
                            className="h-7 hidden md:block"
                          />
                          <h3 className="font-medium text-xl">
                            EPT Monte Carlo 2025
                          </h3>
                          <img src={star} alt="" className="h-7 w-7" />
                        </div>
                        <div className="flex justify-start items-center my-3">
                          <img src={date} alt="" className="w-5 h-5 mr-3" />
                          <span className="text-sm font-normal text-gray-500">
                            23/3/45
                          </span>
                        </div>
                        <div className="flex justify-start items-center">
                          <img src={navigate} alt="" className="w-5 h-5 mr-3" />
                          <span className="text-sm font-normal text-gray-500">
                            2715 Ash Dr. San Jose, South Dakota 83475
                          </span>
                        </div>
                      </div>
                      <img
                        src={items.image}
                        alt=""
                        className="w-8 h-full object-cover hidden md:block"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col mx-3 my-4">
                {/* signin signout history */}
                <div>
                  <div className="flex flex-col md:flex-row justify-between items-left md:items-center">
                    <span className="mainhead">Sign In and Out History</span>
                    <div
                      className="flex items-center md:justify-center cursor-pointer "
                      onClick={() => setOpenSignIn(true)}
                    >
                      <span className="font-medium text-lg">See All</span>
                      <img
                        src={seeall}
                        alt=""
                        className="h-7 w-7 ml-3 cursor-pointer"
                      />
                    </div>
                  </div>

                  {/* signinmodal */}
                  {openSignIn && (
                    <SigninModal onClose={() => setOpenSignIn(false)} />
                  )}
                  {/* for card */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {datacard.map((items) => (
                      <div className="flex flex-col">
                        <div className="flex items-center my-2">
                          <span className="mainsub text-sm font-medium">
                            12/02/25
                          </span>
                          <span className="flex-grow border-t-2 border-gray-300 ml-4"></span>
                        </div>

                        {/* for card */}
                        <div className="dashcard p-4 space-y-4 mt-1">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col">
                              <span className="maintitle">{items.time}</span>
                              <span className="mainsub">Check in</span>
                            </div>
                            <div className="flex flex-col items-left">
                              <span className="maintitle">{items.time}</span>
                              <span className="mainsub">Check out</span>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col">
                              <span className="maintitle">No</span>
                              <span className="mainsub">{items.break}</span>
                            </div>
                            <div className="flex flex-col items-left">
                              <span className="maintitle">7 hours</span>
                              <span className="mainsub">{items.hours}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* event details */}
                <div className="flex flex-col">
                  <span className="mainhead my-3">Event Details</span>
                  <div className="dashcard border-2 border-[#0000001A] mt-1">
                    <div className="grid gap-4">
                      {eventdata.map((items) => (
                        <div className="flex flex-col">
                          <span className="mainsub">{items.data}</span>
                          <span className="maintitle">{items.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* documents */}
                <div className="flex flex-col my-3">
                  <div className="flex justify-between flex-col md:flex-row items-center ">
                    <span className="mainhead">Documents</span>
                    <button
                      className="bg-[#212325] text-white px-5 py-3 rounded-xl cursor-pointer flex justify-center items-center"
                      onClick={() => setOpenDocument(true)}
                    >
                      <img src={add} alt="" className="w-3 h-3 mr-2"/> Add Documents
                    </button>
                  </div>
                  {/* for document modal */}
                  {openDocument && (
                    <DocumentModal onclose={() => setOpenDocument(false)} />
                  )}
                  {/* card section */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {documentdata.map((items) => (
                      <div className="dashcard p-0">
                        <div className="flex border-b border-gray-300 items-center font-normal text-lg p-3">
                          <img src={calendar} alt="" className="w-6 h-6 mr-2" />
                          <span>Statement of charges</span>
                        </div>

                        <div className="flex justify-between items-center flex-col-reverse xl:flex-row py-3 lg:px-2 ">
                          <div className="flex items-center my-2 xl:my-0">
                            <div className="flex flex-col items-center mr-4">
                              <img
                                src={clock}
                                alt="Top Icon"
                                className="h-8 w-8"
                              />
                              <div className="w-px bg-gray-300 h-12"></div>
                              <img
                                src={clock}
                                alt="Bottom Icon"
                                className="h-8 w-8"
                              />
                            </div>

                            <div className="flex flex-col text-left space-y-2">
                              <div>
                                <h2 className="mainsub">Time</h2>
                                <span className="maintitle">{items.time}</span>
                              </div>
                              <div>
                                <h2 className="mainsub">Upload Date</h2>
                                <span className="maintitle">{items.date}</span>
                              </div>
                            </div>
                          </div>

                          <div className="border border-gray-200 p-6 rounded-md flex items-center justify-center">
                            <img
                              src={items.image}
                              alt="PDF Icon"
                              className="w-14 h-14"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* expense details */}
                <div className="flex flex-col">
                  <span className="mainhead">Expenses Details</span>
                  {/* table for details */}
                  <table className="min-w-full border border-gray-300 rounded-xl border-collapse text-center mt-3">
                    <thead className=" ">
                      <tr>
                        <th className="px-4 py-2 border border-gray-300 mainsub">
                          Title
                        </th>
                        <th className="px-4 py-2 border border-gray-300 mainsub">
                          Amount
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {expensedata.map((items) => (
                        <tr>
                          <td className="px-4 py-2 border border-gray-300 maintitle font-normal">
                            {items.name}
                          </td>
                          <td className="px-4 py-2 border border-gray-300 maintitle font-normal">
                            {items.amount}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* add notes for event  */}
                <div className="flex flex-col my-3">
                  <span className="mainhead ">Add Notes For Event</span>
                  <div className="border-[2px] border-gray-300 rounded-xl dashcard flex justify-between">
                    <span className="mainsub text-black">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Blanditiis itaque sunt nisi dolores rem tempora consequatur,
                      velit eum accusamus nihil quos. Architecto ex minima
                      expedita doloremque omnis quidem qui mollitia sapiente
                      maxime quaerat quisquam iusto magnam ullam, dolores aperiam
                      eligendi. Lorem ipsum dolor sit amet consectetur adipisicing
                      elit. Veniam, perferendis! Lorem, ipsum dolor sit amet
                      consectetur adipisicing elit. Sed, officiis.
                    </span>
                    <img
                      src={slider}
                      alt=""
                      className="h-32 w-6 ml-3 hidden lg:block"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  };

  export default Userdetails;
