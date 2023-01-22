import Head from "next/head";
import Link from 'next/link';

import imageUrlBuilder from '@sanity/image-url'
import client from '../../client'
import React from "react";

const Blogs = ({ blogs }) => {

    const builder = imageUrlBuilder(client);

    function urlFor(source) {
        return builder.image(source)
    }
    return (
        <div>
            <Head>
                <title>Blogs</title>

                <link rel="canonical" href='http://smartcaresupaul.in/page/blogs' />
                <meta property="og:title" content='Blogs' key="title" />
                <meta name="description" content='Smart Care - all offers & care prodcut posts regular publish here' />
                <link rel="shortcut icon" type="image/x-icon" href="/favicon.png" />
                <meta name='subject' content='Home Appliances Repair In Supaul' />

            </Head>


            {/* ====== Blog Section Start */}

            <section className="text-gray-600 body-font">
                <div className="container max-w-7xl pt-24 pb-8 px-3 mx-auto">
                    <h2 className="text-center text-2xl font-semibold mb-12 text-black">
                        Blogs & Updates

                    </h2>
                    <div className="flex flex-wrap">
                        {!blogs.length > 0 && <p>No Blogs Post</p>}
                        {blogs.length > 0 && (

                            blogs.map((b) => (

                                <div key={b._id} className="md:w-1/3">
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


            {/* ====== Blog Section End */}
        </div>

    )
}

export async function getServerSideProps(context) {
    const blogs = await client.fetch(`*[_type == "post"]`);

    return {
        props: {
            blogs
        }
    };
}



export default Blogs;