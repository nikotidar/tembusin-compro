import React from 'react'

function Features() {
    const before = "before:absolute before:-bottom-8 before:-right-5 before:w-10 before:h-20 before:bg-transparent before:rounded-bl-2xl before:shadow-[inset_20px_-32px_0_white]"
    return (
        <div className='px-5 select-none bg-[#C0C7E1]'>
            <div className='
            relative
            mx-auto bg-white max-w-6xl rounded-b-2xl rounded-tr-2xl pb-20 
            '>
                <div id='shape' className={` ${before} absolute w-9/12 h-32 z-0 bg-white -top-32 rounded-t-2xl`} />
                <div id='content' className=' px-24 flex flex-col gap-16'>
                    <div className=' flex gap-20 text-black'>
                        <div className=' z-50 text-6xl -mt-14 leading-snug font-extrabold text-[#2E449C]'>
                            Why You’ll Love Our Penetration Testing Services
                        </div>
                        <div className=' pt-20 max-w-sm font-bold text-2xl leading-normal text-[#364152]'>
                            We combine expert knowledge, advanced tools, and a personalized approach to ensure your systems are protected from potential threats.
                        </div>
                    </div>
                    <div className='grid grid-cols-4 text-[#121926]'>
                        <div className='border-t-4 p-8 flex flex-col gap-4 border-[#0047FF]'>
                            <h1 className="text-[20px] font-bold leading-[140%] tracking-[0.4px]">
                                Comprehensive Assessments
                            </h1>
                            <p className='text-base font-normal leading-[140%] tracking-[0.32px] text-[#364152]'>
                                Our team of seasoned security professionals conducts in-depth penetration tests, simulating real-world attack scenarios. We cover all layers of your infrastructure, from web applications and mobile apps to networks and cloud environments
                            </p>
                        </div>
                        <div className='border-t-4 p-8 flex flex-col gap-4 border-[#46A7DE]'>
                            <h1 className="text-[20px] font-bold leading-[140%] tracking-[0.4px]">
                                Tailored Approach
                            </h1>
                            <p className='text-base font-normal leading-[140%] tracking-[0.32px] text-[#364152]'>
                                We understand that every organization has unique security needs. Our penetration testing services are customized to meet your specific requirements, ensuring that all potential vulnerabilities are identified and addressed.
                            </p>
                        </div>
                        <div className='border-t-4 p-8 flex flex-col gap-4 border-[#FF4C00]'>
                            <h1 className="text-[20px] font-bold leading-[140%] tracking-[0.4px]">
                                Actionable Insights
                            </h1>
                            <p className='text-base font-normal leading-[140%] tracking-[0.32px] text-[#364152]'>
                                Our detailed reports go beyond merely identifying vulnerabilities. We provide clear, actionable recommendations that help you strengthen your security posture and protect your critical assets.
                            </p>
                        </div>
                        <div className='border-t-4 p-8 flex flex-col gap-4 border-[#AD00FF]'>
                            <h1 className="text-[20px] font-bold leading-[140%] tracking-[0.4px]">
                                Regulatory Compliance
                            </h1>
                            <p className='text-base font-normal leading-[140%] tracking-[0.32px] text-[#364152]'>
                                Whether you need to meet specific regulatory requirements or simply want to bolster your security defenses, our penetration testing services can help you achieve and maintain compliance with industry standards.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features
