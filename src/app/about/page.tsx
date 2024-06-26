import React from 'react'
import Image from 'next/image'
import ButtonPrimary from '@/components/Buttton/ButtonPrimary'
import Testimonial from '@/components/Testimonial/Testimonial'
import Counter from '@/components/shared/Counter/Counter'
import PropertyCard from '@/components/shared/PropertCard/PropertyCard'
import SectionTitle from '@/components/shared/SectionTtile/SectionTitle'
import Sharedbanner from '@/components/shared/Sharedbanner/Sharedbanner'
import FadeLeft from '@/components/shared/FadeLeft/FadeLeft'
import FadeRight from '@/components/shared/FadeRight/FadeRight'
import CardHover from '@/components/shared/CardHover/CardHover'


const About = () => {
    return (
        <div className='large-wraper'>
            <div >
                <Sharedbanner />
            </div>
            <div className='wraper '>
                {/* counter */}
                <div className='grid lg:grid-cols-4 gap-8 wraper my-[53px] sm:grid-cols-2 grid-cols-1 place-items-center  p-5 lg:p-0'>
                    {[1, 2, 3, 4].map((index) => <Counter key={index} />)}

                </div>

                {/* text with image section */}
                <FadeLeft>


                    <div className='lg:relative lg:mb-[180px] p-5 lg:p-0 '>
                        <div>
                            <Image src="/service-1.jfif" alt='image' width={904} height={455} className='lg:w-[904px] w-full lg:h-[455px] h-auto' />
                        </div>
                        <div className='bg-[#ECF5FF] p-8 lg:w-fit w-full rounded-md lg:absolute -bottom-[30%] left-[45%] mt-8'>
                            <div>
                                <SectionTitle />
                                <h2 className="section-heading mt-[16px]">Efficient and Transparent <br /> Home Buying Solutions</h2>
                                <p className='section-description mt-6 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus iste velit <br /> molestiae sapiente consectetur </p>

                            </div>
                        </div>
                    </div>
                </FadeLeft>
                {/* text with image section */}
                <FadeRight>
                    <div className='lg:relative flex flex-col items-center lg:mb-[166px] p-5 xl:p-0'>
                        <div className='flex items-end justify-end w-full'>
                            <Image src="/service-2.jfif" alt='image' width={904} height={455} className='lg:w-[710px] w-full  lg:h-[455px]' />
                        </div>
                        <div className='bg-[#ECF5FF] p-8 xl:w-fit w-full mt-8  rounded-md lg:absolute flex flex-col items-center -bottom-[30%] right-[45%]'>
                            <div>
                                <SectionTitle />
                                <h2 className="section-heading mt-[16px]">Efficient and Transparent <br /> Home Buying Solutions</h2>
                                <p className='section-description mt-6 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus iste velit <br /> molestiae sapiente consectetur </p>

                            </div>
                        </div>
                    </div>
                </FadeRight>

                {/* out team */}
                <div className=' p-5 lg:p-0'>
                    <div>
                        <SectionTitle />
                        <h2 className="section-heading mt-[16px]">Efficient and Transparent Home Buying </h2>
                    </div>
                    <div className='flex flex-col flex-wrap xl:flex-nowrap lg:flex-row items-center gap-8 my-16'>
                        <CardHover>

                            <Image src="/team-2.jfif" alt='image' width={384} height={417} className='lg:w-[384px] w-full lg:h-[417px] h-auto object-cover' />
                        </CardHover>
                        <CardHover>

                            <Image src="/team-3.jfif" alt='image' width={384} height={417} className='lg:w-[384px] w-full lg:h-[417px] h-auto object-cover' />
                        </CardHover>
                        <CardHover>
                            <Image src="/team-1.jfif" alt='image' width={384} height={417} className='lg:w-[384px] w-full lg:h-[417px] h-auto object-cover' />

                        </CardHover>

                    </div>

                </div>

                {/* team book consultioton */}
                <FadeLeft>
                    <div className='flex flex-col lg:flex-row items-center justify-between p-5 lg:p-0'>

                        <div>
                            <SectionTitle />
                            <h2 className="section-heading mt-[16px]">Efficient and Transparent <br /> Home Buying Solutions</h2>
                            <p className='section-description mt-6 mb-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus iste velit <br /> molestiae sapiente consectetur </p>
                            <ButtonPrimary btnText='Find Property' />
                        </div>
                        <div className='mt-8 lg:mt-0 w-full lg:w-fit'>
                            <Image src="/home-image.jfif" alt='image' width={384} height={304} className='lg:w-[384px] w-full lg:h-[304px] h-auto' />

                        </div>
                    </div>
                </FadeLeft>
                {/* testimonials  */}
                <FadeRight>

                    <div className='my-[64px] p-5 lg:p-0'>
                        <div>
                            <h1 className='font-bold text-[40px] leading-[48px] mb-[64px] text-center'>Testimonials</h1>
                        </div>
                        <div className='grid md:grid-cols-2 grid-cols-1 wraper gap-8 '>

                            {
                                [1, 1].map((index) => <Testimonial key={index} />)
                            }
                        </div>
                    </div>
                </FadeRight>
            </div>
        </div >
    )
}

export default About