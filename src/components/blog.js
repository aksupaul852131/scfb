import Link from "next/link";
import imageUrlBuilder from '@sanity/image-url'
import client from '../../client'
import ScrollTrigger from 'react-scroll-trigger';
import CountUp from 'react-countup';
import { useState } from "react";



function Blog({ blogs }) {

    const builder = imageUrlBuilder(client);

    function urlFor(source) {
        return builder.image(source)
    }

    const [counter, setcounter] = useState(false);
    return (

        <div className="bg-[#fffdfd]">

            <section className="bg-yellow-200">
                <div className="container max-w-7xl px-4 py-12 md:py-12 mb-12 mx-auto">
                    <div className="grid md:grid-cols-4 grid-cols-2 gap-2">
                        <div className="p-6 bg-white border-2 rounded-lg grid content-center justify-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 mb-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                            </svg>

                            <h3 className="title-font font-medium text-sm md:text-lg text-center text-black mb-3">
                                <ScrollTrigger onEnter={() => setcounter(true)}>
                                    {counter && <CountUp
                                        start={0}
                                        end={900}
                                        duration={2.75} />}+ Customers
                                </ScrollTrigger>
                            </h3>
                        </div>
                        <div className="p-6 bg-white border-2 rounded-lg grid content-center justify-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 mb-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                            </svg>

                            <h3 className="title-font font-medium text-sm md:text-lg text-center text-black mb-3">
                                <ScrollTrigger onEnter={() => setcounter(true)}>
                                    {counter && <CountUp
                                        start={0}
                                        end={26}
                                        duration={2.75} />} Teams Supaul
                                </ScrollTrigger>
                            </h3>
                        </div>
                        <div className="p-6 bg-white border-2 rounded-lg grid content-center justify-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 mb-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                            </svg>

                            <h3 className="title-font font-medium text-sm md:text-lg text-center text-black mb-3">
                                <ScrollTrigger onEnter={() => setcounter(true)}>
                                    {counter && <CountUp
                                        start={0}
                                        end={30}
                                        duration={2.75} />}+ Services
                                </ScrollTrigger>
                            </h3>
                        </div>
                        <div className="p-6 bg-white border-2 rounded-lg grid content-center justify-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 mb-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                            </svg>

                            <h3 className="title-font font-medium text-sm md:text-lg text-center text-black mb-3">
                                <ScrollTrigger onEnter={() => setcounter(true)}>
                                    {counter && <CountUp
                                        start={0}
                                        end={11}
                                        duration={2.75} />}+ Brand Partners
                                </ScrollTrigger>
                            </h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* /app */}


            <div className="bg-gray-100 font-[Poppins]">
                <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="absolute inset-x-0 top-0 items-center justify-center overflow-hidden flex inset-y-0">
                        <svg
                            viewBox="0 0 88 88"
                            className="w-full animate-pulse max-w-screen-xl text-indigo-300"
                        >
                            <circle fill="currentColor" cx="44" cy="44" r="15.5" />
                            <circle
                                fillOpacity="0.2"
                                fill="currentColor"
                                cx="44"
                                cy="44"
                                r="44"
                                className="animate-pulse"
                            />
                            <circle
                                fillOpacity="0.2"
                                fill="currentColor"
                                cx="44"
                                cy="44"
                                r="37.5"
                                className="animate-pulse"
                            />
                            <circle
                                fillOpacity="0.3"
                                fill="currentColor"
                                cx="44"
                                cy="44"
                                r="29.5"
                                className="animate-pulse"
                            />
                            <circle
                                fillOpacity="0.3"
                                fill="currentColor"
                                cx="44"
                                cy="44"
                                r="22.5"
                                className="animate-pulse"
                            />
                        </svg>
                    </div>
                    <div className="relative grid content-center justify-items-center grid-cols-1">


                        <img
                            src="app_sc.png"
                            alt="image"
                            loading="lazy"
                            className="w-4/5 md:w-2/6"
                        />
                        <h3 className="mt-6 font-bold text-2xl">स्मार्ट केयर सुपौल</h3>
                        <h2 className="mt-2 text-1xl font-bold text-gray-900 md:text-3xl text-center">
                            <span className="text-blue-700">SUPAUL</span> NO.1 - Home Service App
                        </h2>

                    </div>
                </div>
            </div>





            <section className="bg-white">
                <div className="container max-w-7xl pb-8 pt-8 px-0 lg:px-4 mx-auto">
                    <h2 className="text-2xl md:text-4xl font-semibold text-center">Blogs & Updates</h2>
                    <div className="pt-8 flex flex-wrap">
                        {!blogs.length > 0 && <p>No Blogs Post</p>}
                        {blogs.length > 0 && (

                            blogs.map((b) => (

                                <div key={b._id} className="p-4 md:w-1/3">
                                    <div className="h-full border-2 bg-white border-gray-200 border-opacity-60 rounded-2xl overflow-hidden">
                                        <img
                                            className="lg:h-48 md:h-36 w-full object-cover object-center"
                                            src={urlFor(b.mainImage).width(600).url()}
                                            alt="blog"
                                        />
                                        <div className="p-6">
                                            <span className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                                                Blog
                                            </span>
                                            <h2 className="title-font text-lg hover:text-blue-700 font-medium text-gray-900 mb-3">
                                                <Link href={`/blog/${b.slug.current}`}>{b.title}</Link>
                                            </h2>

                                            <div className="flex items-center flex-wrap ">
                                                Read More
                                                <svg
                                                    className="w-4 h-4 ml-2"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path d="M5 12h14" />
                                                    <path d="M12 5l7 7-7 7" />
                                                </svg>

                                                <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 ">
                                                    <svg
                                                        className="w-4 h-4 mr-1"
                                                        stroke="currentColor"
                                                        strokeWidth={2}
                                                        fill="none"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                                                    </svg>
                                                    1
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            ))

                        )}
                    </div>
                </div>
            </section>





        </div>

    )
}

export default Blog;