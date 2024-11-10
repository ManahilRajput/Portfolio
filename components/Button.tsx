import React from 'react'
import Image from 'next/image'

type ButtonProps={
    type : 'button'| 'submit';
    title:string;
    icon?:string;
    variat:string;
}

const Button = ({type, title, icon, variat} : ButtonProps) => {
  return (
    <button className={"flexCentre gap-2 rounded-full border ${variat}"} type={type}>
       
        <label className='font-[500] whitespace-nowrap cursor-pointer'>
            {title}
        </label>
        {icon && <Image src={icon} alt={title} width={16} height={16}/>}
    </button>
  )
}

export default Button