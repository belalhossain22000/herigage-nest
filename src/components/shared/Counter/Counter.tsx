import React from 'react'
import { FaPlus } from "react-icons/fa";
import { MdDownloadForOffline } from "react-icons/md";
import CounterUp from '../CounterUp/CounterUp';
const Counter = () => {
    return (
        <div className='bg-red-300  wraper p-6 w-[268px] h-[185px] rounded-md'>
            <h3 className='text-[40px] font-bold leading-[48px] text-orange-700 flex item-center'>  <CounterUp from={0} to={100} duration={3} className="" />k+ </h3>
            <p className='text-base font-normal leading-6 text-[#1F2937]'>New Flat Listed</p>
            <div className='flex justify-between items-centerc'>
                <button className="btn btn-active btn-link text-orange-600 font-normal">view all</button> <span className='text-orange-500'><MdDownloadForOffline size={32} /></span>
            </div>
        </div>
    )
}

export default Counter