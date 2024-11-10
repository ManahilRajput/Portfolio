import React from 'react'
import Button from './Button'
import Image from 'next/image'

const About = () => {
  return (
    <section className='max-container padding-container gap-20 py-10 pb-32 md:gap-28 lg:py-20 bg-[#b5d6cb]'>
      <div className='text-center text-container bold-18 uppercase tracking-[1rem] text-green-800 pb-20'>ABOUT</div>
      <div className='flex flex-col gap-20 md:gap-28 xl:flex-row'>
        <div className='flex-1 flexCentre flex-col m-auto'>
          <p className='mb-8 bg-[#8fd8c0] rounded-xl'>
            <span className='font-extrabold '>"With a diverse background as a front-end developer, teacher, and programmer,</span> I am committed to crafting seamless and engaging web experiences. My journey in tech began with a strong interest in coding and design, which has since grown into a fulfilling career. As a front-end developer, I specialize in building responsive, intuitive user interfaces using modern frameworks and tools, ensuring that each project is as functional as it is visually appealing. My teaching experience allows me to break down complex concepts for students and team members alike, fostering an environment of learning and growth.
          </p>
          <div className='hover:text-teal-600 '>
          <Button
            type='button'
            title='Read more'
            icon='\read more.svg'
            variat='btn_dark_rounded'
            />
       </div>
        </div>
        <div className='flex-1 flexCenter'>
          <Image src='/girl2.png' alt='about' height={333} width={333} className='w-auto rounded-full shadow-sm'
          />
        </div>
      </div>
    </section>
  )
}

export default About