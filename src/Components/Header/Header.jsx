import React, { useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const Header = ({ type }) => {
  const container = useRef(null);
  const links = useRef(null);
  const btns = useRef(null);
  const navigate = useNavigate();
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(container.current, {
      y: -200,
      duration: 1,
    }),
      tl.from(links.current.querySelectorAll(".navlink"), {
        opacity: 0,
        duration: 0.5,
        stagger: 0.3,
      }),
      tl.from(btns.current, {
        y: -100,
        duration: 0.6,
      });
  }, []);
  return (
    <div
      ref={container}
      className="flex items-center p-4 gap-30 border border-gray-100 shadow-md"
    >
      <div className="w-52">
        <img
          src="/logo_saylaniwelfareusa.22bf709605809177256c.png"
          className="w-52"
        />
      </div>
      <div>
        <ul ref={links} className="flex gap-10 text-gray-400">
          <NavLink className="navlink" to={'/'}>Home</NavLink>
          <NavLink className="navlink" to={"https://saylaniwelfareusa.com/"}>About</NavLink>
          <NavLink className="navlink" to={"https://saylaniwelfareusa.com/"}>Service</NavLink>
          <NavLink className="navlink" to={"https://saylaniwelfareusa.com/"}>Media</NavLink>
          <NavLink className="navlink" to={"https://saylaniwelfareusa.com/"}>Contact</NavLink>
        </ul>
      </div>
      <div className="flex gap-8" ref={btns}>
        {type === "recep" || type==='dash' ? (
          <>
            <button
              onClick={() => navigate("/logout")}
              className="w-48 h-10 bg-[#0D6DB7] text-xl font-normal text-white rounded-xl hover:scale-110 duration-200 cursor-pointer ml-20"
            >
              LOGOUT
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => navigate("/saylani/signup")}
              className="w-48 h-10 bg-[#0D6DB7] text-xl font-normal text-white rounded-xl hover:scale-110 duration-200 cursor-pointer"
            >
              SIGNUP
            </button>
            <button className="w-48 h-10 bg-[#8DC63F] text-xl font-normal text-white rounded-xl hover:scale-110 duration-200 cursor-pointer">
              SIGNIN
            </button>
          </>
        )}
      </div>
    </div>
  );
};
export default Header;
