import "../styles/index.css";
import Head from "next/head";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Site | okgwknt</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
