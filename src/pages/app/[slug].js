
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

const App = ({ app }) => {
    return (
        <div>
            <Head>
                <title>{app.title}</title>


                <meta property="og:title" content={app.title} key="title" />
                <meta property="og:description" content={app.metadesc} key="description" />
                <link rel="shortcut icon" type="image/x-icon" href="/favicon.png" />
                <meta name='subject' content='Home Appliances Repair In Supaul' />

            </Head>
            <main className="pt-20 pb-16 lg:pt-24 lg:pb-24 bg-white dark:bg-gray-900">
                <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
                    <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                        <h1 className="text-2xl font-bold">{app.title}</h1>


                        {/* article */}
                        <div className="mt-6 mb-8 single-article">
                            <PortableText
                                value={app.body}
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

    // app

    const app = await client.fetch(`*[_type == "app" && slug.current == '${slug}'][0]`);

    return {
        props: {
            app
        }
    };
}

export default App;