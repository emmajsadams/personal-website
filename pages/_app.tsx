import ReactGA from "react-ga";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import type { AppProps } from "next/app";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // todo ensure I am not initializing too much
  ReactGA.initialize(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID);

  //todo: determine if this even needed
  //ReactGA.pageview(window.location.pathname + window.location.search);

  useEffect(() => {
    const handleRouteChange = (url) => {
      ReactGA.pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return (<>
    <Head>
      <link href="/emma.jpg" rel="icon" type="image/jpg"></link>
    </Head>
    <Component {...pageProps} />
  </>)
}

export default MyApp;
