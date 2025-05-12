import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logopoker from "./assets/logopoker.png";
import home from "./assets/lighthome.png";
import manage from "./assets/lightmanage.png";
import qr from "./assets/lightqr.png";
import request from "./assets/lightrequest.png";
import setting from "./assets/lightsetting.png";
import logout from "./assets/logout.png";
import { useLocation, Link } from "react-router-dom";
import darkhome from "./assets/darkhome.png";
import darkmanage from "./assets/darkmanage.png";
import darkrequest from "./assets/darkrequest.png";
import darkqr from "./assets/darkqr.png";
import Logout from "./Logout";

const Navbar = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const [isOpen, setIsOpen] = useState(false);

  const navitems = [
    {
      icon: home,
      darkicon: darkhome,
      path: "/",
      matchPaths: ["/"],
    },
    {
      icon: manage,
      darkicon: darkmanage,
      path: "/manage",
      matchPaths: ["/manage", "/manage/*"],
    },
    {
      icon: qr,
      darkicon: darkqr,
      path: "/qr",
      matchPaths: ["/qr"],
    },
    {
      icon: request,
      darkicon: darkrequest,
      path: "/request",
      matchPaths: ["/request", "/request/*"],
    },
    {
      icon: setting,
      darkicon: setting,
      path: "/setting",
      matchPaths: ["/setting"],
    },
  ];

  const isActive = (item) => {
    return item.matchPaths.some(
      (matchPath) =>
        pathname === matchPath ||
        (matchPath.endsWith("*") &&
          pathname.startsWith(matchPath.replace("*", "")))
    );
  };

  const [open , setOpen] = useState(false)

  return (
    <>
      {/* Mobile Hamburger Button */}
      <button
        className="md:hidden fixed top-2 left-4 z-50 p-2 bg-[#FFEAEA] rounded-lg "
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaBars className="text-2xl text-red-500" />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-0 md:relative w-[200px] md:w-[140px] bg-[#FFEAEA] flex flex-col items-center py-2 justify-between transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        } z-40 h-screen`}
      >
        {/* Mobile Close Button */}
        {/* <button
          className="md:hidden absolute top-4 right-4 p-2"
          onClick={() => setIsOpen(false)}
        >
          <FaTimes className="text-xl text-red-500" />
        </button> */}

        <div className="flex flex-col items-center h-full justify-between">
          <div>
            <img src={logopoker} alt="Logo" className="w-24 h-24 mt-4" />
            <div className="flex flex-col items-center mt-8">
              {navitems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="my-3"
                >
                  <img
                    src={isActive(item) ? item.darkicon : item.icon}
                    alt={`icon-${index}`}
                    className="w-14 h-14 hover:scale-110 transition-transform"
                  />
                </Link>
              ))}
            </div>
          </div>
          <div className="mb-8">
            <img
              src={logout}
              alt="Logout"
              className="w-14 h-14 cursor-pointer hover:scale-110 transition-transform"
              onClick={() => setOpen(true)}
            />
          </div>

          {/* logoutmodal */}
        </div>
      </div>

      {open && <Logout onclose={() => setOpen(false)} />}
    </>
  );
};

export default Navbar;
