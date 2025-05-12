import React from 'react'
import Heading from './Heading'
import Navbar from './Navbar';
const Dashboard = () => {

    // mapping random data to cards
    const data = [
      { title: "Total Users", subtitle: "5,503,420" },
      { title: "Active Users", subtitle: "32,546" },
      { title: "Blocked Users", subtitle: "32,546" },
      { title: "Premium users", subtitle: "1,453,46" },
      { title: "Total Events", subtitle: "140" },
      { title: "Blocked Users", subtitle: "32,546" },
      { title: "Premium users", subtitle: "1,453,46" },
      { title: "Total Events", subtitle: "140" },
    ];
  return (
    <>
      <div className=" flex flex-col md:flex-row">
        <Navbar />
        <div className="flex-1">
          <Heading headingname={"Dashboard"} />
          <div className="mainsec ">
            <div className="flex flex-col">
              {/* profile section */}
              <span className="font-medium text-2xl md:text-4xl">
                Welcome back, Scott J.
              </span>
              <div className="md:flex-row flex flex-col my-2 ">
                <span className="font-medium text-sm">
                  Sunday, 23 June 2024.
                </span>
                <span className="font-[400] text-[#8E8F96] text-sm">
                  Here is a quick snapshot of the overall business
                </span>
              </div>
            </div>
            {/* Cards section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.map((item, index) => (
                <div key={index} className="dashcard flex flex-col">
                  <span className="dash_title">{item.title}</span>
                  <span className="dash_subtitle">{item.subtitle}</span>
                </div>
              ))}
            </div>

         
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard