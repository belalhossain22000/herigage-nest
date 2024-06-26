import React from 'react'
import { CiSearch } from "react-icons/ci";
import { FiMapPin, FiHome } from "react-icons/fi";
import { MdAttachMoney } from "react-icons/md";
const FindPropertyFrom = () => {
  return (
    <div className='xl:w-[984px] w-full h-full xl:h-[376px] bg-white shadow-xl rounded-md px-8 py-8'>
      <div className=' flex flex-col gap-8 items-center'>
        <ul className='flex items-center justify-start gap-[32px] border-b-2 border-[#ECF5FF] w-full'>
          <li className='text-[16px] font-medium leading-[24px] text-blue-600 border-b-2 border-blue-600'>Buy</li>
          <li className='text-[16px] font-medium leading-[24px]'>Rent</li>
          <li className='text-[16px] font-medium leading-[24px]'>PG</li>
          <li className='text-[16px] font-medium leading-[24px]'>Plot</li>
          <li className='text-[16px] font-medium leading-[24px]'>Commercial</li>
        </ul>
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none ">
            <CiSearch className="text-gray-400 font-bold text-base" />
          </div>
          <input
            type="text"
            className="w-full py-3 pl-10 pr-4 outline-1 outline-[#E5E7EB] border-[1px] border-[#E5E7EB] rounded-md text-[20px] leading-5 font-normal text-[#6B7280] placeholder-[#6B7280] placeholder-opacity-50"
            placeholder="Search Properties"
          />
        </div>

        <div className="flex items-center gap-8">
          {/* Location Select */}
          <div className="flex items-start gap-4 flex-col justify-start ">

            <label className="text-gray-600  flex items-center gap-2 text-[18px] leading-6 font-semibold"><span><FiMapPin className="text-orange-500 text-[20px] font-bold" /></span> Location</label>
            <select className="lg:w-[285px] w-full py-5  px-4 border bg-[#ECF5FF] border-gray-300 rounded-md outline-none focus:border-blue-500 ">
              <option value="default">Select location...</option>
              {/* Add more options as needed */}
              <option value="location1">Location 1</option>
              <option value="location2">Location 2</option>
              <option value="location3">Location 3</option>
            </select>
          </div>

          {/* Property Type Select */}
          <div className="flex items-start flex-col justify-start gap-4">
            
            <label className="text-gray-600 flex items-center gap-2 text-[18px] leading-6 font-semibold"><span><FiHome className="text-orange-500 text-[20px] font-bold" /></span> Property Type</label>
            <select className="lg:w-[285px] w-full py-5  px-4 bg-[#ECF5FF] border border-gray-300 rounded-md outline-none focus:border-blue-500">
              <option value="default">Select property type...</option>
              {/* Add more options as needed */}
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="villa">Villa</option>
            </select>
          </div>

          {/* Budget Input */}
          <div className="flex items-start flex-col justify-start gap-4">
            <label className="text-gray-600 flex items-center gap-2 text-[18px] leading-6 font-semibold"><span className='bg-orange-500 text-white text-xl rounded-full'><MdAttachMoney className='' /></span> Budget</label>
            <input
              type="text"
              className="lg:w-[285px] w-full py-5 bg-[#ECF5FF] px-4 border border-gray-300 rounded-md outline-none focus:border-blue-500"
              placeholder="Enter your budget..."
            />
          </div>
        </div>
        <button className="btn btn-active btn-primary font-semibold text-white w-full hover:text-blue-600 hover:bg-white transition duration-700 "><span><CiSearch size={24} className='font-bold'/></span> Find Property</button>
      </div>
    </div>
  )
}

export default FindPropertyFrom