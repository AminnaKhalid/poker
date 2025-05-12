import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Heading from '../components/Heading'
import Pagination from '../components/Pagination'
import Listrequest from "./Listrequest"
import Gpsregistration from "./Gpsregistration"
const Requests = () => {
  const [ActiveTab, setActiveTab] = useState("List")
  const request = [
    { name: "Go List Request", value:'List' },
    { name: "GPS Registration", value:'GPS' },
    { name: "View Logs", value:"Logs" },
  ];

 const  renderContent = ()=>{
  switch (ActiveTab) {
    case "GPS":
      return <Gpsregistration />;
  
      case "Logs":
        return <Gpsregistration />;
    default:
      return <Listrequest />;
  }
 }
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <Navbar />
        <div className="flex-1 flex flex-col">
          <Heading headingname={"All Requests"} />
          <div className="mainsec p-4 flex-1 pb-20 space-y-4">
            {/* buttons for Requests */}
            <div className="row space-x-3 ">
              {request.map((item) => (
                <button
                  key={item.value}
                  className={`rounded-xl border-[#E4E4E4] border-1 p-3 cursor-pointer md:w-[150px] font-normal text-sm md:text-[16px] w-[100px] ${
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

            {/* content */}
            <div className="flex-1"> {renderContent()} </div>
          </div>

          {/* Pagination at bottom */}
          <div className="w-full ">
            <Pagination
              totalItems={153}
              itemsPerPageOptions={[5, 10, 25, 50]}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Requests