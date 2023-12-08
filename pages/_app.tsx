import "../styles/globals.css";

import { useSnow } from "hooks/use-snow";
import { AppProps } from "next/app";
import Head from "next/head";

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
