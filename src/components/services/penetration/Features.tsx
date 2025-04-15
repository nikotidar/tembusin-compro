import React from 'react'

function Features() {
    const before = "before:absolute before:-bottom-6 before:-right-11 before:w-20 before:h-28 before:bg-none before:rounded-bl-[2rem] before:shadow-[inset_36px_-30px_0_white]"
    return (
        <div className='select-none bg-[#C0C7E1] flex flex-col gap-32'>
            <div className='
            relative
            mx-auto bg-white max-w-7xl rounded-b-[2.5rem] rounded-tr-none pb-14 
            '>
                <div id='shape' className={` ${before} select-none absolute w-9/12 h-32 z-0 bg-white -top-[122px] rounded-t-[2.5rem]`} />
                <div id='content' className=' px-24 flex flex-col gap-16'>
                    <div className=' flex justify-end gap-20 text-black px-10'>
                        <div className='z-50 text-[64px] -mt-14 font-extrabold text-[#2E449C] leading-[130%] md:tracking-[1px] tracking-[1.28px]'>
                            Why You’ll Love Our Penetration Testing Services
                        </div>
                        <div className='z-10 pt-16 max-w-sm font-bold text-2xl leading-normal text-[#364152]'>
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
            <div className='relative w-full min-h-40 md:px-[164px] px-4 h-[550px]'>
                <div className='w-full flex items-end'>
                    <div className='text-[#2E449C] text-[50px] font-bold leading-[130%] md:tracking-[1px] tracking-[1px] max-w-md'>Our Penetration Testing Process</div>
                    <svg className="w-auto h-[2px] bg-[#46A7DE] mb-5" viewBox="0 0 600 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 1H600" stroke="#C0C7E0" stroke-width="4" stroke-dasharray="12 12" />
                    </svg>
                </div>
                <div className='absolute mx-auto max-w-7xl mt-16 grid grid-cols-3 gap-y-[29px] gap-x-10'>
                    <div className='flex w-full p-6 flex-col items-start gap-4 rounded-lg border border-[#DDDFE5] bg-white shadow-[0_8px_24px_0_rgba(0,0,0,0.08),_0_8px_16px_0_rgba(0,0,0,0.10)]'>
                        <div className='text-[36px] font-bold leading-[140%] tracking-[0.72px] text-[#46A7DE]'>01</div>
                        <div className='text-[18px] font-bold leading-[140%] tracking-[0.36px] text-[#121926]'>Scoping</div>
                        <div className='text-[16px] font-normal leading-[140%] tracking-[0.32px] text-[#364152]'>We work with you to understand your goals, scope, and the areas that require testing.</div>
                    </div>
                    <div className='flex w-full p-6 flex-col items-start gap-4 rounded-lg border border-[#DDDFE5] bg-white shadow-[0_8px_24px_0_rgba(0,0,0,0.08),_0_8px_16px_0_rgba(0,0,0,0.10)]'>
                        <div className='text-[36px] font-bold leading-[140%] tracking-[0.72px] text-[#46A7DE]'>02</div>
                        <div className='text-[18px] font-bold leading-[140%] tracking-[0.36px] text-[#121926]'>Reconnaissance</div>
                        <div className='text-[16px] font-normal leading-[140%] tracking-[0.32px] text-[#364152]'>Our experts gather information about your systems to identify potential entry points.</div>
                    </div>
                    <div className='flex w-full p-6 flex-col items-start gap-4 rounded-lg border border-[#DDDFE5] bg-white shadow-[0_8px_24px_0_rgba(0,0,0,0.08),_0_8px_16px_0_rgba(0,0,0,0.10)]'>
                        <div className='text-[36px] font-bold leading-[140%] tracking-[0.72px] text-[#46A7DE]'>03</div>
                        <div className='text-[18px] font-bold leading-[140%] tracking-[0.36px] text-[#121926]'>Exploitation</div>
                        <div className='text-[16px] font-normal leading-[140%] tracking-[0.32px] text-[#364152]'>We simulate attacks to test the effectiveness of your current security measures.</div>
                    </div>
                    <div className='flex w-full p-6 flex-col items-start gap-4 rounded-lg border border-[#DDDFE5] bg-white shadow-[0_8px_24px_0_rgba(0,0,0,0.08),_0_8px_16px_0_rgba(0,0,0,0.10)]'>
                        <div className='text-[36px] font-bold leading-[140%] tracking-[0.72px] text-[#46A7DE]'>04</div>
                        <div className='text-[18px] font-bold leading-[140%] tracking-[0.36px] text-[#121926]'>Reporting</div>
                        <div className='text-[16px] font-normal leading-[140%] tracking-[0.32px] text-[#364152]'>A comprehensive report is provided, detailing the vulnerabilities discovered and offering clear steps for remediation.</div>
                    </div>
                    <div className='flex w-full p-6 flex-col items-start gap-4 rounded-lg border border-[#DDDFE5] bg-white shadow-[0_8px_24px_0_rgba(0,0,0,0.08),_0_8px_16px_0_rgba(0,0,0,0.10)]'>
                        <div className='text-[36px] font-bold leading-[140%] tracking-[0.72px] text-[#46A7DE]'>05</div>
                        <div className='text-[18px] font-bold leading-[140%] tracking-[0.36px] text-[#121926]'>Remediation Support</div>
                        <div className='text-[16px] font-normal leading-[140%] tracking-[0.32px] text-[#364152]'>Our team is available to assist with remediation efforts, ensuring that vulnerabilities are effectively addressed.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features
