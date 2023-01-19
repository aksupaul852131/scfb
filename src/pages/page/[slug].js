
import { PortableText } from '@portabletext/react'
import client from '../../../client'
import Head from 'next/head'

import imageUrlBuilder from '@sanity/image-url'
import React from 'react'

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
                    alt={value.alt || ' '}
                    loading="lazy"
                    src={`${urlFor(value).width(800).fit('max').auto('format')}`}
                />
            )
        }
    }
}

const Page = ({ page }) => {
    return (
        <div>
            <Head>
                <title>{page.title}</title>
                <meta name="description" content={page.metadesc} />
                <meta name='subject' content='Page | Smart Care' />

                <link rel="canonical" href={`http://smartcaresupaul.in/page/${page.slug.current}`} />
                <meta property="og:url" content={`http://smartcaresupaul.in/page/${page.slug.current}`} />


                <meta property="og:title" content={page.title} key="title" />
                <meta property="og:description" content={page.metadesc} key="description" />
                <meta property="og:image" content="https://ia.media-imdb.com/imahttps://www.smartcaresupaul.in/app_sc.pngges/rock.jpg" />
                <link rel="shortcut icon" type="image/x-icon" href="/favicon.png" />


            </Head>
            <main className="pt-20 pb-16 lg:pt-24 lg:pb-24 bg-white dark:bg-gray-900">
                <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
                    <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                        <h1 className="text-2xl font-bold">{page.title}</h1>
                        <div className='mt-4 flex'><div className=' bg-blue-700 w-2 mr-3'></div><p>{page.publishedAt}</p></div>



                        {/* article */}
                        <div className="mt-6 mb-8 single-article">
                            <PortableText
                                value={page.body}
                                components={ptComponents}
                            />
                        </div>
                        <hr />

                    </article>
                </div>
            </main>
        </div>
    )
}



export async function getServerSideProps(context) {
    const { slug } = context.query

    // page

    const page = await client.fetch(`*[_type == "page" && slug.current == '${slug}'][0]`);

    console.log(page);
    return {
        props: {
            page
        }
    };
}

export default Page;