import { FOOTER_LINKS, SOCIALS } from '@/constants'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='max-container padding-container bg-teal-600 bg-pattern bg-cover bg-center bg-no-repeat px-1 pt-24 pb-1 text-white'>
      <div className='flex flexBetween flex-col gap-14 md:flex-row pb-16'>
        <ul>
          {
            FOOTER_LINKS.map((link)=>(
              <Link href={link.href}  key={link.key} className='p-4 text-[15px] font-[500] hover:text-black'>
                {link.label}
                </Link>
            ))
          }
        </ul>
        <ul className='regular-14 flex gap-4 text-gray-30'>
          {
            SOCIALS.map((social)=>(
              <Link href={social.href} key={social.key} className='h-10 w-10 border-[0.01rem] border-gray-400 flexCenter rounded-full hover:bg-slate-50 hover:border-slate-50 transition-all' >
                <Image src={social.imgURL} alt={social.key} height={50} width={50} className='invert-[100]'/>
              </Link>
            ))
          }
        </ul>
      </div>
      <hr className='border-none outline-none-[0.01rem] bg-gray-10 my-8'/>
      <div className='text-center'>this website is made by manahil khursheed alam rajput</div>
    </footer>
  )
}

export default Footer