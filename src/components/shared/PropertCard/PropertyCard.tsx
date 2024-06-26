import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaSquare } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import CardHover from '../CardHover/CardHover';
const PropertyCard = () => {
    return (
        <CardHover>

            <Link href="property-details">
                <div className="card bg-base-100 md:w-[385px] w-full md:h-[388px] h-full shadow-xl">
                    <figure>
                        <Image
                            src="/room.jfif"
                            alt="Shoes" height={200} width={385} className='w-[385px] h-[200px]' />
                    </figure>
                    <div className="card-body">
                        <div className='flex justify-between items-center border-b-2 border-slate-300 pb-2'>
                            <h2 className="bg-[#C5E2FF] font-normal text-base leadi4 w-fit py-1 px-2 rounded-md">Apartment</h2>
                            <h2 className="font-medium text-base leading-6 flex items-center gap-2"><span className='text-orange-600 '><FaSquare size={8} /></span> Ready to Move</h2>

                        </div>
                        <div>
                            <h3 className='font-semibold text-xl leading-8 '>sunny shlope suites</h3>
                            <p className='text-base font-normal leading-6 text-[#6B7280] flex items-center gap2'><span ><MdOutlineLocationOn size={20} className='text-orange-500' /></span> Lorem ipsum dolor sit amet.</p>
                            <p className='font-semibold text-2xl leading-8 mt-8'>$ 250000</p>
                        </div>

                    </div>
                </div>
            </Link>
        </CardHover>
    )
}

export default PropertyCard