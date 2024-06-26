import Image from 'next/image'
import React from 'react'

const Sharedbanner = () => {
  return (
    <div className=' large-Wraper h-[309px] w-full'>
     <Image src="/shared-banner.jfif" className="h-full w-full object-cover"  alt='banner image' height={309} width={1440} />
    </div>
  )
}

export default Sharedbanner