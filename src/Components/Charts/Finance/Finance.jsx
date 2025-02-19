import React, { useRef } from "react";
import { BiDollar } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
import { PiStudent } from "react-icons/pi";
import {
  MdOutlineSick,
  MdHealthAndSafety,
  MdOutlineAccountBalance,
} from "react-icons/md";
import { RiMentalHealthFill } from "react-icons/ri";
import { FaBowlFood } from "react-icons/fa6";
import { FaPerson, FaPersonPraying } from "react-icons/fa6";
import { GiArtificialIntelligence } from "react-icons/gi";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useSelector } from "react-redux";
const Finance = ({ type }) => {
  const cards = useRef(null);
  useGSAP(() => {
    gsap.from(cards.current.querySelectorAll("div"), {
      opacity: 0,
      y: 50,
      duration: 0.7,
      stagger: 0.2,
      ease: "power2.out",
    });
  }, []);
  const data = useSelector((state)=>state?.allbenificiaries);
  return (
    <div ref={cards} className="flex gap-6 mt-10 ml-4">
      <div>
        <div className="w-64 h-36 rounded-lg border border-gray-400">
          <div>
            <h1 className="text-4xl font-medium text-[#0D6DB7]">All Funds</h1>
            <div className="flex items-center gap-3 mt-5">
              <BiDollar className="text-5xl text-[#262626]" />
              <h1 className="text-4xl font-medium text-[#262626]">560000</h1>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="w-64 h-36 rounded-lg border border-gray-400">
          <div>
            <h1 className="text-3xl font-medium text-[#0D6DB7]">
              {type === "health"
                ? "All Patients"
                : type === "food"
                ? "Hunger-Stricken"
                : type === "edu"
                ? "Students"
                : "All Benificiaries"}
               
            </h1>

            <div className="flex items-center gap-3 mt-5">
              {type === "health" ? (
                <MdOutlineSick className="text-5xl text-[#262626]" />
              ) : type === "food" ? (
                <FaBowlFood className="text-5xl text-[#262626]" />
              ) : type === "edu" ? (
                <PiStudent className="text-5xl text-[#262626]" />
              ) : (
                <BsPeople className="text-5xl text-[#262626]" />
              )}
              <h1 className="text-4xl font-medium text-[#262626]"> {
                  data?.length
                }</h1>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="w-64 h-36 rounded-lg border border-gray-400">
          <div>
            <h1 className="text-3xl font-medium text-[#0D6DB7]">
              {type === "health"
                ? "Under Treatment"
                : type === "food"
                ? "Beggars"
                : type === "edu"
                ? "IT"
                : "Students"}
            </h1>
            <div className="flex items-center gap-3 mt-5">
              {type === "health" ? (
                <RiMentalHealthFill className="text-5xl text-[#262626]" />
              ) : type === "food" ? (
                <FaPersonPraying className="text-5xl text-[#262626]" />
              ) : type === "edu" ? (
                <GiArtificialIntelligence className="text-5xl text-[#262626]" />
              ) : (
                <PiStudent className="text-5xl text-[#262626]" />
              )}
              <h1 className="text-4xl font-medium text-[#262626]">{data?.length - 1}</h1>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="w-64 h-36 rounded-lg border border-gray-400">
          <div>
            <h1 className="text-3xl font-medium text-[#0D6DB7]">
              {type === "health"
                ? "Pending Patients"
                : type === "food"
                ? "Others"
                : type === "edu"
                ? "Accounting"
                : "Needy"}
            </h1>
            <div className="flex items-center gap-3 mt-5">
              {type === "health" ? (
                <MdHealthAndSafety className="text-5xl text-[#262626]" />
              ) : type === "food" ? (
                <FaPerson className="text-5xl text-[#262626]" />
              ) : type === "edu" ? (
                <MdOutlineAccountBalance className="text-5xl text-[#262626]" />
              ) : (
                <BsPeople className="text-5xl text-[#262626]" />
              )}
              <h1 className="text-4xl font-medium text-[#262626]">{data?.length - 3}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finance;
