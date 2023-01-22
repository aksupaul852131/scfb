
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

    const structuredData = {
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

    }


    const customer = [
        {
            id: 0,
            name: 'Abhishek',
            review: ' I recently used Smart Care Repair Service in Supaul for my washing machine and I couldn`t be happier with the service I received.The technician was knowledgeable, professional and efficient in fixing the issue. I highly recommend them for anyone in need of appliance repairs in Supaul.',
        },
        {
            id: 1,
            name: 'Raghav',
            review: 'I was very impressed with the service provided by Smart Care Repair Service in Supaul. They were prompt and professional in their approach and the technician was able to fix my fridge quickly and efficiently. Highly recommended!',
        },
        {
            id: 3,
            name: 'Darbhanga Imagine',
            review: 'I had a great experience with Smart Care Repair Service in Supaul. The technician was very friendly and explained the issue with my oven in a way that was easy for me to understand. The repair was done quickly and at a reasonable price. I would definitely use them again.',
        },
        {
            id: 4,
            name: 'Faiz Ali',
            review: 'I was in a bind when my air conditioner broke down on a hot summer day. I called Smart Care Repair Service in Supaul and they were able to send a technician out the same day. He fixed the issue quickly and efficiently. Great service, highly recommend.',
        },
        {
            id: 6,
            name: 'RKS Supaul',
            review: 'Smart Care Repair Service in Supaul saved the day when my dishwasher broke down. The technician was knowledgeable and professional, and the repair was done quickly at a very reasonable price. I will definitely be using them again in the future.',
        },
        {
            id: 7,
            name: 'Ritu Kumari',
            review: 'I was extremely pleased with the service I received from Smart Care Repair Service in Supaul. The technician was prompt and efficient, and he explained the issue with my dryer in a way that was easy for me to understand. I would highly recommend them.',
        },
        {
            id: 8,
            name: 'Pankaj Karanpur',
            review: 'I recently used Smart Care Repair Service in Supaul for my microwave and I was very happy with the service I received. The technician was friendly, professional and efficient. The repair was done quickly and at a very reasonable price. I would definitely use them again.',
        },
        {
            id: 9,
            name: 'AVR Group',
            review: 'I recently used Smart Care Repair Service in Supaul for my air conditioner and I couldn`t be happier with the service I received.The technician was friendly, professional and efficient.He explained the issue in a way that was easy for me to understand and the repair was done quickly and at a very reasonable price.I would highly recommend them.',
        }
    ]

    return (
        <div>
            <Head>
                <title>{`${service.title} | Smart Care`}</title>
                <meta name="description" content={service.metadesc} />

                <link rel="canonical" href={`http://smartcaresupaul.in/service/${service.slug.current}`} />
                <meta property="og:url" content={`http://smartcaresupaul.in/service/${service.slug.current}`} />
                <meta property="fb:app_id" content="1208723013361131" />
                <meta name="theme-color" content="#1D4ED8" />

                <meta property="og:site_name" content="Smart Care" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={`${service.title} | Smart Care`} key="title" />
                <meta property="og:description" content={service.metadesc} key="description" />
                <meta property="og:image" content={`${urlFor(service.mainImage).width(800).fit('max').auto('format')}`} />
                <link rel="shortcut icon" type="image/x-icon" href="/favicon.png" />
                <meta name='subject' content='Home Appliances Repair In Supaul' />


                {/* schema */}
                <script
                    key="structured-data"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                />
            </Head>
            <main className="pt-20 pb-16 lg:pt-24 lg:pb-24 bg-white dark:bg-gray-900">
                <div className="mx-auto max-w-7xl ">
                    <article className="mx-auto w-full md:px-12 font-[Poppins]">
                        <div className='px-3'>
                            <div style={{ backgroundImage: `url(${urlFor(service.mainImage).width(800).fit('max').auto('format')})` }} className={`bg-cover text-white overflow-hidden w-full rounded-2xl`}>

                                <div className='w-full backdrop-brightness-50 bg-opacity-75 p-4 md:p-6 '>
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

                            <ul className="mt-10 flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 select-none">
                                <li className="mr-2">
                                    <button onClick={() => setTab(0)} aria-current="page" className={`${tab == 0 ? "bg-gray-100 border-t border-x" : 'hover:bg-gray-100'} inline-block p-4 text-blue-600 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500 font-bold`}>Book Service</button>
                                </li>
                                <li className="mr-2">
                                    <button onClick={() => setTab(1)} className={`${tab == 1 ? "bg-gray-100 border-t border-x" : 'hover:bg-gray-100'} inline-block p-4 text-blue-600 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500 font-bold`}>Charges</button>
                                </li>
                                <li className="mr-2">
                                    <button onClick={() => setTab(2)} className={`${tab == 2 ? "bg-gray-100 border-t border-x" : 'hover:bg-gray-100'} inline-block p-4 text-blue-600 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500 font-bold`}>FAQ</button>
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
                                                <Link href={{ pathname: '/order', query: { sname: service.title, simg: `${urlFor(service.mainImage).width(800).fit('max').auto('format')}`, cname: '' } }}
                                                    className='bg-blue-700 rounded-full py-4 flex justify-center'>

                                                    <div className='flex'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="md:w-6 w-4 stroke-white mr-2">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                                                        </svg>
                                                        <p className='text-center text-white text-xs md:text-base font-semibold'>
                                                            Online Booking
                                                        </p>
                                                    </div>

                                                </Link>
                                                <Link href='tel:08825105519'>
                                                    <div className='border-blue-700 border-2 rounded-full py-4 flex justify-center'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="md:w-6 w-4 stroke-blue-700 mr-2">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                                                        </svg>

                                                        <p className='text-center text-xs md:text-base text-blue-700 font-semibold'>
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
                        </div>
                        <div className="px-2 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-18 mx-3">
                            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                                <div>
                                    <h2 className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                                        Working Steps
                                    </h2>
                                </div>

                                <p className="text-base text-gray-700 md:text-lg">
                                    Smart Care Supaul Benefits In Supaul
                                </p>
                            </div>
                            <div className="relative grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
                                <div className="absolute inset-0 flex items-center justify-center sm:hidden lg:flex">
                                    <div className="w-px h-full bg-gray-300 lg:w-full lg:h-px" />
                                </div>
                                <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
                                    <div className="flex items-center justify-between mb-2">
                                        <p className="text-lg font-bold leading-5">Experienced & qualified technicians</p>
                                        <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-blue-700 bg-indigo-50">
                                            1
                                        </p>
                                    </div>
                                    <p className="text-sm text-gray-900">
                                        Our technicians are highly trained and experienced in repairing all types of home appliances.
                                    </p>
                                </div>
                                <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
                                    <div className="flex items-center justify-between mb-2">
                                        <p className="text-lg font-bold leading-5">Affordable prices</p>
                                        <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-blue-700 bg-indigo-50">
                                            2
                                        </p>
                                    </div>
                                    <p className="text-sm text-gray-900">
                                        We strive to provide our customers with affordable prices without compromising on the quality of our work.
                                    </p>
                                </div>
                                <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
                                    <div className="flex items-center justify-between mb-2">
                                        <p className="text-lg font-bold leading-5">Genuine Parts</p>
                                        <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-blue-700 bg-indigo-50">
                                            3
                                        </p>
                                    </div>
                                    <p className="text-sm text-gray-900">
                                        We only use high-quality parts and materials for our repairs, ensuring that your appliance is running like new again.
                                    </p>
                                </div>
                                <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
                                    <div className="flex items-center justify-between mb-2">
                                        <p className="text-lg font-bold leading-5">Guaranteed satisfaction</p>
                                        <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-blue-700 bg-indigo-50">
                                            4
                                        </p>
                                    </div>
                                    <p className="text-sm text-gray-900">
                                        We stand behind our work with a satisfaction guarantee, so you can have peace of mind knowing that your repair is done right.
                                    </p>
                                </div>
                            </div>
                            <div className="text-center">
                                <Link href={{ pathname: '/order', query: { sname: service.title, simg: `${urlFor(service.mainImage).width(800).fit('max').auto('format')}`, cname: '' } }}
                                    className='bg-blue-700 mt-3 rounded-full py-4 flex justify-center w-full md:w-1/2 mx-auto'>

                                    <div className='flex'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="md:w-6 w-4 stroke-white mr-2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                                        </svg>
                                        <p className='text-center text-white text-xs md:text-base font-semibold'>
                                            Book Now
                                        </p>
                                    </div>

                                </Link>
                            </div>
                        </div>
                        <hr />


                        <section className="bg-white">
                            <div className="mx-auto max-w-7xl py-8 sm:py-24">
                                <div className="max-w-xl mb-6 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 mx-3">
                                    <div>
                                        <h2 className="text-base md:text-2xl font-semibold md:text-center">
                                            Customers Review
                                        </h2>
                                    </div>


                                </div>
                                <div className="relative rounded-xl overflow-auto no-scrollbar">
                                    <div className="flex flex-nowrap pb-4">


                                        {
                                            customer.map((item) => (
                                                <blockquote key={item.id} className="ml-4 rounded-lg border bg-gray-100 p-8 flex-none w-96 select-none">
                                                    <div className="flex items-center justify-items-start">
                                                        <img
                                                            alt="Smart Care Users"
                                                            src="https://scontent.fpat1-2.fna.fbcdn.net/v/t39.30808-6/316798657_462576739316953_2477513583375707439_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_ohc=HqWjyVFCgfkAX-8M5Pk&_nc_ht=scontent.fpat1-2.fna&oh=00_AfB73gfsb-B3JmEtzndWGJ9SGlqtxlLuDcLLw5I0GJozug&oe=63D2077F"
                                                            className="h-12 w-12 rounded-full object-cover"
                                                        />
                                                        <div className="ml-4">
                                                            <div className="flex justify-start gap-0.5 text-green-500">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    className="h-3 w-3 fill-[#F52E39]"
                                                                    viewBox="0 0 20 20"
                                                                    fill="currentColor"
                                                                >
                                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    className="h-3 w-3 fill-[#F52E39]"
                                                                    viewBox="0 0 20 20"
                                                                    fill="currentColor"
                                                                >
                                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    className="h-3 w-3 fill-[#F52E39]"
                                                                    viewBox="0 0 20 20"
                                                                    fill="currentColor"
                                                                >
                                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    className="h-3 w-3 fill-[#F52E39]"
                                                                    viewBox="0 0 20 20"
                                                                    fill="currentColor"
                                                                >
                                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    className="h-3 w-3 fill-[#F52E39]"
                                                                    viewBox="0 0 20 20"
                                                                    fill="currentColor"
                                                                >
                                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                                </svg>
                                                            </div>
                                                            <p className="mt-1 text-base font-semibold text-gray-700">
                                                                {item.name}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <p className="mt-4 text-gray-500 text-xs">
                                                        {item.review}
                                                    </p>
                                                </blockquote>
                                            ))


                                        }


                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* article */}
                        <div className="mt-6 px-1 mb-8 single-article mx-3">
                            <PortableText
                                value={service.body}
                                components={ptComponents}
                            />
                        </div>
                        <hr />
                        <div className='grid grid-cols-2 gap-4  items-center mt-6 px-3'>
                            <Link href='tel:08825105519'>
                                <div className='border-blue-700 border-2 rounded-full py-4 flex justify-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="md:w-6 w-4 stroke-blue-700 mr-2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                                    </svg>

                                    <p className='text-center text-xs md:text-base text-blue-700 font-semibold'>
                                        08825105519
                                    </p>
                                </div>
                            </Link>
                            <Link href={{ pathname: '/order', query: { sname: service.title, simg: `${urlFor(service.mainImage).width(800).fit('max').auto('format')}`, cname: '' } }}
                                className='bg-blue-700 rounded-full py-4 flex justify-center w-full mx-auto'>

                                <div className='flex'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="md:w-6 w-4 stroke-white mr-2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                                    </svg>
                                    <p className='text-center text-white text-xs md:text-base font-semibold'>
                                        Book Now
                                    </p>
                                </div>

                            </Link>
                        </div>

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