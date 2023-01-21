import React from "react";
import Link from 'next/link'

const Hero = () => {
    return (
        <>

            <div className=''>
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 pt-32 pb-8 font-['Poppins'] grid grid-cols-1">

                    <div className="grid grid-cols-4 gap-8 px-4">
                        <div className="grid grid-cols-1 justify-items-center">
                            <img src='/opt/opt1.png' />
                            <h3 className="text-center mt-2 font-medium text-xs lg:text-base">AC Repair</h3>
                        </div>

                        <img src='/opt/opt1.png' />
                        <img src='/opt/opt1.png' />
                        <img src='/opt/opt1.png' />
                        <img src='/opt/opt1.png' />
                        <img src='/opt/opt1.png' />
                        <img src='/opt/opt1.png' />
                        <img src='/opt/opt1.png' />
                        <img src='/opt/opt1.png' />
                    </div>
                </div>
            </div>

            <div className="relative rounded-xl mx-auto max-w-7xl ">

                <div className="relative w-full flex gap-2 snap-x snap-mandatory no-scrollbar overflow-x-auto mb-6 md:pb-14 mt-8 select-none">

                    <div className="snap-center shrink-0 first:pl-4 last:pr-2">

                        <div className="group">
                            <div className="relative overflow-hidden">
                                <Link href='/service/ac-service-centre-in-supaul'>
                                    <img
                                        src="/ac-repair.png"
                                        alt="art cover"
                                        loading="lazy"
                                        width={1000}
                                        height={667}
                                        className="shrink-0 w-60 h-32 rounded-lg shadow-xl object-cover object-top transition duration-500 group-hover:scale-105"
                                    />
                                </Link>
                            </div>
                        </div>

                    </div>


                    <div className="snap-center shrink-0 first:pl-2 last:pr-0">
                        <div className="group">
                            <div className="relative overflow-hidden">
                                <Link href='/service/ac-service-centre-in-supaul'>
                                    <img
                                        src="/air-purifier.png"
                                        alt="art cover"
                                        loading="lazy"
                                        width={1000}
                                        height={667}
                                        className="shrink-0 w-60 h-32 rounded-lg shadow-xl object-cover object-top transition duration-500 group-hover:scale-105"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>


                    <div className="snap-center shrink-0 first:pl-2 last:pr-0">
                        <div className="group">
                            <div className="relative overflow-hidden">
                                <Link href='/service/ac-service-centre-in-supaul'>
                                    <img
                                        src="/tv-repair.png"
                                        alt="art cover"
                                        loading="lazy"
                                        width={1000}
                                        height={667}
                                        className="shrink-0 w-60 h-32 rounded-lg shadow-xl object-cover object-top transition duration-500 group-hover:scale-105"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>


                    <div className="snap-center shrink-0 first:pl-2 last:pr-0">
                        <div className="group">
                            <div className="relative overflow-hidden">
                                <Link href='/service/ac-service-centre-in-supaul'>
                                    <img
                                        src="/ro-repair.png"
                                        alt="art cover"
                                        loading="lazy"
                                        width={1000}
                                        height={667}
                                        className="shrink-0 w-60 h-32 rounded-lg shadow-xl object-cover object-top transition duration-500 group-hover:scale-105"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="snap-center shrink-0 first:pl-2 last:pr-0">
                        <div className="group">
                            <div className="relative overflow-hidden">
                                <Link href='/service/ac-service-centre-in-supaul'>
                                    <img
                                        src="/geyser-repair.png"
                                        alt="art cover"
                                        loading="lazy"
                                        width={1000}
                                        height={667}
                                        className="shrink-0 w-60 h-32 rounded-lg shadow-xl object-cover object-top transition duration-500 group-hover:scale-105"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="snap-center shrink-0 first:pl-2 last:pr-0">
                        <div className="group">
                            <div className="relative overflow-hidden">
                                <Link href='/service/ac-service-centre-in-supaul'>
                                    <img
                                        src="/washing-machine1.png"
                                        alt="art cover"
                                        loading="lazy"
                                        width={1000}
                                        height={667}
                                        className="shrink-0 w-60 h-32 rounded-lg shadow-xl object-cover object-top transition duration-500 group-hover:scale-105"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="bg-blue-700 py-16 font-[Poppins] px-6">

                <div className="mx-auto max-w-7xl grid grid-cols-6 gap-4">

                    <div className="bg-white w-full rounded-lg col-span-3 py-4 px-2">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 content-center h-full">
                            <div className="grid justify-items-center">
                                <img src='/customer-care-smartcare.webp' className="w-48" />
                            </div>
                            <div className="md:mr-6 sm:mt-3 grid content-center pl-2">
                                <h3 className="text-xs mb-2 md:text-lg font-semibold ">Customer Support </h3>
                                <div className="flex items-center hover:text-blue-700">
                                    <p className="text-xs text-gray-700 mr-2 hover:text-blue-700 select-none">Inquary Now</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                    </svg>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className="bg-white w-full h-full rounded-lg col-span-3 row-span-1 md:row-span-2 py-4 px-2">
                        <div className="grid grid-cols-1 gap-2 content-center h-full">
                            <div className="grid justify-items-center">
                                <img src='/electrician-supaul.webp' className="w-48" />
                            </div>
                            <div className="md:mr-6 sm:mt-3 grid content-center pl-2">
                                <div className="flex mb-2 ">
                                    <h3 className="text-xs md:text-lg font-semibold ">Electrician Supaul</h3>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="ml-1 w-3 md:w-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </div>

                                <p className="text-xs text-gray-700 mr-2 hover:text-blue-700 select-none">We Have Professional & Trained Electricians.</p>

                            </div>
                        </div>
                    </div>

                    <div className="bg-white w-full h-44 rounded-lg col-span-6 md:col-span-3 py-4 px-2">
                        <div className="grid grid-cols-2 gap-2 content-center h-full">
                            <div className="grid justify-items-center">
                                <img src='/home-repairs.webp' className="w-48" />
                            </div>
                            <div className="md:mr-6 sm:mt-3 grid content-center pl-2">
                                <div className="flex mb-2">
                                    <h3 className="text-xs md:text-lg font-semibold">Home Repair </h3>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="ml-1 w-3 md:w-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </div>

                                <p className="text-xs text-gray-700 mr-2 hover:text-blue-700 select-none">Complete Solution Of Home Appliances & Repair Installtion Services</p>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>


    )
}

export default Hero;