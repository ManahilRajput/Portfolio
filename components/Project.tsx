import React from 'react'
import Image from 'next/image'
import Button from './Button'
import { PROJECT } from '@/constants'

const Project = () => {
  return (
    <section className='max-container padding-container gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row bg-[#d5ddda]'> 
    <div className='text-center bold-18 uppercase tracking-[1rem] text-green-800 pb-20'>Projects</div>
    <ul className='mt-12 grid gap-14 md:grid-cols-2 xl:grid-cols-3 w-[95%] m-auto '>
      {
        PROJECT.map((project)=>(
          <ProjectItem
          key={project.title}
          imgURL={project.ImgURL}
          title={project.title}
          description={project.description}
          />
        ))
      }
    </ul>
    </section>
  )
}

export default Project


type ProjectItem={
  title:string;
  imgURL:string;
  description:string;
}

const ProjectItem=({title, imgURL, description}: ProjectItem)=>{
  return(
    <li className='relative flex w-full flex-1 flex-col rounded-2xl border overflow-hidden group '>
      <div className='relative flex w-full flex-1 flex-col rounded-2xl border overflow-hidden group'>
        <Image
          src={imgURL} 
          alt='projects'
          width={444}
          height={444}
        />
      </div>
      <div className='px-6 py-4'>
      <h3 className='bold-18 lg:bold-20 my-4 capitalize'>{title}</h3>
      <p className='regular-16 text-gray-50 mb-4'>{description}</p>
      <div className='flex gap-10 hover:text-teal-600'>
      <Button
            type='button'
            title='Read more'
            icon='\read more.svg'
            variat='btn_dark_rounded'
            /></div>
            <div className='hover:text-teal-600 gap-5'>
            <Button
            type='button'
            title='view code'
            icon='/github.png'
            variat='btn_dark_rounded'
            />
      
      </div>
      </div>
    </li>
    
  )
}
