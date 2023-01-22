import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

const times = [
    {
        id: 1,
        name: 'A/C Repair',
    },
    {
        id: 2,
        name: 'Fridge',

    },
    {
        id: 3,
        name: 'Geyser',

    },
    {
        id: 4,
        name: 'Microwave',

    },
    {
        id: 5,
        name: 'Air Purifier',

    },
    {
        id: 6,
        name: 'Washing machine',

    },

]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}


const Hero = () => {
    const [selected, setSelected] = useState(times[0]);
    const [name, setName] = useState(' ');
    return (
        <>

            <div className="relative">
                <img
                    src="https://images.pexels.com/photos/3747463/pexels-photo-3747463.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    className="absolute inset-0 object-cover w-full h-full"
                    alt=""
                />
                <div className="relative bg-gray-900 bg-opacity-75">
                    <div className="px-4 pt-24 pb-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-24">
                        <div className="flex flex-col items-center justify-between xl:flex-row">
                            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                                    Smart Care Supaul
                                </h2>
                                <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                                    We are providing doorstep Home Appliances repair services in all over supaul bihar.
                                </p>
                                <Link
                                    href="tel:08825105519"
                                    aria-label=""
                                    className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-white hover:text-teal-accent-700"
                                >
                                    Call 08825105519
                                    <svg
                                        className="inline-block w-3 ml-2"
                                        fill="currentColor"
                                        viewBox="0 0 12 12"
                                    >
                                        <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                                    </svg>
                                </Link>
                            </div>
                            <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                                <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                                    <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                                        Send Your Request
                                    </h3>
                                    <form>
                                        <div className="mb-1 sm:mb-2">
                                            <label
                                                htmlFor="firstName"
                                                className="inline-block mb-1 font-medium"
                                            >
                                                Name
                                            </label>
                                            <input
                                                placeholder="Akash"
                                                required
                                                type="text"
                                                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                                id="firstName"
                                                name="firstName"
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                        </div>
                                        <div className="mb-1 sm:mb-2">
                                            <Listbox value={selected} onChange={setSelected}>
                                                {({ open }) => (
                                                    <>
                                                        <label
                                                            htmlFor="firstName"
                                                            className="inline-block mb-1 font-medium"
                                                        >
                                                            Service Type
                                                        </label>
                                                        <div className="relative mt-3">
                                                            <Listbox.Button className="max-w-2xl relative w-full cursor-default rounded-md border border-gray-300 bg-white py-4 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                                                                <span className="flex items-center">

                                                                    <span className="ml-3 block truncate">{selected.name}</span>
                                                                </span>
                                                                <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                                                    <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                                                </span>
                                                            </Listbox.Button>

                                                            <Transition
                                                                show={open}
                                                                as={Fragment}
                                                                leave="transition ease-in duration-100"
                                                                leaveFrom="opacity-100"
                                                                leaveTo="opacity-0"
                                                            >
                                                                <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                                    {times.map((item) => (
                                                                        <Listbox.Option
                                                                            key={item.id}
                                                                            className={({ active }) =>
                                                                                classNames(
                                                                                    active ? 'text-white bg-indigo-600' : 'text-gray-900',
                                                                                    'relative cursor-default select-none py-2 pl-3 pr-9'
                                                                                )
                                                                            }
                                                                            value={item}
                                                                        >
                                                                            {({ selected, active }) => (
                                                                                <>
                                                                                    <div className="flex items-center">

                                                                                        <span
                                                                                            className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                                                                        >
                                                                                            {item.name}
                                                                                        </span>
                                                                                    </div>

                                                                                    {selected ? (
                                                                                        <span
                                                                                            className={classNames(
                                                                                                active ? 'text-white' : 'text-indigo-600',
                                                                                                'absolute inset-y-0 right-0 flex items-center pr-4'
                                                                                            )}
                                                                                        >
                                                                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                                        </span>
                                                                                    ) : null}
                                                                                </>
                                                                            )}
                                                                        </Listbox.Option>
                                                                    ))}
                                                                </Listbox.Options>
                                                            </Transition>
                                                        </div>
                                                    </>
                                                )}
                                            </Listbox>
                                        </div>

                                        <div className="mt-4 mb-2 sm:mb-4">
                                            <Link
                                                href={{ pathname: '/order', query: { sname: selected.name, simg: '', cname: name } }}

                                                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-700 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                            >

                                                Next
                                            </Link>
                                        </div>
                                        <p className="text-xs text-gray-600 sm:text-sm text-center">
                                            Get Same Day Service in <span className='text-blue-700'>Supaul</span> Bihar
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="bg-blue-700 py-16 font-[Poppins] px-4 select-none">

                <div className="mx-auto max-w-7xl grid grid-cols-6 gap-4">

                    <div className="bg-white w-full rounded-lg col-span-3 py-4 px-2">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 content-center h-full">
                            <div className="grid justify-items-center">
                                <img src='/customer-care-smartcare.webp' className="w-48" />
                            </div>
                            <div className="md:mr-6 sm:mt-3 grid content-center pl-2">
                                <h3 className="text-xs mb-2 md:text-lg font-semibold ">Customer Support </h3>
                                <div className="flex items-center hover:text-blue-700">
                                    <p className="text-xs text-gray-700 mr-2 hover:text-blue-700 select-none">Inquary Now</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                    </svg>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className="bg-white w-full h-full rounded-lg col-span-3 row-span-1 md:row-span-2 py-4 px-2">
                        <div className="grid grid-cols-1 gap-2 content-center h-full">
                            <div className="grid justify-items-center">
                                <img src='/electrician-supaul.webp' className="w-48" />
                            </div>
                            <div className="md:mr-6 sm:mt-3 grid content-center pl-2">
                                <div className="flex mb-2 ">
                                    <h3 className="text-xs md:text-lg font-semibold ">Electrician Supaul</h3>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="ml-1 w-3 md:w-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </div>

                                <p className="text-xs text-gray-700 mr-2 hover:text-blue-700 select-none">We Have Professional & Trained Electricians.</p>

                            </div>
                        </div>
                    </div>

                    <div className="bg-white w-full h-44 rounded-lg col-span-6 md:col-span-3 py-4 px-2">
                        <div className="grid grid-cols-2 gap-2 content-center h-full">
                            <div className="grid justify-items-center">
                                <img src='/home-repairs.webp' className="w-48" />
                            </div>
                            <div className="md:mr-6 sm:mt-3 grid content-center pl-2">
                                <div className="flex mb-2">
                                    <h3 className="text-xs md:text-lg font-semibold">Home Repair </h3>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="ml-1 w-3 md:w-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </div>

                                <p className="text-xs text-gray-700 mr-2 hover:text-blue-700 select-none">Complete Solution Of Home Appliances & Repair Installtion Services</p>

                            </div>
                        </div>
                    </div>
                </div>

            </div>



            <div className="font-[Poppins] select-none">
                <h2 className="text-center text-2xl font-semibold mt-10">What We Can Fix For You</h2>
                <div className="">

                    <div className="relative rounded-xl mt-4 overflow-auto p-4 lg:mx-auto lg:max-w-7xl no-scrollbar">
                        <div className="flex flex-nowrap md:justify-center gap-4 md:gap-8 lg:gap-12 pb-4">
                            <div className="w-24 lg:w-32 flex-none last:pr-8">
                                <Link href='/service/ac-service-centre-in-supaul'>
                                    <img src='/opt/opt1.png' />
                                </Link>

                            </div>
                            <div className="w-24 lg:w-32 flex-none last:pr-8">
                                <Link href='/service/'>

                                </Link>
                                <img src='/opt/opt2.png' />
                            </div>

                            <div className="w-24 lg:w-32 flex-none last:pr-8">
                                <Link href='/service/'>

                                </Link>
                                <img src='/opt/opt4.png' />
                            </div>

                            <div className="w-24 lg:w-32 flex-none last:pr-8">
                                <Link href='/service/'>

                                </Link>
                                <img src='/opt/opt2.png' />
                            </div>
                            <div className="w-24 lg:w-32 flex-none last:pr-8">
                                <img src='/opt/opt2.png' />
                            </div>

                            <div className="w-24 lg:w-32 h-24 lg:h-32 flex-none">
                                <img src='/opt/opt3.png' />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>


    )
}

export default Hero;