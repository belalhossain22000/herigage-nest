import React from 'react'
import OtherServiceCard from './OtherServiceCard'
import FadeLeft from '../shared/FadeLeft/FadeLeft'

const OthersServices = () => {
    return (
        <FadeLeft>

            <section className='wraper p-5 md:p-10'>
                <h2 className='text-[40px] mt-[100px] font-semibold leading-[48px] text-center my-[64px]'>Other Services</h2>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[32px] mb-[32px] place-items-center lg:place-items-start' >
                    {[1, 1, 1].map((item, index) => (
                        <OtherServiceCard key={index} />
                    ))}
                </div>
            </section>
        </FadeLeft>
    )
}

export default OthersServices