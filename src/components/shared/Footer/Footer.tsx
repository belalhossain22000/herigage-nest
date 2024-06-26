import Image from 'next/image';
import React from 'react'
import { AiFillFacebook, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";
const Footer = () => {
  return (
    <div className='large-Wraper bg-[#ECF5FF]  py-5 p-10 xl:p-0'>
      <footer className="footer text-base-content py-10 wraper  ">
        <aside>
          <Image src='/Logo.png' alt='logo' width={53} height={80}/>
          <p className='text-[16px] font-m edium leading-6 mt-[16px]'>
           Design amazing digital expericens that 
            <br />
            create more happy in the world
          </p>
        </aside>
        <nav>
          <h6 className="footer-title text-[#667085]">Services</h6>
          <a className="link link-hover text[#475467] font-semibold text-[16px leading-6]">Branding</a>
          <a className="link link-hover text[#475467] font-semibold text-[16px leading-6]">Design</a>
          <a className="link link-hover text[#475467] font-semibold text-[16px leading-6]">Marketing</a>
          <a className="link link-hover text[#475467] font-semibold text-[16px leading-6]">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title text-[#667085]">Company</h6>
          <a className="link link-hover text[#475467] font-semibold text-[16px leading-6]">About us</a>
          <a className="link link-hover text[#475467] font-semibold text-[16px leading-6]">Contact</a>
          <a className="link link-hover text[#475467] font-semibold text-[16px leading-6]">Jobs</a>
          <a className="link link-hover text[#475467] font-semibold text-[16px leading-6]">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title text-[#667085]">Company</h6>
          <a className="link link-hover text[#475467] font-semibold text-[16px leading-6]">About us</a>
          <a className="link link-hover text[#475467] font-semibold text-[16px leading-6]">Contact</a>
          <a className="link link-hover text[#475467] font-semibold text-[16px leading-6]">Jobs</a>
          <a className="link link-hover text[#475467] font-semibold text-[16px leading-6]">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title text-[#667085]">Company</h6>
          <a className="link link-hover text[#475467] font-semibold text-[16px leading-6]">About us</a>
          <a className="link link-hover text[#475467] font-semibold text-[16px leading-6]">Contact</a>
          <a className="link link-hover text[#475467] font-semibold text-[16px leading-6]">Jobs</a>
          <a className="link link-hover text[#475467] font-semibold text-[16px leading-6]">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title text-[#667085]">Legal</h6>
          <a className="link link-hover text[#475467] font-semibold text-[16px leading-6]">Terms of use</a>
          <a className="link link-hover text[#475467] font-semibold text-[16px leading-6]">Privacy policy</a>
          <a className="link link-hover text[#475467] font-semibold text-[16px leading-6]">Cookie policy</a>
        </nav>
      </footer>
      {/* hr line */}
      <div className='h-[56px] max-w-[1200px] mx-auto border-blue-200 border-t-2'></div>
      {/* social link */}
      <div className='flex justify-between max-w-[1200px]  mx-auto'>
        <p className='font-normal text-[16px] text-[#667085]'>@ 2024 heritage- Nest . All rights reserved</p>
        <div className='flex items-center gap-6 pb-[46px]'>
          <AiFillFacebook className='h-6 w-6 text-[#0059B1]  rounded-full' />
          <AiFillLinkedin className='h-6 w-6 text-[#0059B1]  rounded-full' />
          <AiFillTwitterCircle className='h-6 w-6 text-[#0059B1]  rounded-full' />
          <AiFillFacebook className='h-6 w-6 text-[#0059B1]  rounded-full' />
        </div>
      </div>
    </div>
  )
}

export default Footer