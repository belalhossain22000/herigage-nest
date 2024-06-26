import React from 'react'
import SectionTitle from '../shared/SectionTtile/SectionTitle'
import ButtonPrimary from '../Buttton/ButtonPrimary'
import Image from 'next/image'
import { FaPlayCircle } from "react-icons/fa";
import Reveals from '../shared/Reveals/Reveals';
import ButtonHover from '../shared/ButtonHover/ButtonHover';

const HomeSection = ({ classes, position, playbtn }: { classes?: string, position?: string, playbtn: string }) => {
  return (
    <div className={`wraper flex ${classes} items-center justify-between lg:mb-[80px] mt-[64px]`}>
      <div className='relative p-5 xl:p-0 '>
        <Image src="/home-1.jfif" alt="home image" width={458} height={400} />
        <Image src="/home-2.jfif" alt="home image" width={452} height={240} className={`h-[252px] absolute  left-[100px] ${position} hidden xl:flex`} />
        <FaPlayCircle className={` absolute h-[72px] w-[72px] text-[#0059B1] hidden xl:flex ${playbtn}`} />
        {/*  */}
      </div>
      <div className='mt-8 lg:mt-0 p-5 md:p-0'>
        <Reveals>

          <SectionTitle />
        </Reveals>
        <Reveals>

          <h2 className="section-heading mt-[16px]">Efficient and Transparent <br /> Home Buying Solutions</h2>
        </Reveals>
        <Reveals>

          <p className='section-description mt-6 mb-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit <br />   . Temporibus iste velit <br /> molestiae sapiente consectetur </p>
        </Reveals>
        <ButtonHover>

          <ButtonPrimary btnText='Find Property' />
        </ButtonHover>
      </div>
    </div>
  )
}

export default HomeSection