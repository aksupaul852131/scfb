import React from "react";
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

        </>


    )
}

export default Hero;