import React from "react";
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
    return (
        <>

            <div className=''>
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 pt-32 pb-8 font-['Poppins']">

                    <div className=''>
                        <h2 className='text-2xl md:text-4xl font-bold text-center'>What we can fix for you</h2>
                        <div className='flex justify-center'>
                            <div className='bg-white shadow-lg border py-4 px-8 rounded-full w-full md:w-4/5 m-4 md:mt-10 mx-2 flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 stroke-black">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>
                                <input

                                    type="text"
                                    placeholder="Search"
                                    className="outline-none px-2 bg-white text-white ml-6 w-full"
                                />
                            </div>
                        </div>
                        <p className='text-xs md:text-base font-medium text-center'><u><Link href="/page/supaul"> Supaul</Link></u> popular: <Link href='/page/ac-repair-supaul' className='text-white bg-black px-3 rounded-full ml-4'>AC Repair</Link> <Link href='/page/fridge-repair-supaul' className='text-white bg-black px-3 rounded-full ml-2'>Fridge</Link> </p>
                    </div>

                </div>

            </div>
            <div className="bg-white">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-8 md:py-16 font-['Poppins']">
                    <h2 className="text-2xl md:text-4xl font-semibold text-center">Select Your Service</h2>
                    <div className="mt-10 grid gap-4 md:gap-8 grid-cols-2 lg:grid-cols-3">


                        <div className="group">
                            <div className="relative overflow-hidden">
                                <img
                                    src="/ac-repair.png"
                                    alt="art cover"
                                    loading="lazy"
                                    width={1000}
                                    height={667}
                                    className="w-full object-cover object-top transition duration-500 group-hover:scale-105"
                                />
                            </div>
                        </div>

                        <div className="group">
                            <div className="relative overflow-hidden">
                                <img
                                    src="/air-purifier.png"
                                    alt="art cover"
                                    loading="lazy"
                                    width={1000}
                                    height={667}
                                    className="w-full object-cover object-top transition duration-500 group-hover:scale-105"
                                />
                            </div>
                        </div>

                        <div className="group">
                            <div className="relative overflow-hidden">
                                <img
                                    src="/tv-repair.png"
                                    alt="art cover"
                                    loading="lazy"
                                    width={1000}
                                    height={667}
                                    className="w-full object-cover object-top transition duration-500 group-hover:scale-105"
                                />
                            </div>
                        </div>

                        <div className="group">
                            <div className="relative overflow-hidden">
                                <img
                                    src="/ro-repair.png"
                                    alt="art cover"
                                    loading="lazy"
                                    width={1000}
                                    height={667}
                                    className="w-full object-cover object-top transition duration-500 group-hover:scale-105"
                                />
                            </div>
                        </div>
                        <div className="group">
                            <div className="relative overflow-hidden">
                                <img
                                    src="/geyser-repair.png"
                                    alt="art cover"
                                    loading="lazy"
                                    width={1000}
                                    height={667}
                                    className="w-full object-cover object-top transition duration-500 group-hover:scale-105"
                                />
                            </div>
                        </div>

                        <div className="group">
                            <div className="relative overflow-hidden">
                                <img
                                    src="/washing-machine1.png"
                                    alt="art cover"
                                    loading="lazy"
                                    width={1000}
                                    height={667}
                                    className="w-full object-cover object-top transition duration-500 group-hover:scale-105"
                                />
                            </div>
                        </div>






                    </div>
                    {/* <Image className='mt-8 w-full' src={"/aprepair.png"} alt={""} width='2000' height={'100'}
                    /> */}
                </div>
            </div>




        </>


    )
}

export default Hero;