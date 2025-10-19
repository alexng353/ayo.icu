import "../styles/globals.css";

import { useSnow } from "hooks/use-snow";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  const _snow = useSnow();

  return (
    <>
      {/*<Head>{snow && <script src="https://app.embed.im/snow.js" defer />}</Head>*/}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
