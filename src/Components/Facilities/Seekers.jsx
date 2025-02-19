import React, { useRef, useEffect } from "react";
import { SeekerCardsText } from "../../Constants/SeekerCards/SeekerCards";
import gsap, { Power2 } from "gsap";
import { useGSAP } from "@gsap/react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Facilities = () => {
  const cards = useRef(null);
  const navigate = useNavigate();
  const setData = () => {
    navigate("/saylani/forms");
  };
  useGSAP(() => {
    gsap.from(cards.current, {
      x: -400,
      opacity: 0,
      duration: 0.7,
      ease: Power2.easeOut,
    });
  }, []);

  return (
    <div>
      <div ref={cards} className="flex flex-wrap justify-center gap-4 mt-20">
        {SeekerCardsText.map((item, index) => (
          <div key={index} className="card" onClick={() => setData()}>
            <h1 className="text-3xl text-[#8DC63F]">{item.heading}</h1>
            <i className="text-5xl text-[#0D6DB7]">{item.icon}</i>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facilities;
