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

            <section className="text-white bg-gray-100">
                <div className="container max-w-7xl px-6 py-12 md:py-24 mx-auto">
                    <div className="grid md:grid-cols-4 grid-cols-2 gap-2">
                        <div className="p-4 bg-blue-700 rounded-lg grid content-center justify-center">
                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-white mb-3">
                                <ScrollTrigger onEnter={() => setcounter(true)}>
                                    {counter && <CountUp
                                        start={0}
                                        end={900}
                                        duration={2.75} />} +
                                </ScrollTrigger>

                            </h2>
                            <p className="leading-relaxed">Customers</p>
                        </div>
                        <div className="p-4 bg-blue-700 rounded-lg grid content-center justify-center">
                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-white mb-3">
                                {counter && <CountUp
                                    start={0}
                                    end={9}
                                    duration={3.75} />} +
                            </h2>
                            <p className="leading-relaxed">Services</p>
                        </div>
                        <div className="p-4 bg-blue-700 rounded-lg grid content-center justify-center">
                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-white mb-3">
                                {counter && <CountUp
                                    start={0}
                                    end={18}
                                    duration={2.75} />} +
                            </h2>
                            <p className="leading-relaxed">Technicians</p>
                        </div>
                        <div className="p-4 bg-blue-700 rounded-lg grid content-center justify-center">
                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-white mb-3">
                                {counter && <CountUp
                                    start={0}
                                    end={32}
                                    duration={4.75} />} +
                            </h2>
                            <p className="leading-relaxed">Partners</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* steps */}
            <section className="body-font">
                <h2 className="text-2xl md:text-4xl mt-12 font-semibold text-center">Simple Steps</h2>
                <div className="container max-w-7xl px-5 py-16 mx-auto flex flex-wrap">


                    <div className="flex flex-wrap w-full">
                        <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
                            <div className="flex relative pb-12">
                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                    <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                                </div>
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-700 inline-flex items-center justify-center text-white relative z-10">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                    </svg>

                                </div>
                                <div className="flex-grow pl-4">
                                    <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                                        STEP 1
                                    </h2>
                                    <p className="leading-relaxed">
                                        Book Our Service Using Our Official Website, App & You Can Call Directly
                                    </p>
                                </div>
                            </div>
                            <div className="flex relative pb-12">
                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                    <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                                </div>
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-700 inline-flex items-center justify-center text-white relative z-10">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                    </svg>
                                </div>
                                <div className="flex-grow pl-4">
                                    <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                                        STEP 2
                                    </h2>
                                    <p className="leading-relaxed">
                                        Our Customer Care Excutive Call On Your Provided Number And Confirm Your Service Request.
                                    </p>
                                </div>
                            </div>
                            <div className="flex relative pb-12">
                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                    <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                                </div>
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-700 inline-flex items-center justify-center text-white relative z-10">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
                                    </svg>

                                </div>
                                <div className="flex-grow pl-4">
                                    <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                                        STEP 3
                                    </h2>
                                    <p className="leading-relaxed">
                                        Our Technician Visit On your Provided Address And Resolve Your Issue.
                                    </p>
                                </div>
                            </div>
                            <div className="flex relative pb-12">
                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                    <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                                </div>
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-700 inline-flex items-center justify-center text-white relative z-10">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                                    </svg>

                                </div>
                                <div className="flex-grow pl-4">
                                    <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                                        STEP 4
                                    </h2>
                                    <p className="leading-relaxed">
                                        After Repair You Pay By Invoice Ammount - Genrtated By SmartCare
                                    </p>
                                </div>
                            </div>
                            <div className="flex relative">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-700 inline-flex items-center justify-center text-white relative z-10">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>

                                </div>
                                <div className="flex-grow pl-4">
                                    <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                                        FINISH
                                    </h2>
                                    <p className="leading-relaxed">
                                        You Can Rate Our Service & Recommend To Your Freinds, if SATISFIED.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-blue-700 bg-[url(https://us.123rf.com/450wm/mar1ar1/mar1ar11810/mar1ar1181000342/mar1ar1181000342.jpg?ver=6)] rounded-lg lg:w-3/5 md:w-full object-cover object-center md:mt-0 mt-12 grid content-center justify-items-center p-12">
                            <h3 className="text-lg text-white">Smart Care Supaul</h3>
                            <h3 className="text-lg md:text-4xl font-bold text-white">Simple Steps</h3>
                            <p className="text-white mt-4 text-xs lg:txt-base">Customer Helpline Number - 8825105519</p>
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
                                            <h2 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                <Link href={`/blog/${b.slug.current}`}>{b.title}</Link>
                                            </h2>
                                            <p className="leading-relaxed mb-3">
                                                {b.metadesc}
                                            </p>
                                            <div className="flex items-center flex-wrap ">
                                                <Link href={`/blog/${b.slug.current}`} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
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
                                                </Link>
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