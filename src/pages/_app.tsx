import AppBanner from '@/components/app-banner';
import Footer from '@/components/footer';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar';

import Navbar from '../components/nav';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress color="#1D4ED8" startPosition={0.3} stopDelayMs={200} height={0} showOnShallow={true} />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      <AppBanner />
    </>
  )
}
