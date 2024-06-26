import React from 'react'
import { CiSearch } from "react-icons/ci";
const ButtonPrimary = ( {btnText}:{btnText:string}) => {
  return (
    <button className="btn btn-primary border-none bg-[#E6EFF7] text-[#00437c] font-bold hover:text-[#E6EFF7]"><span><CiSearch className='h-[20px] w-[20px] font-bold '/></span>{btnText}</button>
  )
}

export default ButtonPrimary