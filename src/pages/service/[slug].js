
import { PortableText } from '@portabletext/react'
import client from '../../../client'
import Head from 'next/head'
import Link from 'next/link'
import Option from '../../components/options'


import imageUrlBuilder from '@sanity/image-url'
import React, { useState } from 'react'
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
                    alt={value.alt || ''}
                    loading="lazy"
                    src={`${urlFor(value).width(800).fit('max').auto('format')}`}
                />
            )
        }
    }
}



const Service = ({ service }) => {
    const [tab, setTab] = useState(0);

    const [faq, setfaq] = useState(0);



    return (
        <div>
            <Head>
                <title>{service.title}</title>
                <meta name="description" content={service.metadesc} />

                <link rel="canonical" href={`http://smartcaresupaul.in/service/${service.slug.current}`} />
                <meta property="og:url" content={`http://smartcaresupaul.in/service/${service.slug.current}`} />


                <meta property="og:title" content={service.title} key="title" />
                <meta property="og:description" content={service.metadesc} key="description" />
                <meta property="og:image" content="https://ia.media-imdb.com/imahttps://www.smartcaresupaul.in/app_sc.pngges/rock.jpg" />
                <link rel="shortcut icon" type="image/x-icon" href="/favicon.png" />
                <meta name='subject' content='Home Appliances Repair In Supaul' />


                {/* schema */}
                <StructuredData data={{
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [{
                        "@type": "Question",
                        "name": "How do I book a repair service through Smart Care Online?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "You can book a repair service by visiting the Smart Care Online website and selecting the type of appliance you need repair for, then choose the date and time for the repair service."
                        }
                    }, {
                        "@type": "Question",
                        "name": "How much does it cost to book a repair service through Smart Care Online?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The cost of the repair service will depend on the type of appliance and the issue that needs to be repaired. You will be able to see the cost before confirming the booking."
                        }
                    }, {
                        "@type": "Question",
                        "name": "How long will it take to complete the repair service?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The time it takes to complete the repair service will depend on the type of appliance and the issue that needs to be repaired. The repair technician will provide an estimate at the time of the service."
                        }
                    }]
                }}} />
            </Head>
            <main className="pt-20 pb-16 lg:pt-24 lg:pb-24 bg-white dark:bg-gray-900">
                <div className="mx-auto max-w-7xl ">
                    <article className="mx-auto w-full px-2 md:px-12 font-[Poppins]">

                        <div style={{ backgroundImage: `url(${urlFor(service.mainImage).width(800).fit('max').auto('format')})` }} className={`bg-cover text-white overflow-hidden w-full rounded-2xl`}>

                            <div className='w-full backdrop-brightness-50 p-4 md:p-6 '>
                                <h1 className="text-2xl font-bold mt-4">{service.title}</h1>
                                <p className='mt-2 text-xs md:text-base w-full md:w-5/6'>{service.tagline}</p>
                                <ul className='mt-8 flex flex-wrap text-xs'>
                                    <li className='flex mr-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 fill-blue-700 mr-1">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        Profasional Services
                                    </li>
                                    <li className='flex mr-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 fill-blue-700 mr-1">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        Genuine Parts
                                    </li>
                                    <li className='flex mr-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 fill-blue-700 mr-1">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        Same Day Service
                                    </li>
                                    <li className='flex'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 fill-blue-700 mr-1">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        24*7 Support
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <ul className="mt-10 flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
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
                        <div className='border w-full p-4 md:p-6 bg-gray-100'>

                            {/* Tab 1 */}
                            {
                                tab == 0 ?

                                    <div className='container py-6 mx-auto'>

                                        {/* button */}
                                        <center>
                                            <Option />
                                        </center>

                                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 my-8 max-w-2xl mx-auto'>
                                            <Link href={{ pathname: '/order', query: { sname: service.title, simg: `${urlFor(service.mainImage).width(800).fit('max').auto('format')}` } }}
                                                className='bg-blue-700 rounded-full py-4 flex justify-center'>

                                                <div className='flex'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 stroke-white mr-2">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                                                    </svg>
                                                    <p className='text-center text-white font-semibold'>
                                                        Online Booking
                                                    </p>
                                                </div>

                                            </Link>
                                            <Link href='tel:08825105519'>
                                                <div className='border-blue-700 border-2 rounded-full py-4 flex justify-center'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 stroke-blue-700 mr-2">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                                                    </svg>

                                                    <p className='text-center text-blue-700 font-semibold'>
                                                        08825105519
                                                    </p>
                                                </div>
                                            </Link>
                                        </div>
                                        <hr />
                                        <p className='mt-6 text-center text-xs md:text-base'><b>Verified</b> Technician Visit On Your Doorstep After You Complete Booking Process With Online/Call.</p>
                                    </div>
                                    : tab == 1 ?



                                        <div className="my-6 space-y-8">

                                            <div className="flex items-center justify-between max-w-2xl px-8 py-4 mx-auto border border-blue-500 cursor-pointer rounded-xl bg-white">
                                                <div className="flex items-center">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="w-5 h-5 text-blue-600 sm:h-9 sm:w-9"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                    <div className="flex flex-col items-center mx-5 space-y-1">
                                                        <h2 className="text-lg font-medium text-gray-700 sm:text-2xl dark:text-gray-200">
                                                            Visiting
                                                        </h2>
                                                        <div className="px-2 text-xs text-blue-500 bg-gray-100 rounded-full sm:px-4 sm:py-1 dark:bg-gray-700 ">
                                                            Free 100%
                                                        </div>
                                                    </div>
                                                </div>
                                                <h2 className="text-2xl font-semibold text-blue-600 sm:text-4xl">
                                                    ₹0 <span className="text-base font-medium">/Unit</span>
                                                </h2>
                                            </div>
                                            <div className="flex items-center justify-between max-w-2xl px-8 py-4 mx-auto border cursor-pointer rounded-xl dark:border-gray-700 bg-white">
                                                <div className="flex items-center">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="w-5 h-5 text-gray-400 sm:h-9 sm:w-9"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                    <div className="flex flex-col mx-5 space-y-1">
                                                        <h2 className="text-lg font-medium text-gray-700 sm:text-2xl dark:text-gray-200">
                                                            Service Charge
                                                        </h2>
                                                        <div className="px-2 text-center text-xs text-blue-500 bg-gray-100 rounded-full sm:px-4 sm:py-1 dark:bg-gray-700 ">
                                                            Starting Price
                                                        </div>
                                                    </div>
                                                </div>
                                                <h2 className="text-2xl font-semibold text-gray-500 sm:text-4xl dark:text-gray-300">
                                                    ₹299 <span className="text-base font-medium">/Unit</span>
                                                </h2>
                                            </div>
                                            <div className="flex justify-center">
                                                <button className="px-8 py-2 tracking-wide text-xs md:text-base text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-full hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                                                    <Link href='tel://08825105519'> Help - 8825105519</Link>
                                                </button>
                                            </div>




                                            <hr />
                                            <p className='mt-4 text-center text-xs md:text-base'><b>Verified</b> Technician Visit On Your Doorstep After You Complete Booking Process With Online/Call.</p>
                                        </div>
                                        :
                                        <div >

                                            {/* button */}

                                            <div className="my-8 space-y-8">

                                                {/* faq */}
                                                <div className="border-2 border-gray-300 max-w-2xl mx-auto overflow-hidden rounded-lg dark:border-gray-700">
                                                    <button onClick={() => faq != 0 ? setfaq(0) : setfaq(1)} className="flex items-center justify-between w-full p-4 md:p-8 bg-white">

                                                        <h3 className="font-semibold text-sm md:text-base text-gray-700 dark:text-white">
                                                            How do I book a repair service through Smart Care Online?
                                                        </h3>
                                                        {faq == 0 ?
                                                            <span className="text-gray-400 bg-gray-200 rounded-full">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    className="w-6 h-6"
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                    stroke="currentColor"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth={2}
                                                                        d="M18 12H6"
                                                                    />
                                                                </svg>
                                                            </span>
                                                            :
                                                            <span className="text-white bg-blue-500 rounded-full">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    className="w-6 h-6"
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                    stroke="currentColor"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth={2}
                                                                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                                                    />
                                                                </svg>
                                                            </span>
                                                        }
                                                    </button>
                                                    {
                                                        faq == 0 ?


                                                            <div>
                                                                <hr className="border-gray-200 dark:border-gray-700" />
                                                                <p className="p-8 text-sm text-gray-500 dark:text-gray-300">
                                                                    You can book a repair service by visiting the Smart Care Online website and selecting the type of appliance you need repair for, then choose the date and time for the repair service.
                                                                </p>

                                                            </div> : <div></div>
                                                    }
                                                </div>


                                                {/* faq */}
                                                <div className="border-2 border-gray-300 max-w-2xl mx-auto overflow-hidden rounded-lg dark:border-gray-700">
                                                    <button onClick={() => faq != 2 ? setfaq(2) : setfaq(3)} className="flex items-center justify-between w-full p-4 md:p-8 bg-white">

                                                        <h3 className="font-semibold text-sm md:text-base text-gray-700 dark:text-white">
                                                            How much does it cost to book a repair service through Smart Care Online?
                                                        </h3>
                                                        {faq == 2 ?
                                                            <span className="text-gray-400 bg-gray-200 rounded-full">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    className="w-6 h-6"
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                    stroke="currentColor"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth={2}
                                                                        d="M18 12H6"
                                                                    />
                                                                </svg>
                                                            </span>
                                                            :
                                                            <span className="text-white bg-blue-500 rounded-full">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    className="w-6 h-6"
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                    stroke="currentColor"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth={2}
                                                                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                                                    />
                                                                </svg>
                                                            </span>
                                                        }
                                                    </button>
                                                    {
                                                        faq == 2 ?


                                                            <div>
                                                                <hr className="border-gray-200 dark:border-gray-700" />
                                                                <p className="p-8 text-sm text-gray-500 dark:text-gray-300">
                                                                    The cost of the repair service will depend on the type of appliance and the issue that needs to be repaired. You will be able to see the cost before confirming the booking.
                                                                </p>

                                                            </div> : <div></div>
                                                    }
                                                </div>

                                                {/* faq */}
                                                <div className="border-2 border-gray-300 max-w-2xl mx-auto overflow-hidden rounded-lg dark:border-gray-700">
                                                    <button onClick={() => faq != 4 ? setfaq(4) : setfaq(5)} className="flex items-center justify-between w-full p-4 md:p-8 bg-white">

                                                        <h3 className="font-semibold text-sm md:text-base text-gray-700 dark:text-white">
                                                            How long will it take to complete the repair service?
                                                        </h3>
                                                        {faq == 4 ?
                                                            <span className="text-gray-400 bg-gray-200 rounded-full">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    className="w-6 h-6"
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                    stroke="currentColor"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth={2}
                                                                        d="M18 12H6"
                                                                    />
                                                                </svg>
                                                            </span>
                                                            :
                                                            <span className="text-white bg-blue-500 rounded-full">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    className="w-6 h-6"
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                    stroke="currentColor"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth={2}
                                                                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                                                    />
                                                                </svg>
                                                            </span>
                                                        }
                                                    </button>
                                                    {
                                                        faq == 4 ?


                                                            <div>
                                                                <hr className="border-gray-200 dark:border-gray-700" />
                                                                <p className="p-8 text-sm text-gray-500 dark:text-gray-300">
                                                                    The time it takes to complete the repair service will depend on the type of appliance and the issue that needs to be repaired. The repair technician will provide an estimate at the time of the service.
                                                                </p>

                                                            </div> : <div></div>
                                                    }
                                                </div>
                                            </div>



                                            <hr />
                                            <p className='mt-4 text-center text-xs md:text-base'><b>Verified</b> Technician Visit On Your Doorstep After You Complete Booking Process With Online/Call.</p>
                                        </div>

                            }



                        </div>



                        {/* article */}
                        <div className="mt-6 px-1 mb-8 single-article">
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