import React from 'react'
import { useNavigate } from 'react-router'

const Logout = () => {
  const navigate = useNavigate()
  const Logout = ()=>{
        localStorage.clear()
        navigate('/')
  }
  return (
    <div className='flex flex-col justify-center items-center h-[700px]'>
        <h1 className='text-4xl font-normal text-[#8DC63F]'>Want To Logout!</h1>
        <button onClick={()=>Logout()} className='w-96 bg-[#0D6DB7] h-12 rounded-md text-xl font-normal text-white cursor-pointer'>LOGOUT</button>
    </div>
  )
}

export default Logout