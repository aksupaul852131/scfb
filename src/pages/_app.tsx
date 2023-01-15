import Footer from '@/components/footer';
import Nav from '@/components/nav'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import Navbar from '../components/nav';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
