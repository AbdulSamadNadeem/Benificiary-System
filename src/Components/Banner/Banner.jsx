import React, { useEffect, useRef } from 'react'
import gsap, { Power1, Power2 } from 'gsap'
import  {TextPlugin}  from "gsap/TextPlugin";
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(TextPlugin)
const Banner = () => {
    const phrases = ["Health", "Education", "Finance"];
    const right = useRef()
    const left = useRef()
    useGSAP(()=>{
        gsap.from(right.current , {
            opacity:0,
            duration:1.2
        }),
        gsap.from(left.current , {
            x:-500,
            duration:0.8
        })

    },[])
    useEffect(() => {
        gsap.to('#cursor' , {
            opacity:0,
            ease:Power2.easeInOut,
            repeat:-1,
            duration:0.5
        })
        
        let timeline = gsap.timeline({repeat : -1})
        phrases.forEach(words =>{
            let tl = gsap.timeline()
            tl.to('#text' ,{
                duration: 1.5,
                text:words,
                yoyo : true , 
                repeat:1
            })
            timeline.add(tl)
        })
    }, []);
  return (
    <div className='flex items-center'>
    <div ref={left}  className='w-[650px] flex flex-col gap-6 p-5 mt-20'>
        <div>
            <h1 className='text-4xl font-medium text-[#262626]'>
                WELCOME TO <span className='text-[#8DC63F]'>SAYLANI</span> WELFARE <br /> NON-GOVERNMENT <br /> ORGANIZATION IN PAKISTAN
            </h1>
        </div>
        <div>
            <h1 className='text-3xl font-medium text-[#262626]'>THE LARGEST NGO OFFERING <span id='text' className='text-blue-400'></span><span id='cursor' className='text-4xl'>|</span></h1>
        </div>
        <div className='text-xl text-[#262626]'>
        Saylani Welfare is on the ground and already working with local communities to assess how best to support underprivileged families in more than 63 areas of day to day lives.
        </div>
    </div>
    <div ref={right}  className='w-1/2  p-5 mt-20 flex flex-col gap-10 items-center'>
      <div  className='flex gap-40'>
      <div className='w-40 h-40  rounded-full'>
           <img src="/img1.jpg" alt="" className='w-full h-full rounded-full object-cover' />
       </div>
       <div className='w-60 h-60  rounded-full'>
           <img src="/im2.png" alt="" className='w-full h-full rounded-full object-cover' />
       </div>
      </div>
       <div  className='flex gap-40'>
       <div className='w-56 h-56  rounded-full'>
           <img src="/img2.jpg" alt="" className='w-full h-full rounded-full object-cover'  />
       </div>
       <div className='w-48 h-48  rounded-full'>
           <img src="/img4.jpg" alt="" className='w-full h-full rounded-full object-cover' />
       </div>
       </div>
    </div>
    </div>
  )
}

export default Banner