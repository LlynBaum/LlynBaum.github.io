import Footer from '@/components/footer/footer'
import Header from '@/components/header/header'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Zoo Mythical Creatures" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
