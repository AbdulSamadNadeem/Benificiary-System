import React, { useEffect, useRef } from 'react'
import Finance from '../../Components/Charts/Finance/Finance'
import MoneyBar from '../../Components/Charts/Line/MoneyLine'
import TotalAids from '../../Components/Charts/Bar/TotalAids'
import Success from '../../Components/Charts/Doughnut/Success'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { getAlldata } from '../../API/Routehandlers'
import { useDispatch } from 'react-redux'
const AllStats = () => {
  const dispatch = useDispatch()
  const charts = useRef()
  useGSAP(()=>{
    gsap.from(charts.current , {
      opacity:0,
      y:50,
      duration:0.7
    })
  },[])
  const fetchalldata = async()=>{
    try{
            const response = await getAlldata('/getallseekers' ,dispatch )
            console.log(response)
    }catch(err){
             console.log(err)
    }
  }
  useEffect(()=>{
     fetchalldata()
  },[])
  return (
    <div>
        <Finance/>
        <div ref={charts} className='flex gap-8 items-center'>
        <MoneyBar/>
        <TotalAids/>
        <Success/>
        </div>
    </div>
  )
}

export default AllStats