import Image from 'next/image';
import React from 'react'
import { FaStar } from "react-icons/fa6";

const Testimonial = () => {
    return (
        <div className='wraper bg-[#ECF5FF] p-8 flex flex-col items-center gap-9 rounded-md'>
            <div className='flex items-center gap-[10px]'>
                <FaStar className='text-[#FEC84B]' size={24} />
                <FaStar className='text-[#FEC84B]' size={24} />
                <FaStar className='text-[#FEC84B]' size={24} />
                <FaStar className='text-[#FEC84B]' size={24} />
                <FaStar className='text-[#FEC84B]' size={24} />
            </div>
            <p className='text-lg font-normal leading-6 text-[#818181] text-center'>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Molestias temporibus accusantium distinctio <br /> maxime minima expedita, recusandae quisquam perferendis omnis <br />Lorem ipsum dolor sit amet consectetur</p>
            <div className='flex flex-col items-center gap-1'>
                <div className="avatar">
                    <div className="w-12 rounded-full">
                        <Image height={48} width={48} src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt='image'/>
                    </div>
                </div>
                <h4 className='font-semibold text-xl leading-[28px]'>Tony Shark</h4>
                <p className='font-normal text-base leading-6 text-[#6B7280]'>Marketing manager xyz</p>
            </div>
        </div>
    )
}

export default Testimonial