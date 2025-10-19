import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script
            async
            defer
            data-website-id="7e5a062e-24a4-4cab-a44c-62848758bec9"
            src="https://umami.ayo.icu/script.js"
          ></script>

          <meta name="theme-color" content="#000000" />
          <meta property="og:type" content="website" />
          <meta charSet="utf-8" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="shortcut icon" href="/favicon.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon.png" />

          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
