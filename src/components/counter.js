import ScrollTrigger from 'react-scroll-trigger';
import CountUp from 'react-countup';

export const Feature = () => {
    return (
        <>

            <section className="">
                <div className="container max-w-7xl px-4 py-12 md:py-24 mx-auto">
                    <div className="grid md:grid-cols-4 grid-cols-2 gap-2">
                        <div className="p-4 border rounded-lg grid content-center justify-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 mb-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                            </svg>

                            <h3 className="title-font font-medium text-sm md:text-lg text-center text-black mb-3">
                                <ScrollTrigger onEnter={() => setcounter(true)}>
                                    {counter && <CountUp
                                        start={0}
                                        end={900}
                                        duration={2.75} />}+ Customers
                                </ScrollTrigger>
                            </h3>
                        </div>
                        <div className="p-4 border rounded-lg grid content-center justify-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 mb-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                            </svg>

                            <h3 className="title-font font-medium text-sm md:text-lg text-center text-black mb-3">
                                <ScrollTrigger onEnter={() => setcounter(true)}>
                                    {counter && <CountUp
                                        start={0}
                                        end={26}
                                        duration={2.75} />} Teams Supaul
                                </ScrollTrigger>
                            </h3>
                        </div>
                        <div className="p-4 border rounded-lg grid content-center justify-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 mb-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                            </svg>

                            <h3 className="title-font font-medium text-sm md:text-lg text-center text-black mb-3">
                                <ScrollTrigger onEnter={() => setcounter(true)}>
                                    {counter && <CountUp
                                        start={0}
                                        end={30}
                                        duration={2.75} />}+ Services
                                </ScrollTrigger>
                            </h3>
                        </div>
                        <div className="p-4 border rounded-lg grid content-center justify-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 mb-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                            </svg>

                            <h3 className="title-font font-medium text-sm md:text-lg text-center text-black mb-3">
                                <ScrollTrigger onEnter={() => setcounter(true)}>
                                    {counter && <CountUp
                                        start={0}
                                        end={11}
                                        duration={2.75} />}+ Brand Partners
                                </ScrollTrigger>
                            </h3>
                        </div>
                    </div>
                </div>
            </section>


            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-8 row-gap-5 md:grid-cols-2">
                    <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
                        <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                        <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                        <div className="relative flex flex-col h-full p-5 bg-white rounded-sm lg:items-center lg:flex-row">
                            <div className="mb-6 mr-6 lg:mb-0">
                                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-indigo-50 lg:w-32 lg:h-32">
                                    <svg
                                        className="w-16 h-16 text-deep-purple-accent-400 lg:w-20 lg:h-20"
                                        stroke="currentColor"
                                        viewBox="0 0 52 52"
                                    >
                                        <polygon
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="none"
                                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="flex flex-col justify-between flex-grow">
                                <div>
                                    <h6 className="mb-2 font-semibold leading-5">
                                        The quick, brown fox jumps over a very lazy dog
                                    </h6>
                                    <p className="mb-2 text-sm text-gray-900">
                                        Cheese on toast airedale the big cheese. Danish fontina cheesy
                                        grin airedale danish fontina taleggio the big cheese macaroni
                                        cheese port-salut.
                                    </p>
                                </div>
                                <a
                                    href="/"
                                    aria-label=""
                                    className="inline-flex items-center text-sm font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                                >
                                    Learn more
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
                        <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                        <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                        <div className="relative flex flex-col h-full p-5 bg-white rounded-sm lg:items-center lg:flex-row">
                            <div className="mb-6 mr-6 lg:mb-0">
                                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-indigo-50 lg:w-32 lg:h-32">
                                    <svg
                                        className="w-16 h-16 text-deep-purple-accent-400 lg:w-20 lg:h-20"
                                        stroke="currentColor"
                                        viewBox="0 0 52 52"
                                    >
                                        <polygon
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="none"
                                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="flex flex-col justify-between flex-grow">
                                <div>
                                    <h6 className="mb-2 font-semibold leading-5">
                                        Disrupt inspire and think tank, social
                                    </h6>
                                    <p className="mb-2 text-sm text-gray-900">
                                        A flower in my garden, a mystery in my panties. Heart attack
                                        never stopped old Big Bear. I didn't even know we were calling
                                        him Big Bear. We never had the chance to.
                                    </p>
                                </div>
                                <a
                                    href="/"
                                    aria-label=""
                                    className="inline-flex items-center text-sm font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                                >
                                    Learn more
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};