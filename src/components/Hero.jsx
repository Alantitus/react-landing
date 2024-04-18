import React from 'react'
import {ReactTyped} from 'react-typed'

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2'>REACHING NEW LEVELS BY MASTERING COMPLEXITY</p>
        <h1 className='md:text-6xl sm:text-5xl text-4xl font-bold md:py-6 mt-2'>ENVISION IDEAS,</h1> <h1 className='md:text-6xl sm:text-5xl text-4xl font-bold  mt-1'>BRANDING,
          <ReactTyped strings={['DISTRIBUTION','DEVELOPMENT']} typeSpeed={120} backSpeed={40} loop/>
          </h1>
        <div>
        <button className='bg-[#00df9a] w-[200px] rounded-md py-3 mx-auto my-6 font-bold'>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
