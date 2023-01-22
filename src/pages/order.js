import { useState } from 'react'
import { useRouter } from 'next/router';
import toast, { Toaster } from 'react-hot-toast';
import Head from 'next/head';

export default function Order() {
    const router = useRouter();

    const [inputs, setInputs] = useState({
        name: `${router.query.cname}`,
        mobile: '',
        date: '',
        time: '',
        unit: 0,
        servicename: `${router.query.sname}`,
    })

    const [form, setForm] = useState({
        state: 'inital',
        message: '',
    })

    const handleChange = (e) => {
        setInputs((prev) => ({
            ...prev,
            [e.target.id]: e.target.value,
        }))
    }

    const onSubmitForm = async (e) => {
        e.preventDefault()

        if (inputs.mobile.length == 10) {
            setForm({ state: 'loading' })
            try {
                const res = await fetch(`api/contact`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(inputs),
                })

                const { error } = await res.json()

                if (error) {
                    setForm({
                        state: 'error',
                        message: error,
                    })
                    return
                }

                setForm({
                    state: 'success',
                    message: 'Your message was sent successfully.',
                })
                setInputs({
                    name: '',
                    mobile: '',
                    date: '',
                    time: '',
                    unit: 0,
                    servicename: '',
                })
            } catch (error) {
                setForm({
                    state: 'error',
                    message: 'Something went wrong',
                })
            }
        } else {
            toast.error("mobile not valid (enter 10 digit mobile)")
        }
    }


    return (
        <div className='pt-24'>
            <Head>
                <title>{`Order Summary | ${router.query.sname}`}</title>
                <meta property="og:title" content={`Order Summary | ${router.query.sname}`} key="title" />
                <meta name="description" content='Smart Care Appliances Repair Service - Service Booking Page' />
                <meta property="og:description" content='Smart Care Appliances Repair Service - Service Booking Page' key="description" />
                <link rel="shortcut icon" type="image/x-icon" href="/favicon.png" />
                <meta name='subject' content='Home Appliances Repair In Supaul' />
            </Head>
            <Toaster
                position="bottom-center"
                reverseOrder={false}
            />
            <div className='mx-auto px-4 md:px-8 max-w-3xl'>
                <div style={{ backgroundImage: `url(${router.query.simg})` }} className='bg-cover text-white overflow-hidden w-full rounded-2xl '>
                    <div className='w-full backdrop-brightness-50 px-4 py-8 md:px-8 '>
                        <h1 className="text-2xl font-bold mt-4">{router.query.sname}</h1>
                        <p className='mt-2 text-xs md:text-base w-full md:w-5/6'>your selected service</p>

                    </div>
                </div>

                <div className="my-6 flex items-center justify-center p-2 md:p-8">
                    <div className="mx-auto w-full max-w-[550px]">
                        <form onSubmit={(e) => onSubmitForm(e)}>
                            <div className="-mx-3 flex flex-wrap">
                                <div className="w-full px-3 sm:w-1/2">
                                    <div className="mb-5">
                                        <label
                                            htmlFor="fName"
                                            className="mb-3 block text-base font-medium text-[#07074D]"
                                        >
                                            Name
                                        </label>

                                        <input
                                            type="text"
                                            name="fName"
                                            id="name"
                                            value={inputs.name}
                                            onChange={handleChange}
                                            placeholder="Full Name"
                                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        />
                                    </div>
                                </div>
                                <div className="w-full px-3 sm:w-1/2">
                                    <div className="mb-5">
                                        <label
                                            htmlFor="lName"
                                            className="mb-3 block text-base font-medium text-[#07074D]"
                                        >
                                            Mobile No.
                                        </label>
                                        <input
                                            type="tel"
                                            name="lName"
                                            id="mobile"
                                            value={inputs.mobile}
                                            onChange={handleChange}
                                            placeholder="+91"
                                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                            required

                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mb-5">
                                <label
                                    htmlFor="guest"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    How many product for repair ?
                                </label>
                                <input
                                    type="number"
                                    name="unit"
                                    id="unit"
                                    value={inputs.unit}
                                    onChange={handleChange}
                                    placeholder={1}
                                    min={1}
                                    className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                            <div className="-mx-3 flex flex-wrap">
                                <div className="w-full px-3 sm:w-1/2">
                                    <div className="mb-5">
                                        <label
                                            htmlFor="date"
                                            className="mb-3 block text-base font-medium text-[#07074D]"
                                        >
                                            Date
                                        </label>
                                        <input
                                            value={inputs.date}
                                            onChange={handleChange}
                                            type="date"
                                            name="date"
                                            id="date"
                                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        />
                                    </div>
                                </div>
                                <div className="w-full px-3 sm:w-1/2">
                                    <div className="mb-5">
                                        <label
                                            htmlFor="time"
                                            className="mb-3 block text-base font-medium text-[#07074D]"
                                        >
                                            Time
                                        </label>
                                        <input
                                            value={inputs.time}
                                            onChange={handleChange}
                                            type="time"
                                            name="time"
                                            id="time"
                                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        />
                                    </div>
                                </div>
                            </div>



                            {form.state === 'inital' ? (
                                <div>
                                    <button type='submit' className="mt-6 hover:bg-pink-700 rounded-lg w-full bg-blue-700 py-4 px-8 text-center text-base font-semibold text-white outline-none">
                                        Submit
                                    </button>
                                </div>
                            ) :
                                form.state === 'loading' ? (
                                    <center>
                                        <svg className="animate-spin mt-2 h-7  w-7 text-blue-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                    </center>
                                ) : form.state === 'error' ? (
                                    <div>{form.message}</div>
                                ) : (
                                    form.state === 'success' && <p className='text-center'>Order Confirmed. We are contacting you under 300 mits</p>
                                )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}