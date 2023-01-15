import Link from "next/link";

const Footer = () => {
    return (


        <div className="bg-white">
            <div className="mx-auto max-w-7xl pt-16 font-['Poppins']">
                <footer className="p-4  rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <Link href="/" className="flex items-center mb-4 sm:mb-0">
                            <img
                                src="/logo1.png"
                                className="h-8 mr-3"
                                alt="SmartCare"
                            />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                                Smart Care
                            </span>
                        </Link >
                        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                                <Link href="#" className="mr-4 hover:underline md:mr-6 ">
                                    About
                                </Link >
                            </li>
                            <li>
                                <Link href="#" className="mr-4 hover:underline md:mr-6">
                                    Privacy Policy
                                </Link >
                            </li>
                            <li>
                                <Link href="#" className="mr-4 hover:underline md:mr-6 ">
                                    Licensing
                                </Link >
                            </li>
                            <li>
                                <Link href="#" className="hover:underline">
                                    Contact
                                </Link >
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                        ©{" "}
                        <Link href="/" className="hover:underline">
                            SmartCare™
                        </Link >
                        . All Rights Reserved.
                    </span>
                </footer>


            </div>
        </div>
    )
}
export default Footer;