import Head from "next/head";
import Link from 'next/link';

import imageUrlBuilder from '@sanity/image-url'
import client from '../../client'

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
            <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
                <div className="container mx-auto">
                    <div className="-mx-4 flex flex-wrap justify-center">
                        <div className="w-full px-4">
                            <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                                <span className="text-primary mb-2 block text-lg font-semibold">
                                    Our Blogs
                                </span>
                                <h2 className="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]">
                                    Our Recent News
                                </h2>
                                <p className="text-body-color text-base">
                                    There are many variations of passages of Lorem Ipsum available but
                                    the majority have suffered alteration in some form.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="-mx-4 flex flex-wrap">


                        {!blogs.length > 0 && <p>No Blogs Post</p>}
                        {blogs.length > 0 && (

                            blogs.map((b) => (


                                <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                                    <div className="mx-auto mb-10 max-w-[370px]">
                                        <div className="mb-8 overflow-hidden rounded">
                                            <img
                                                src={urlFor(b.mainImage).width(600).url()}
                                                alt="art cover"
                                                loading="lazy"
                                                width={1000}
                                                height={667}
                                                className="w-full h-48"
                                            />
                                        </div>
                                        <div>
                                            <span className="bg-blue-500 mb-5 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-white">
                                                {b.publishedAt}
                                            </span>
                                            <h3>
                                                <Link
                                                    href={`/blog/${b.slug.current}`}
                                                    className="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
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