import ReactGA from 'react-ga'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import type { AppProps } from 'next/app'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter() // TODO: move this into use effect?

  // todo ensure I am not initializing too much
  ReactGA.initialize(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID)

  //todo: determine if this even needed
  //ReactGA.pageview(window.location.pathname + window.location.search);

  useEffect(() => {
    const handleRouteChange = (url) => {
      ReactGA.pageview(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [])

  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="O_dhy7q1Kfwrvh4v9kyyHmHVZWJqzCegjrgNteyU65k"
        />
        <link href="/emma.jpg" rel="icon" type="image/jpg"></link>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
