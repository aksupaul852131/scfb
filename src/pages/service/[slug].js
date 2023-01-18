
import { PortableText } from '@portabletext/react'
import client from '../../../client'
import Head from 'next/head'
import Link from 'next/link'
import Option from '../../components/options'


import imageUrlBuilder from '@sanity/image-url'
import React, { useState } from 'react'

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
    const [tab, setTab] = useState(0);

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
                <div className="mx-auto max-w-7xl ">
                    <article className="mx-auto w-full px-2 md:px-12 font-[Poppins]">

                        <div className='bg-[url(http://profiles.sulekha.com/mstore/40410510/albums/default/thumbnailfull/ac-repair-services.jpg)] bg-cover text-white overflow-hidden w-full rounded-2xl'>
                            <div className='w-full backdrop-brightness-50 px-6 py-6 '>
                                <h1 className="text-2xl font-bold mt-4">{service.title}</h1>
                                <p className='mt-2 text-xs md:text-base w-full md:w-5/6'>Looking for reliable AC repair services in Supaul?</p>
                                <ul className='mt-4 flex flex-wrap'>
                                    <li className='flex mr-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 fill-blue-700 mr-1">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        Profasional Services
                                    </li>
                                    <li className='flex mr-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 fill-blue-700 mr-1">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        Genuine Parts
                                    </li>
                                    <li className='flex mr-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 fill-blue-700 mr-1">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        Same Day Service
                                    </li>
                                    <li className='flex'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 fill-blue-700 mr-1">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        24*7 Support
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <ul className="mt-6 flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
                            <li className="mr-2">
                                <button onClick={() => setTab(0)} aria-current="page" className={`${tab == 0 ? "bg-gray-100 " : 'hover:bg-gray-100'} inline-block p-4 text-blue-600 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500`}>Book Service</button>
                            </li>
                            <li className="mr-2">
                                <button onClick={() => setTab(1)} className={`${tab == 1 ? "bg-gray-100 " : 'hover:bg-gray-100'} inline-block p-4 text-blue-600 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500`}>Charges</button>
                            </li>
                            <li className="mr-2">
                                <button onClick={() => setTab(2)} className={`${tab == 2 ? "bg-gray-100 " : 'hover:bg-gray-100'} inline-block p-4 text-blue-600 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500`}>FAQ</button>
                            </li>
                        </ul>
                        <div className='border w-full p-6 bg-gray-100'>

                            {/* Tab 1 */}
                            {
                                tab == 0 ?

                                    <div>
                                        <h2 className='font-semibold mb-4'>Book Your Service</h2>
                                        {/* button */}
                                        <Option />
                                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-8'>
                                            <div className='bg-blue-700 rounded-full py-4 flex justify-center'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 stroke-white mr-2">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                                                </svg>
                                                <p className='text-center text-white font-semibold'>

                                                    Online Booking
                                                </p>
                                            </div>
                                            <div className='border-blue-700 border-2 rounded-full py-4 flex justify-center'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 stroke-blue-700 mr-2">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                                                </svg>

                                                <p className='text-center text-blue-700 font-semibold'>
                                                    <Link href='tel:08825105519'> 08825105519</Link>
                                                </p>
                                            </div>
                                        </div>
                                        <hr />
                                        <p className='mt-4 text-center text-base'><b>Verified</b> Technician Visit On Your Doorstep After You Complete Booking Process With Online/Call.</p>
                                    </div>
                                    : tab == 1 ?


                                        <div >
                                            <h2 className='font-semibold'>Book Your Service</h2>
                                            {/* button */}
                                            <div className='grid grid-cols-2 gap-6 my-8'>

                                            </div>
                                            <hr />
                                            <p className='mt-4 text-center'><b>Verified</b> Technician Visit On Your Doorstep After You Complete Booking Process With Online/Call.</p>
                                        </div>
                                        :
                                        <div >
                                            <h2 className='font-semibold'>Rate Card</h2>
                                            {/* button */}
                                            <div className='grid grid-cols-2 gap-6 my-8'>

                                            </div>
                                            <hr />
                                            <p className='mt-4 text-center'><b>Verified</b> Technician Visit On Your Doorstep After You Complete Booking Process With Online/Call.</p>
                                        </div>

                            }



                        </div>



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
            </main >
        </div >
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