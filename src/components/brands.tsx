import Image from 'next/image'
const Brands = () => {
    return (

        <div className=''>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-12 md:pt-16 font-['Poppins']">


                <h2 className='text-1xl md:text-4xl font-bold text-center'>Multiple Brands Skilled Technicians</h2>
                <p className='text-xs md:text-base mt-4 font-medium text-center'>Our All Technician Already Work With Top Listed Company</p>
                <div className="mt-8 mx-auto grid-cols-3 grid md:grid-cols-6 content-center justify-center justify-items-center h-24">
                    <Image className='hover:bg-blue-100' src='/brand/samsung.svg' alt='hero' width='100' height='50' />
                    <Image className='hover:bg-blue-100' src='/brand/sony.svg' alt='hero' width='100' height='50' />

                    <Image className='mt-2 hover:bg-blue-100' src='/brand/haier.svg' alt='hero' width='75' height='50' />

                    <Image className='mt-2 hover:bg-blue-100' src='/brand/mi.svg' alt='hero' width='75' height='50' />

                    <Image className='mt-3 hover:bg-blue-100' src='/brand/lg.svg' alt='hero' width='70' height='20' />
                    <Image className='hover:bg-blue-100' src='/brand/daikin.svg' alt='hero' width='110' height='100' />

                </div>
            </div>
        </div >
    );
}

export default Brands;