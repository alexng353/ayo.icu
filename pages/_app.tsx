import "../styles/globals.css";

import { AppProps } from "next/app";
import Head from "next/head";
import { useMemo } from "react";

const useSnow = () => {
  const date = useMemo(() => new Date(), []);

  if (
    date.getMonth() === 10 ||
    date.getMonth() === 11 ||
    date.getMonth() === 0
  ) {
    return true;
  }
  return false;
};

function MyApp({ Component, pageProps }: AppProps) {
  const snow = useSnow();

  return (
    <>
      <Head>{snow && <script src="https://app.embed.im/snow.js" defer />}</Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
