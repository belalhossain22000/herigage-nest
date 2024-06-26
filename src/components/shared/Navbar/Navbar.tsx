// components/Navbar.tsx

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className='max-w-[1440px] mx-auto bg-[#ECF5FF]'>
      <div className="container mx-auto  bg-base-100">
        <div className="navbar-start flex items-center justify-between w-full lg:h-0">
          {/* Mobile menu dropdown */}
          <div className="dropdown px-5 py-5">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
              <Link href="/" className='text-[64px] font-bold'>
                <Image src="/Logo.png" alt='logo' width={42} height={64} />
              </Link>
            </div>
            <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-5 shadow flex flex-col items-center ">
              <li className='text-[18px] font-normal leading-[27px] hover:text-orange-400 hover:border-b-2 hover:border-orange-500 pb-1 transition duration-500'> <Link href="/" >Home</Link></li>
              <li className='text-[18px] font-normal leading-[27px] hover:text-orange-400 hover:border-b-2 hover:border-orange-500 pb-1 transition duration-500'> <Link href="/buy" >Buy</Link></li>
              <li className='text-[18px] font-normal leading-[27px] hover:text-orange-400 hover:border-b-2 hover:border-orange-500 pb-1 transition duration-500'>Sell</li>
              <li className='text-[18px] font-normal leading-[27px] hover:text-orange-400 hover:border-b-2 hover:border-orange-500 pb-1 transition duration-500'><Link href="/about" >Services</Link></li>

            </ul>
          </div>
          {/* batn sign in */}
          <div className='md:hidden'>
            <button className="btn px-[25px] py-[10px] text-[#0059B1] hover:bg-[#0059B1] bg-[#E6EFF7] text-[00437C] hover:text-[#E6EFF7] border-none">
              sign in
            </button>
          </div>

        </div>
      </div>
      {/* Desktop menu */}
      <div className='hidden lg:flex items-center justify-between  container mx-auto px-5 py-5 max-w-[1200px] '>
        <ul className='flex items-center gap-5'>
          <li className='text-[18px] font-normal leading-[27px] hover:text-orange-400 hover:border-b-2 hover:border-orange-500 pb-1 transition duration-500'> <Link href="/buy" >Buy</Link></li>
          <li className='text-[18px] font-normal leading-[27px] hover:text-orange-400 hover:border-b-2 hover:border-orange-500 pb-1 transition duration-500'>Sell</li>
          <li className='text-[18px] font-normal leading-[27px] hover:text-orange-400 hover:border-b-2 hover:border-orange-500 pb-1 transition duration-500'><Link href="/about" >Services</Link></li>

        </ul>
        {/* Logo in the center */}
        <div>
          <Link href="/" className='text-[64px] font-bold'>
            <Image src="/Logo.png" alt='logo' width={42} height={64} />
          </Link>
        </div>
        {/* Button on the right */}
        <div>
          <button className="btn px-[25px] py-[10px] text-[#0059B1] hover:bg-[#0059B1] bg-[#E6EFF7] text-[00437C] hover:text-[#E6EFF7] border-none">
            sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
