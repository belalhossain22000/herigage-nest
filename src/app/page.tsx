import Banner from '@/components/Banner/Banner'
import HomeSection from '@/components/HomeSection/HomeSection'
import OthersServices from '@/components/OthersServices/OthersServices'
import FadeLeft from '@/components/shared/FadeLeft/FadeLeft'
import FadeRight from '@/components/shared/FadeRight/FadeRight'
import React from 'react'

const HomePage = () => {
  return (
    <div className=''>
      <Banner />
      <FadeLeft>

        <HomeSection position='-bottom-[20%] ' playbtn="-right-[12%] bottom-[30%] " classes='flex-col md:flex-row' />
      </FadeLeft>
      <FadeRight>

        <HomeSection classes='md:flex-row-reverse flex-col xl:p-0 p-5' position='-top-[20%]' playbtn="-top-[10%] left-[10%]" />
      </FadeRight>
      <FadeLeft>

        <HomeSection position='-bottom-[20%]' playbtn="-right-[10%] bottom-[30%]" classes='flex-col md:flex-row' />
      </FadeLeft>


      <OthersServices />

    </div>
  )
}

export default HomePage