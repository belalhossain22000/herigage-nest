import React from 'react'
import ZoomOutText from '../shared/ZoomOutText/ZoomOutText'
import { CiSearch } from "react-icons/ci";
const Banner = () => {
    return (
        <div className="relative overflow-hidden w-full mx-auto bg-black h-[590px] flex items-center justify-center max-w-[1440px]">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="/banner-bg-video.mp4"
                autoPlay
                loop
                muted
            />
            <div className="relative z-10 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
                <div className="container mx-auto px-5">
                    <ZoomOutText>
                        <div className="text-white flex items-center justify-center flex-col gap-4">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight sm:leading-tight md:leading-snug lg:leading-[96px] text-center">
                                Your Portal to Indias <br /> Exquisite Real Estate
                            </h1>
                            <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-6 sm:leading-7 md:leading-8 lg:leading-[48px] text-center">
                                Seamlessly connecting you to the heartbeat of Indias prime properties
                            </p>
                            <button className="btn btn-primary text-sm sm:text-base md:text-lg font-semibold flex items-center gap-2 ">
                                <span><CiSearch size={18} className='font-bold' /></span>
                                Find Property
                            </button>
                        </div>
                    </ZoomOutText>
                </div>
            </div>
        </div>
    )
}

export default Banner
