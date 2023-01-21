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

            <section className="">
                <div className="container max-w-7xl px-4 py-12 md:py-24 mx-auto">
                    <div className="grid md:grid-cols-4 grid-cols-2 gap-2">
                        <div className="p-4 border rounded-lg grid content-center justify-items-center">
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
                        <div className="p-4 border rounded-lg grid content-center justify-items-center">
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
                        <div className="p-4 border rounded-lg grid content-center justify-items-center">
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
                        <div className="p-4 border rounded-lg grid content-center justify-items-center">
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

            <div className="bg-[#ffffff]">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-24 font-['Poppins']
                ">
                    <div className="lg:bg-gray-50 dark:lg:bg-darker lg:p-16 rounded-[4rem] space-y-6 md:flex flex-row-reverse md:gap-6 justify-center md:space-y-0 lg:items-center">
                        <div className="md:5/12 lg:w-1/2">
                            <img
                                src="app_sc.png"
                                alt="image"
                                loading="lazy"
                                width=""
                                height=""
                            />
                        </div>
                        <div className="md:7/12 lg:w-1/2">
                            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl dark:text-white">
                                Revolutionize Your Home Repair Experience with Smart Care Home Appliance Repair App
                            </h2>
                            <p className="my-8 text-gray-600 dark:text-gray-300">
                                The Smart Care Home Appliance Repair App is your one-stop solution for all your home appliance repair needs. Whether you need a refrigerator repair, efficient, and affordable.
                                Download the Smart Care Home Appliance Repair App today and experience the convenience of smart home repair service.
                            </p>
                            <div className="divide-y space-y-4 divide-gray-100 dark:divide-gray-800">
                                <div className="mt-8 flex gap-4 md:items-center">
                                    <div className="w-12 h-12 flex gap-4 rounded-full bg-indigo-100 dark:bg-indigo-900/20">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="w-6 h-6 m-auto text-indigo-500 dark:text-indigo-400"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <div className="w-5/6">
                                        <h4 className="font-semibold text-lg text-gray-700 dark:text-indigo-300">
                                            Customer Support
                                        </h4>
                                        <p className="text-gray-500 dark:text-gray-400">
                                            We are providing free consulting for your devices
                                        </p>
                                    </div>
                                </div>
                                <div className="pt-4 flex gap-4 md:items-center">
                                    <div className="w-12 h-12 flex gap-4 rounded-full bg-teal-100 dark:bg-teal-900/20">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="w-6 h-6 m-auto text-teal-600 dark:text-teal-400"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <div className="w-5/6">
                                        <h4 className="font-semibold text-lg text-gray-700 dark:text-teal-300">
                                            Anywhere in Supaul
                                        </h4>
                                        <p className="text-gray-500 dark:text-gray-400">
                                            Book our service in all over supaul
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <section className="">
                <div className="container max-w-7xl pb-8 pt-2 px-0 lg:px-4 mx-auto">
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