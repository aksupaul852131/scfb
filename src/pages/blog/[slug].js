import { PortableText } from '@portabletext/react'
import client from '../../../client'

import imageUrlBuilder from '@sanity/image-url'
import Link from "next/link";
import Head from "next/head";
import StructuredData from "../../components/StructuredData"

function urlFor(source) {
    return imageUrlBuilder(client).image(source)
}

const ptComponents = {
    types: {
        image: ({ value }) => {
            if (!value?.asset?._ref) {
                return null
            }
            return (
                <img
                    alt={value.alt || 'smart care supaul'}
                    loading="lazy"
                    src={urlFor(value).width(800).fit('max').auto('format')}
                />
            )
        }
    }
}

const Slug = ({ post, relatedPosts }) => {

    const structuredData =
    {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `http://smartcaresupaul.in/post/${post.slug.current}`
        },
        "headline": post.title,
        "description": post.metadesc,
        "image": `${urlFor(post.mainImage).width(800).fit('max').auto('format')}`,
        "author": {
            "@type": "Organization",
            "name": "Smart Care",
            "url": "http://smartcaresupaul.in/page/about-us"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Smart Care",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.smartcaresupaul.in/logo1.png"
            }
        },
        "datePublished": "2023-01-02"
    }

    return (
        <div>
            <Head>
                <title>{post.title}</title>
                <meta name="description" content={post.metadesc} />
                <meta name='subject' content='Blog - Smart Care' />

                <link rel="canonical" href={`http://smartcaresupaul.in/post/${post.slug.current}`} />

                <meta property="og:url" content={`http://smartcaresupaul.in/post/${post.slug.current}`} />
                <meta property="og:title" content={post.title} key="title" />
                <meta property="og:description" content={post.metadesc} key="description" />
                <meta property="og:image" content={`${urlFor(post.mainImage).width(600).fit('max').auto('format')}`} />
                <link rel="shortcut icon" type="image/x-icon" href="/favicon.png" />


                {/* schema */}
                <StructuredData data={structuredData} />

            </Head>
            <main className="pt-20 pb-16 lg:pt-24 lg:pb-24 bg-white dark:bg-gray-900">
                <div className="mx-auto max-w-7xl">
                    <article className="mx-auto w-full max-w-2xl px-2 format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                        <h1 className="text-2xl font-bold">{post.title}</h1>
                        <div className='mt-4 flex'><div className=' bg-blue-700 w-2 mr-3'></div><p>{post.publishedAt}</p></div>

                        {/* maun image */}
                        <figure>
                            <img
                                className="mt-12 mb-8 w-full "
                                src={urlFor(post.mainImage).width(800).fit('max').auto('format')}
                                alt={post.altText}
                            />
                            <figcaption className="text-center">{post.altText}</figcaption>
                        </figure>

                        {/* article */}
                        <div className="mt-6 mb-8 single-article">
                            <PortableText
                                value={post.body}
                                components={ptComponents}
                            />
                        </div>
                        <hr />
                        <section className="mt-12">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
                                    Discussion (20)
                                </h2>
                            </div>
                            <form className="mb-6">
                                <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                                    <label htmlFor="comment" className="sr-only">
                                        Your comment
                                    </label>
                                    <textarea
                                        id="comment"
                                        rows={6}
                                        className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                                        placeholder="Write a comment..."
                                        required=""
                                        defaultValue={""}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-500 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
                                >
                                    Post comment
                                </button>
                            </form>

                            <article className="p-6 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                                <footer className="flex justify-between items-center mb-2">
                                    <div className="flex items-center">
                                        <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                                            <img
                                                className="mr-2 w-6 h-6 rounded-full"
                                                src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                                                alt="Helene Engels"
                                            />
                                            Helene Engels
                                        </p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            <time
                                                pubdate=""
                                                dateTime="2022-06-23"
                                                title="June 23rd, 2022"
                                            >
                                                Jun. 23, 2022
                                            </time>
                                        </p>
                                    </div>
                                    <button
                                        id="dropdownComment4Button"
                                        data-dropdown-toggle="dropdownComment4"
                                        className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                        type="button"
                                    >
                                        <svg
                                            className="w-5 h-5"
                                            aria-hidden="true"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
                                        </svg>
                                    </button>
                                    {/* Dropdown menu */}
                                    <div
                                        id="dropdownComment4"
                                        className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                                    >
                                        <ul
                                            className="py-1 text-sm text-gray-700 dark:text-gray-200"
                                            aria-labelledby="dropdownMenuIconHorizontalButton"
                                        >
                                            <li>
                                                <Link
                                                    href="#"
                                                    className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                >
                                                    Edit
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                >
                                                    Remove
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                >
                                                    Report
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </footer>
                                <p>
                                    I recently used the services of Smart Care Home Appliances for repairing my fridge and I couldn&apos;t be happier with the results. The technician was prompt, professional and efficient in identifying and fixing the issue. The website was easy to navigate and the booking process was seamless. I highly recommend Smart Care Home Appliances for anyone in need of appliance repairs.
                                </p>
                                <div className="flex items-center mt-4 space-x-4">
                                    <button
                                        type="button"
                                        className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400"
                                    >
                                        <svg
                                            aria-hidden="true"
                                            className="mr-1 w-4 h-4"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                            />
                                        </svg>
                                        Reply
                                    </button>
                                </div>
                            </article>
                        </section>
                    </article>
                </div>
            </main>

            {/*  related posts */}
            <aside
                aria-label="Related articles"
                className="py-8 lg:py-24 bg-gray-50 dark:bg-gray-800"
            >
                <div className="px-4 mx-auto max-w-screen-xl">
                    <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
                        Related articles
                    </h2>

                    <div className="flex flex-wrap">
                        {!relatedPosts.length > 0 && <p>No Related Post</p>}
                        {relatedPosts.length > 0 && (

                            relatedPosts.map((b) => (

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
            </aside>
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-md sm:text-center">
                        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                            Sign up for our newsletter
                        </h2>
                        <p className="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400">
                            Stay up to date with Latest Offers & more, announcements and exclusive
                            discounts feel free to sign up with your email.
                        </p>
                        <form action="#">
                            <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                                <div className="relative w-full">
                                    <label
                                        htmlFor="email"
                                        className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >
                                        Email address
                                    </label>
                                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                        <svg
                                            className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                        </svg>
                                    </div>
                                    <input
                                        className="block p-3 pl-10 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Enter your email"
                                        type="email"
                                        id="email"
                                        required=""
                                    />
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-blue-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                    >
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                            <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300">
                                We care about the protection of your data.{" "}
                                <Link
                                    href="/page/privacy-policy"
                                    className="font-medium text-primary-600 dark:text-primary-500 hover:underline"
                                >
                                    Read our Privacy Policy
                                </Link>
                                .
                            </div>
                        </form>
                    </div>
                </div>
            </section>


        </div>
    )
}



export async function getServerSideProps(context) {
    const { slug } = context.query


    const post = await client.fetch(`*[_type == "post" && slug.current == '${slug}'][0]`);

    // related posts

    const relatedPosts = await client.fetch(`*[_type == "post" && slug.current != '${slug}']`);

    // comments

    const comments = await client.fetch(`*[_type == "comment"]`);

    console.log(post);
    return {
        props: {
            post,
            relatedPosts,
        }
    };
}

export default Slug;