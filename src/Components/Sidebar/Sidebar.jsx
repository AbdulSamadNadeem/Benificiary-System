import React, { useEffect, useRef, useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { IoIosStats, IoMdHome } from "react-icons/io";
import { MdOutlineAnalytics  } from "react-icons/md";
import { Outlet } from "react-router";
import Header from "../Header/Header";
import { CgSidebarOpen } from "react-icons/cg";

import gsap from 'gsap'
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const container = useRef(null)  
  useEffect(()=>{
      gsap.to(container.current , {
        left:0,
        duration:1
      })  
  },[])
  return (
    <>
      <Header type={"dash"} />
      <div className="flex">
        <div ref={container} className="flex flex-col gap-40 w-40 h-[805px] bg-[#F1F2F7] border-x border-gray-400 fixed -left-full">
          <div className="cursor-pointer flex flex-col gap-8 mt-10">
            <h1 className="text-xl font-light text-[#0D6DB7]">Menu</h1>
            <div className="flex gap-2 items-center">
              <IoMdHome className="text-4xl text-[#0D6DB7] hover:scale-110 duration-200" />
              <NavLink to={'/saylani/dashboard'}><h1 className="text-2xl hover:text-[#8DC63F] duration-100 font-light">
                Home
              </h1></NavLink>
            </div>
            <div>
      <div 
        className="flex gap-2 items-center cursor-pointer" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <MdOutlineAnalytics className="text-4xl text-[#0D6DB7] hover:scale-110 duration-200" />
        <h1 className="text-2xl hover:text-[#8DC63F] duration-100 font-light">
          Analytics
        </h1>
      </div>
      {isOpen && (
        <div className="ml-6 mt-2 space-y-1">
          <NavLink to="/saylani/dashboard/health" className="block px-4 py-2 hover:text-[#8DC63F]">Health</NavLink>
          <NavLink to="/saylani/dashboard/education" className="block px-4 py-2 hover:text-[#8DC63F]">Education</NavLink>
          <NavLink to="/saylani/dashboard/food" className="block px-4 py-2 hover:text-[#8DC63F]">Food</NavLink>
        </div>
      )}
    </div>
            <div className="flex gap-2 items-center">
              <IoIosStats className="text-4xl text-[#0D6DB7] hover:scale-110 duration-200" />
              <NavLink to={'/saylani/dashboard/stats'}><h1 className="text-2xl hover:text-[#8DC63F] duration-100 font-light">
                Stats
              </h1></NavLink>
            </div>
          </div>
          <div className="cursor-pointer">
            <h1 className="text-xl font-light text-[#0D6DB7]">Others</h1>
            <div className="flex gap-2 items-center mt-6">
              <BiLogOut className="text-4xl text-[#0D6DB7] hover:scale-110 duration-200" />
              <NavLink to={'/saylani/dashboard/logout'}>
              <h1 className="text-2xl hover:text-red-600 duration-100 font-light">
                Logout
              </h1>
              </NavLink>
              
            </div>
          </div>
        </div>
        <div className="flex-1 ml-40">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
