import React, { useEffect, useRef } from "react";
import QRCode from "react-qr-code";
import { toPng } from "html-to-image";
import download from "downloadjs";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useDispatch, useSelector } from "react-redux";

const Qrcode = () => {
    const card = useRef(null)
    const QrData = useSelector((state)=>state.currentbenificairay)
    console.log(QrData)
    const downlaodCard = ()=>{
          if(card.current){
            toPng(card.current , {backgroundColor:"white"})
            .then((dataurl)=>{
                download(dataurl , 'Benficiary Card')
            })
            .catch((err)=>{
                console.error("Error generating image:", err);
            })
          }
    }
    useGSAP(()=>{
        const tl = gsap.timeline()
        tl.from(card.current , {
            y:-400,
            opacity:0,
            duration:0.8
        })
        tl.from(card.current.querySelectorAll('div') , {
            opacity:0,
            duration:0.8
        })
    },[])
 
  return (
    <div className=" flex flex-col items-center justify-center mt-20">
      <div ref={card} className="w-96 border border-[#8DC63F] flex flex-col items-center gap-6 p-4">
        <h1 className="text-3xl font-medium text-[#262626]">
          <span className="text-[#8DC63F]">SAYLANI</span> BENIFICIARY
        </h1>
        <div>
          <div className="w-32 h-32">
            <QRCode
              size={256}
              className="w-32 h-32 "
              value="hello"
              viewBox={`0 0 256 256`}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 w-80 text-left">
          <h1 className="text-2xl text-[#262626] underline">
            Name:<span className="text-[#0D6DB7]">{QrData.name}</span>
          </h1>
          <h1 className="text-2xl text-[#262626] underline">
            CNIC:<span className="text-[#0D6DB7]">{QrData.cnic}</span>
          </h1>
          <h1 className="text-2xl text-[#262626] underline">
            Address:
            <span className="text-[#0D6DB7]">
              {QrData.address}
            </span>
          </h1>
          <h1 className="text-2xl text-[#262626] underline">
            Phone:<span className="text-[#0D6DB7]">{QrData.phone}</span>
          </h1>
          <h1 className="text-2xl text-[#262626] underline">
            Purpose:<span className="text-[#0D6DB7]">{QrData.purpose}</span>
          </h1>
        </div>
      </div>
        <div className="mt-10">
          <button onClick={downlaodCard} className="w-48 h-10 bg-[#0D6DB7] text-xl font-normal text-white rounded-xl hover:scale-110 duration-200 cursor-pointer">Download Card</button>
        </div>
    </div>
  );
};

export default Qrcode;
