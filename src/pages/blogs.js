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

                <link rel="canonical" href='/page/blogs' />
                <meta property="og:title" content='Blogs' key="title" />

                <link rel="shortcut icon" type="image/x-icon" href="/favicon.png" />
                <meta name='subject' content='Home Appliances Repair In Supaul' />

            </Head>
            {/* ====== Blog Section Start */}
            <section className="">
                <div className="mx-auto max-w-7xl pt-20 md:pt-24 pb-12">
                    <div className="flex flex-wrap justify-center">
                        <div className="w-full px-4">
                            <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                                <span className="text-primary mb-2 block text-lg font-semibold">
                                    Our Blogs
                                </span>
                                <h2 className="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]">
                                    Our Recent News
                                </h2>

                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">


                        {blogs.length < 0 && <p>No Blogs Post</p>}
                        {blogs.length > 0 && (

                            blogs.map((b) => (


                                <div key={b._id} className="w-full bg-gray-200 rounded-lg p-6">
                                    <div className="w-full">
                                        <div className="mb-8 bg-gray-100 overflow-hidden rounded-2xl">

                                            <img
                                                src={urlFor(b.mainImage).width(600).url()}
                                                alt={b.altText}
                                                loading="lazy"
                                                width={1000}
                                                height={667}
                                                className="w-full"
                                            />
                                        </div>
                                        <div>
                                            <span className="bg-blue-500 mb-5 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-white">
                                                {b.publishedAt}
                                            </span>
                                            <h3>
                                                <Link
                                                    href={`/blog/${b.slug.current}`}
                                                    className="text-dark hover:text-blue-700 mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
                                                >
                                                    {b.title}
                                                </Link>
                                            </h3>

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