import Image from 'next/image'
import React from 'react'

export default function BannerBottom() {
    return (
        <div className=' bg-[#003BA3] flex md:px-[164px] md:pt-60 md:pb-32 px-4 pt-6'>
            <div className=' flex flex-col items-start gap-10 shrink-0 w-full max-w-[769px] h-auto md:h-[410px] md:w-[769px]'>
                <div className='text-3xl md:text-[64px] font-extrabold leading-[130%] tracking-[1.28px] text-white'>
                    Secure Your Future with Our Expertise
                </div>
                <div className='text-xl md:text-2xl font-bold leading-[140%] tracking-[0.48px] text-[#C0C7E1] max-w-lg'>
                    Don’t leave your organization’s security to chance. Our penetration testing services provide the peace of mind you need to focus on what you do best—growing your business. Contact us today to learn how we can help protect your digital assets.
                </div>
            </div>
            <Image alt='deal' src={'/assets/deal.png'} width={0} height={0} layout='responsive' className=' absolute mt-14 right-10 max-w-2xl' />

        </div>
    )
}
