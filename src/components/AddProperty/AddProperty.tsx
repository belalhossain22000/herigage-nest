import React from 'react'

const AddProperty = () => {
    return (
        <div className='w-full bg-[#FDF0E7] large-Wraper '>
            <div className='wraper w-full flex flex-wrap sm:flex-nowrap gap-8  items-center justify-between py-12 p-5 lg:-0'>
                <div>
                    <h5 className='text-xl font-semibold leading-[30px]'>Post your Property for free</h5>
                    <p className='font-normal text-[#475467] leading-6 '>List it and Your Propertiy and aget geniune leads</p>
                </div>
                <div>
                    <button className="btn btn-primary bg-orange-500 text-white border-none px-[28px] py-[14px]">Post Property</button>
                </div>
            </div>
        </div>
    )
}

export default AddProperty