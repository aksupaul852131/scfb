
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

const Service = ({ service }) => {
    return (
        <div>
            <Head>
                <title>{service.title}</title>

                <link rel="canonical" href={`/service/${service.slug.current}`} />
                <meta property="og:title" content={service.title} key="title" />
                <meta property="og:description" content={service.metadesc} key="description" />
                <link rel="shortcut icon" type="image/x-icon" href="/favicon.png" />
                <meta name='subject' content='Home Appliances Repair In Supaul' />

            </Head>
            <main className="pt-20 pb-16 lg:pt-24 lg:pb-24 bg-white dark:bg-gray-900">
                <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
                    <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                        <div className='bg-blue-500 h-48 w-full rounded-lg'>
                        </div>
                        <h1 className="text-2xl font-bold">{service.title}</h1>


                        {/* article */}
                        <div className="mt-6 mb-8 single-article">
                            <PortableText
                                value={service.body}
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

    // service

    const service = await client.fetch(`*[_type == "service" && slug.current == '${slug}'][0]`);

    console.log(service);
    return {
        props: {
            service
        }
    };
}

export default Service;