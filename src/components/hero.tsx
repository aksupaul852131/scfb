import React from "react";
import Link from 'next/link'

const Hero = () => {
    return (
        <>

            <div className=''>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-8 font-['Poppins'] grid grid-cols-1 lg:grid-cols-2 gap-8">

                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid grid-cols-1 justify-items-center">
                            <img src='/washing-machine1.png' />
                        </div>
                        <div className="grid grid-cols-1 justify-items-center">
                            <img src='/ac-repair.png' />
                        </div>
                        <div className="grid grid-cols-1 justify-items-center">
                            <img src='/geyser-repair.png' />
                        </div>
                        <div className="grid grid-cols-1 justify-items-center">
                            <img src='/tv-repair.png' />
                        </div>
                        {/* <div className="grid grid-cols-1 justify-items-center">
                            <img src='/opt/opt2.png' />
                            <h3 className="text-center mt-2 font-medium text-xs lg:text-base">TV Repair</h3>
                        </div>
                        <div className="grid grid-cols-1 justify-items-center">
                            <img src='/opt/opt4.png' />
                            <h3 className="text-center mt-2 font-medium text-xs lg:text-base">W. Machine</h3>
                        </div>
                        <div className="grid grid-cols-1 justify-items-center">
                            <img src='/opt/opt3.png' />
                            <h3 className="text-center mt-2 font-medium text-xs lg:text-base">Geyser</h3>
                        </div>

                        <div className="grid grid-cols-1 justify-items-center">
                            <img src='/opt/opt1.png' />
                            <h3 className="text-center mt-2 font-medium text-xs lg:text-base">AC Repair</h3>
                        </div>
                        <div className="grid grid-cols-1 justify-items-center">
                            <img src='/opt/opt2.png' />
                            <h3 className="text-center mt-2 font-medium text-xs lg:text-base">TV Repair</h3>
                        </div>
                        <div className="grid grid-cols-1 justify-items-center">
                            <img src='/opt/opt4.png' />
                            <h3 className="text-center mt-2 font-medium text-xs lg:text-base">W. Machine</h3>
                        </div>
                        <div className="grid grid-cols-1 justify-items-center">
                            <img src='/opt/opt3.png' />
                            <h3 className="text-center mt-2 font-medium text-xs lg:text-base">Geyser</h3>
                        </div> */}
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <img src='/opt/trend1.png' />
                        <img src='/opt/trend2.png' />
                    </div>
                </div>
            </div>


            <div className="bg-blue-700 py-16 mt-6 font-[Poppins] px-4">

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