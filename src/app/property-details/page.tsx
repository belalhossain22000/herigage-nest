import OthersServices from '@/components/OthersServices/OthersServices'
import CardHover from '@/components/shared/CardHover/CardHover'
import PropertyCard from '@/components/shared/PropertCard/PropertyCard'
import Reveals from '@/components/shared/Reveals/Reveals'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdOutlineLocationOn, MdBedroomParent } from 'react-icons/md'

const PropertyDetails = () => {
    return (
        <div className='wraper mt-[42px]'>
            <Reveals>

                <div className='flex items-center gap-8 border-b-2 pb-4 border-gray-300'>
                    <div>
                        <h4 className='font-semibold text-xl leading-6'>3BHK uilding Floor For sale In site Ram bazar Hydrabad</h4>
                        <p className='text-base font-normal leading-6 text-[#6B7280] flex items-center gap2'><span ><MdOutlineLocationOn size={20} className='text-orange-500' /></span> Lorem ipsum dolor sit amet.</p>

                    </div>
                    <p className='font-extrabold text-[28px] leading-8'>$ 300k</p>
                </div>
            </Reveals>
            <div className='grid grid-cols-3 gap-8 mt-6'>
                <div className='col-span-2 '>
                    {/* image */}
                    <div>
                        <CardHover>

                            <Image src='/room.jfif' alt='image' width={800} height={400} />
                        </CardHover>
                        <div className='flex items-center gap-4 mt-4'>
                            <CardHover>

                                <Image className='h-[160px]' src='/room.jfif' alt='image' width={290} height={160} />
                            </CardHover>
                            <CardHover>

                                <Image className='h-[160px]' src='/room.jfif' alt='image' width={290} height={160} />
                            </CardHover>
                            <Link href={"/"} className='h-[160px] '>
                                <div
                                    className="hero h-full w-[188px]"
                                    style={{
                                        backgroundImage: "url(/room.jfif)",
                                    }}>
                                    <div className="hero-overlay bg-opacity-60 h-full"></div>
                                    <div className="hero-content text-neutral-content text-center">
                                        <div className="max-w-md">
                                            <button className="">view more</button>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                        </div>
                    </div>
                    {/* details */}
                    <div className='bg-[#F9FAFB] border-2 border-gray-300 p-6 mt-8 rounded-md'>
                        <h3 className='font-semibold text-2xl leading-7 '>Overview</h3>
                        <div className='shadow-xl bg-white flex items-center gap-8 rounded-md my-8'>
                            <p className='p-4 font-bold flex items-center gap-2'><span><MdBedroomParent className='' size={24} /></span> 2beds</p>
                            <p className='p-4 font-bold flex items-center gap-2'><span><MdBedroomParent className='' size={24} /></span> 2beds</p>
                            <p className='p-4 font-bold flex items-center gap-2'><span><MdBedroomParent className='' size={24} /></span> 2beds</p>
                            <p className='p-4 font-bold flex items-center gap-2'><span><MdBedroomParent className='' size={24} /></span> fully furnished</p>
                        </div>
                        <div className='grid grid-cols-4 gap-8'>
                            <p className='flex flex-col items-start gap-1'><span className='text-[#5C5C5C] leading-6'>carpet Area</span> <span className='font-medium leading-6'>200sqft</span> <span className='text-[#5C5C5C] leading-6'>$22/sqft</span></p>
                            <p className='flex flex-col items-start gap-1'><span className='text-[#5C5C5C] leading-6'>carpet Area</span> <span className='font-medium leading-6'>200sqft</span> </p>
                            <p className='flex flex-col items-start gap-1'><span className='text-[#5C5C5C] leading-6'>carpet Area</span> <span className='font-medium leading-6'>200sqft</span> </p>
                            <p className='flex flex-col items-start gap-1'><span className='text-[#5C5C5C] leading-6'>carpet Area</span> <span className='font-medium leading-6'>200sqft</span> </p>
                            <p className='flex flex-col items-start gap-1'><span className='text-[#5C5C5C] leading-6'>carpet Area</span> <span className='font-medium leading-6'>200sqft</span> </p>
                            <p className='flex flex-col items-start gap-1'><span className='text-[#5C5C5C] leading-6'>carpet Area</span> <span className='font-medium leading-6'>200sqft</span> </p>
                            <p className='flex flex-col items-start gap-1'><span className='text-[#5C5C5C] leading-6'>carpet Area</span> <span className='font-medium leading-6'>200sqft</span> </p>
                        </div>

                    </div>

                </div>
                {/* right side */}
                <div className='col-span-1  p-6 rounded-md'>
                    <div className='col-span-1 bg-[#ECF5FF] p-6 rounded-md'>
                        <div>
                            <p className='text-base leading-5 font-normal text-[#6B7280] '>property Value </p>
                            <p className='font-bold text-2xl leading-8 mt-2 mb-4'>$300k - $319k</p>
                            <p className='text-[#6B7280] font-semibold'>Lorem ipsum dolor sit amet <br /> consectetur adipisicing.</p>
                        </div>
                        <div className='flex flex-col gap-8'>
                            <div>
                                <div className="flex items-start flex-col justify-start gap-1  ">
                                    <label className="text-gray-600 flex items-center gap-2 text-[14px] leading-5 font-normal"> min</label>
                                    <input
                                        type="text"
                                        className="w-full py-3 bg-white px-4 text-black text-base leading-5 rounded-md outline-none focus:border-blue-500"
                                        placeholder="$ 280k"
                                    // value={280}
                                    />
                                </div>
                                <div className="flex items-start flex-col justify-start gap-1 mt-2 ">
                                    <label className="text-gray-600 flex items-center gap-2 text-[14px] leading-5 font-normal"> max</label>
                                    <input
                                        type="text"
                                        className="w-full py-3 bg-white px-4 text-black text-base leading-5 rounded-md outline-none focus:border-blue-500"
                                        placeholder="$ 305k"
                                    // value={280}
                                    />
                                </div>
                                {/* radio button */}
                                <div className='flex items-center justify-between mt-6'>

                                    <div className='flex flex-col items-start gap-2'>
                                        <div className='bg-orange-600 h-6 w-6 rounded-full' />
                                        <p className='font-medium text-base leading-4'>$ 306k</p>
                                    </div>
                                    <div className='flex flex-col items-end gap-2'>
                                        <div className='bg-orange-600 h-6 w-6 rounded-full' />
                                        <p className='font-medium text-base leading-4'>$ 306k</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center justify-center'>

                                <button className="btn btn-primary py-3 px-6 w-fit">Bid Property</button>
                            </div>
                        </div>
                    </div>
                    <div className='mt-[50px]'>
                        <CardHover>

                            <Image className='h-[422px] w-[384] object-cover' src='/map.png' alt='imaghe' height={422} width={384} />
                        </CardHover>
                    </div>
                </div>
            </div>
            {/* amenities */}
            <div className='bg-[#F9FAFB] border-2 border-gray-300 p-6 mt-[54px] rounded-md'>
                <h5 className='font-semibold text-2xl leading-7'>Amenities</h5>
                <div className='mt-8 grid grid-cols-4 gap-8'>
                    <p className='font-medium text-base leading-6 flex items-center gap-2'><span><MdBedroomParent size={40} /></span> Power Backup</p>
                    <p className='font-medium text-base leading-6 flex items-center gap-2'><span><MdBedroomParent size={40} /></span> Power Backup</p>
                    <p className='font-medium text-base leading-6 flex items-center gap-2'><span><MdBedroomParent size={40} /></span> Power Backup</p>
                    <p className='font-medium text-base leading-6 flex items-center gap-2'><span><MdBedroomParent size={40} /></span> Power Backup</p>
                    <p className='font-medium text-base leading-6 flex items-center gap-2'><span><MdBedroomParent size={40} /></span> Power Backup</p>
                    <p className='font-medium text-base leading-6 flex items-center gap-2'><span><MdBedroomParent size={40} /></span> Power Backup</p>
                    <p className='font-medium text-base leading-6 flex items-center gap-2'><span><MdBedroomParent size={40} /></span> Power Backup</p>
                    <p className='font-medium text-base leading-6 flex items-center gap-2'><span><MdBedroomParent size={40} /></span> Power Backup</p>
                    <p className='font-medium text-base leading-6 flex items-center gap-2'><span><MdBedroomParent size={40} /></span> Power Backup</p>
                    <p className='font-medium text-base leading-6 flex items-center gap-2'><span><MdBedroomParent size={40} /></span> Power Backup</p>
                    <p className='font-medium text-base leading-6 flex items-center gap-2'><span><MdBedroomParent size={40} /></span> Power Backup</p>
                    <p className='font-medium text-base leading-6 flex items-center gap-2'><span><MdBedroomParent size={40} /></span> Power Backup</p>
                    <p className='font-medium text-base leading-6 flex items-center gap-2'><span><MdBedroomParent size={40} /></span> Power Backup</p>
                    <p className='font-medium text-base leading-6 flex items-center gap-2'><span><MdBedroomParent size={40} /></span> Power Backup</p>
                    <p className='font-medium text-base leading-6 flex items-center gap-2'><span><MdBedroomParent size={40} /></span> Power Backup</p>
                    <p className='font-medium text-base leading-6 flex items-center gap-2'><span><MdBedroomParent size={40} /></span> Power Backup</p>
                    <p className='font-medium text-base leading-6 flex items-center gap-2'><span><MdBedroomParent size={40} /></span> Power Backup</p>
                    <p className='font-medium text-base leading-6 flex items-center gap-2'><span><MdBedroomParent size={40} /></span> Power Backup</p>
                    <p className='font-medium text-base leading-6 flex items-center gap-2'><span><MdBedroomParent size={40} /></span> Power Backup</p>
                    <p className='font-medium text-base leading-6 flex items-center gap-2'><span><MdBedroomParent size={40} /></span> Power Backup</p>
                    <p className='font-medium text-base leading-6 flex items-center gap-2'><span><MdBedroomParent size={40} /></span> Power Backup</p>
                    <p className='font-medium text-base leading-6 flex items-center gap-2'><span><MdBedroomParent size={40} /></span> Power Backup</p>
                    <p className='font-medium text-base leading-6 flex items-center gap-2'><span><MdBedroomParent size={40} /></span> Power Backup</p>
                    <p className='font-medium text-base leading-6 flex items-center gap-2'><span><MdBedroomParent size={40} /></span> Power Backup</p>
                </div>
            </div>

            <div>
                <OthersServices />
            </div>
            {/* others property */}

            {/* neww listed properties */}
            <div className=' wraper mt-[28px] mb-[77px]'>
                <div className='flex items-center justify-between'>
                    <h3 className='text-[32px] font-semibold leading-[48px]'>Others Nearby properties</h3>
                    <button className="btn btn-link text-lg font-semibold leading-6">see all Properties</button>
                </div>
                {/* property card */}
                <div className='grid grid-cols-3 gap-8 mt-6'>
                    {
                        [1, 1, 1,].map((index) => <PropertyCard key={index} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default PropertyDetails