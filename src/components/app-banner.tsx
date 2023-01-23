import Link from 'next/link';

const AppBanner = () => {
    return (
        <Link href='https://play.google.com/store/apps/details?id=com.smartcare.supaul' >
            <img className="fixed z-20 bottom-0 md:hidden" src='/appbanner.png' />
        </Link>
    );
}

export default AppBanner;