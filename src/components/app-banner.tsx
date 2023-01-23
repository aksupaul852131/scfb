import Link from 'next/link';

const AppBanner = () => {
    return (
        <Link href='' >
            <img className="fixed z-20 bottom-0 md:hidden" src='/appbanner.png' />
        </Link>
    );
}

export default AppBanner;