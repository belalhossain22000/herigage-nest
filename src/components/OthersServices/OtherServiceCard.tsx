import React from 'react'
import { FaSquareCaretUp } from "react-icons/fa6";

const OtherServiceCard = () => {
    return (
        <div className='bg-[#ECF5FF] flex gap-[20px] justify-center w-fit p-6 rounded-md'>
            <div className="h-[48px] w-[48px] rounded-md bg-[#EE6611] flex justify-center items-center">

            <FaSquareCaretUp className=' h-6 w-6 text-white' />
            </div>
            <div>
                <h4 className='text-[24px] font-semibold leading-[32px] text-[#111827]'>Advance Property <br /> Search</h4>
                <p className='text-[16px] font-medium leading-[24px] text-[#6B7280]'>Lorem ipsum dolor sit  <br /> amet consectetur adipisicing elit.<br /> Nisi, laboriosam.</p>
            </div>
        </div>
    )
}

export default OtherServiceCard