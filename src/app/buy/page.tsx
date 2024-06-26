import AddProperty from '@/components/AddProperty/AddProperty'
import FindPropertyFrom from '@/components/FindPropertyForm/FindPropertyFrom'
import Testimonial from '@/components/Testimonial/Testimonial'
import Counter from '@/components/shared/Counter/Counter'
import FadeLeft from '@/components/shared/FadeLeft/FadeLeft'
import FadeRight from '@/components/shared/FadeRight/FadeRight'
import PropertyCard from '@/components/shared/PropertCard/PropertyCard'
import Reveals from '@/components/shared/Reveals/Reveals'
import Sharedbanner from '@/components/shared/Sharedbanner/Sharedbanner'
import React from 'react'

const Buy = () => {
  return (
    <>
      {/* banner */}
      <div className='relative my-10 xl:mb-[204px] large-Wraper'>
        <Sharedbanner />
        <div className='xl:absolute left-1/2 transform xl:-translate-x-1/2 -bottom-[50%] w-full md:w-auto mt-8 p-5 lg:p-0'  >
          <FindPropertyFrom />
        </div>
      </div>
      {/* counter */}
      <div className='grid lg:grid-cols-4 gap-8 wraper  sm:grid-cols-2 grid-cols-1 place-items-center p-5 lg:p-0'>
        {[1, 2, 3, 4].map((index) => <Counter key={index} />)}

      </div>
      {/* popular property */}
      <div className=' wraper mt-12 p-5 lg:p-0'>
        <div className='flex items-center justify-between'>
          <Reveals>
            <h3 className='text-[32px] font-semibold leading-[48px]'>Popular Properties</h3>
          </Reveals>

          <button className="btn btn-link text-lg font-semibold leading-6">see all Properties</button>
        </div>
        {/* property card */}
        <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 lg:mt-6 place-items-center mt-12 '>
          {
            [1, 1, 1,].map((index) => <FadeLeft key={index}><PropertyCard /></FadeLeft>)
          }
        </div>
      </div>
      {/* neww listed properties */}
      <div className=' wraper mt-[132px] p-5 lg:p-0 '>
        <div className='flex items-center justify-between'>
          <h3 className='text-[32px] font-semibold leading-[48px]'>New listed properties</h3>
          <button className="btn btn-link text-lg font-semibold leading-6">see all Properties</button>
        </div>
        {/* property card */}
        <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 lg:mt-6 place-items-center mt-12'>
          {
            [1, 1, 1,].map((index) => <FadeLeft key={index}><PropertyCard /></FadeLeft>)
          }
        </div>
      </div>

      {/* testimonials  */}
      <div className='mt-[56px] p-5 lg:p-0'>
        <div>
          <h1 className='font-bold text-[40px] leading-[48px] mb-[64px] text-center'>Testimonials</h1>
        </div>

        <div className='grid md:grid-cols-2 grid-cols-1 wraper gap-8 '>

          {
            [1, 1].map((index) =><FadeRight key={index}><Testimonial  /></FadeRight> )
          }
        </div>
      </div>
      <div className='large-Wraper mt-2 '>
        <AddProperty />
      </div>

    </>
  )
}

export default Buy