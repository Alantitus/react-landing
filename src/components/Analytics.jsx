import React from 'react'
import Laptop from '../assets/laptop.jpg'
 const Analytics = ()=> {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={Laptop}/>
       
        <div className='flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit maxime quo aliquid fugiat et cumque. Nobis deserunt, est adipisci asperiores ea deleniti accusantium dignissimos explicabo vel eos sapiente rem officia.</p>
            <button className='bg-[#000] w-[200px] rounded-md py-3 mx-auto my-6 font-bold text-[#00df9a] md:mx-0'>Click Here</button>

        </div>
    </div>
    </div>
  )
}

export default Analytics
