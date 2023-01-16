import Link from "next/link";
import imageUrlBuilder from '@sanity/image-url'
import client from '../../client'

function Blog({ blogs }) {

    const builder = imageUrlBuilder(client);

    function urlFor(source) {
        return builder.image(source)
    }
    return (

        <div className="bg-[#efefef]">



            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-14 md:py-32 font-['Poppins']">
                <div className="mb-12 space-y-2 text-center">
                    <h2 className="text-2xl md:text-4xl font-bold text-center">
                        Blog & Care
                    </h2>

                </div>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">


                    {!blogs.length > 0 && <p>No pets to show</p>}
                    {blogs.length > 0 && (

                        blogs.map((b) => (

                            <div key={b._id} className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
                                <div className="relative overflow-hidden rounded-xl">
                                    <img
                                        src={urlFor(b.mainImage).width(600).url()}
                                        alt="art cover"
                                        loading="lazy"
                                        width={1000}
                                        height={667}
                                        className="h-40 w-full object-cover object-top transition duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <div className="mt-6 relative">
                                    <h3 className="text-1xl font-semibold text-gray-900 dark:text-white">
                                        <Link href={`/blog/${b.slug.current}`}>{b.Slug}</Link>
                                    </h3>


                                </div>
                            </div>
                        ))

                    )}



                </div>
            </div>

            <div className="bg-white">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 pt-16 pb-24 font-['Poppins']">
                    <div>
                        <h2 className="text-center text-2xl font-semibold">
                            How We Are Work For You

                        </h2>
                    </div>
                    <div className="mt-16 px-2 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="p-8 py-12 px-12 md:px-12 rounded-3xl bg-[#F52E39] border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 shadow-2xl shadow-gray-600/10">
                            <div className="space-y-8">
                                <div
                                    aria-hidden="true"
                                    className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-50 dark:bg-gray-700"
                                >
                                    <span className="font-bold text-pink-600 dark:text-pink-300">
                                        1
                                    </span>
                                </div>
                                <p className="text-white dark:text-gray-300">
                                    Register Your Service Request Website/App
                                </p>

                            </div>
                        </div>
                        <div className="p-8 py-12 sm:p-12 rounded-3xl bg-[#F52E39] border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 shadow-2xl shadow-gray-600/10">
                            <div className="space-y-8">
                                <div
                                    aria-hidden="true"
                                    className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-50 dark:bg-gray-700"
                                >
                                    <span className="font-bold text-pink-600 dark:text-pink-300">
                                        2
                                    </span>
                                </div>
                                <p className="text-white dark:text-gray-300">
                                    Get A Confirmation Call From SmartCare
                                </p>

                            </div>
                        </div>
                        <div className="p-8 py-12 sm:p-12 rounded-3xl bg-[#F52E39] border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 shadow-2xl shadow-gray-600/10">
                            <div className="space-y-8">
                                <div
                                    aria-hidden="true"
                                    className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-50 dark:bg-gray-700"
                                >
                                    <span className="font-bold text-pink-600 dark:text-purple-300">
                                        3
                                    </span>
                                </div>
                                <p className="text-white dark:text-gray-300">
                                    Our Excutive Go To Your Door & Resolve Problem
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* /app */}

            <div className="bg-[#efefef]">
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


        </div>

    )
}

export default Blog;