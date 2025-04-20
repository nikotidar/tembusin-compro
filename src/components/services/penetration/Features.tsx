import React from 'react'

function Features() {
    const before = "before:absolute before:-bottom-[29px] md:before:-bottom-6 before:-right-11 before:w-20 before:h-16 md:before:h-28 before:bg-none before:rounded-bl-[1rem] md:before:rounded-bl-[2rem] before:shadow-[inset_36px_-30px_0_white]"
    const data = [
        {
            number: "01",
            title: "Scoping",
            desc: "We work with you to understand your goals, scope, and the areas that require testing."
        },
        {
            number: "02",
            title: "Reconnaissance",
            desc: "Our experts gather information about your systems to identify potential entry points."
        },
        {
            number: "03",
            title: "Exploitation",
            desc: "We simulate attacks to test the effectiveness of your current security measures."
        },
        {
            number: "04",
            title: "Reporting",
            desc: "A comprehensive report is provided, detailing the vulnerabilities discovered and offering clear steps for remediation."
        },
        {
            number: "05",
            title: "Remediation Support",
            desc: "Our team is available to assist with remediation efforts, ensuring that vulnerabilities are effectively addressed."
        }
    ]
    return (
        <div className='select-none bg-[#C0C7E1] flex flex-col gap-20 md:gap-32 max-sm:px-4'>
            <div className='
            relative
            mx-auto bg-white max-w-7xl rounded-b-[1rem] md:rounded-b-[2.5rem] rounded-tr-none pb-14 
            '>
                <div id='shape' className={` ${before} select-none absolute w-9/12 h-14 md:h-32 z-0 bg-white -top-[55px] md:-top-[122px] rounded-t-[1rem] md:rounded-t-[2.5rem]`} />
                <div id='content' className=' md:px-24 flex flex-col gap-8 md:gap-16'>
                    <div className=' flex max-sm:flex-col justify-start md:justify-end gap-6 md:gap-20 text-black px-4 md:px-10'>
                        <div className='z-50 text-4xl md:text-[64px] mt-2 md:-mt-14 font-extrabold text-[#2E449C] leading-[130%] md:tracking-[1px] tracking-[1.28px]'>
                            Why You’ll Love Our Penetration Testing Services
                        </div>
                        <div className='z-10 md:pt-16 max-w-sm font-bold text-2xl leading-normal text-[#364152]'>
                            We combine expert knowledge, advanced tools, and a personalized approach to ensure your systems are protected from potential threats.
                        </div>
                    </div>
                    <div className='max-sm:px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 gap-x-0 text-[#121926]'>
                        <div className='border-t-4 p-8 flex flex-col gap-4 border-[#0047FF]'>
                            <h1 className="text-[20px] font-bold leading-[140%] tracking-[0.4px]">
                                Comprehensive Assessments
                            </h1>
                            <p className='text-base font-normal leading-[140%] tracking-[0.32px] text-[#364152]'>
                                Our team of seasoned security professionals conducts in-depth penetration tests, simulating real-world attack scenarios. We cover all layers of your infrastructure, from web applications and mobile apps to networks and cloud environments.
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
            <div className='relative w-full md:min-h-40 md:px-[164px] h-[1200px] md:h-[550px]'>
                <div className='w-full flex max-sm:flex-col md:items-end gap-10'>
                    <div className='text-[#2E449C] text-[50px] font-bold leading-[130%] md:tracking-[1px] tracking-[1px] max-w-md'>Our Penetration Testing Process</div>
                    <svg className="w-auto h-[2px] bg-[#46A7DE] mb-5" viewBox="0 0 600 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 1H600" stroke="#C0C7E0" stroke-width="4" stroke-dasharray="12 12" />
                    </svg>
                </div>
                <div className='absolute mx-auto max-w-7xl mt-10 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-[29px] gap-x-10'>
                    {data.map((item, i) => (
                        <div
                            key={i}
                            className='flex w-full p-6 flex-col items-start gap-4 rounded-lg border border-[#DDDFE5] bg-white shadow-[0_8px_24px_0_rgba(0,0,0,0.08),_0_8px_16px_0_rgba(0,0,0,0.10)]'
                        >
                            <div className='text-[36px] font-bold leading-[140%] tracking-[0.72px] text-[#46A7DE]'>
                                {item.number}
                            </div>
                            <div className='text-[18px] font-bold leading-[140%] tracking-[0.36px] text-[#121926]'>
                                {item.title}
                            </div>
                            <div className='text-[16px] font-normal leading-[140%] tracking-[0.32px] text-[#364152]'>
                                {item.desc}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Features
