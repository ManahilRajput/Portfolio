"use client"
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import Button from './Button'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className='max-container padding-container flex flex-col flexCentre gap-20 py-10 pb-32 md:gap-28 lg:py-20 lg:flex-row'>
      <span className='max-container absolute top-64 left-44 h-[144px] w-[777px] bg-teal-800 rounded-full shadow-lg blur-[6rem] -z-10'></span>
      
      {/*left*/}
      <div className='relative z-20 flex flex-1 flex-col pt-16'>
        <h4 className='bold-20'>HELLO,</h4>
        <h1 className='bold-48 lg:bold-64 relative'>I Am Manahil Khursheed Alam</h1>
        <h2 className='bold-28 lg:bold-32 text-[1.8rem] capitalize'>
          A{' '}
        <span>
          <Typewriter
            words={['Front End Developer', 'Programmer', 'Teacher', 'Project Manager']}
            loop={true}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
          </span> 
           </h2>
           <p className='regular-16 max-w-[555px] my-4'>"With a strong foundation in modern web technologies and a dedication to continuous learning, I bring both technical expertise and a creative approach to each project. My experience as a teacher enables me to break down complex concepts, while my programming background drives efficient, scalable solutions. I'm excited to collaborate, innovate, and inspire through coding and design"</p>
           <div className='flexStart gap-8 pt-6 hover:text-green-800'>
            <Button
            type='button'
            title='Download CV'
            icon='https://www.svgrepo.com/show/425975/download.svg'
            variat='btn_dark_rounded'
            /></div>
           <div className='flexStart gap-8 pt-6 hover:text-green-800'>
           
            <Button
            type='button'
            title='Contact Me'
            icon='https://www.svgrepo.com/show/362402/arrow-right-bold.svg'
            variat='btn_white_rounded'
            />
           </div>
      </div>

      {/*RIGHT*/}
      <div className='flex flex-1 xl:flexEnd'>
        <Image src='/girl.png' alt='girl' width={400} height={400} className='w-auto rounded-l-3xl shadow-sm' />
      </div>

    </section>
          
  )
}

export default Hero