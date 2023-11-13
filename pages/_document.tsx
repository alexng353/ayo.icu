import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script
            async
            defer
            data-website-id="7e5a062e-24a4-4cab-a44c-62848758bec9"
            src="https://umami.ayo.icu/umami.js"
          ></script>
          <meta
            name="description"
            content="A website about some web dev named Alex"
          />
          <meta property="og:url" content="https://ayo.icu/" />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content="A website about some web dev named Alex"
          />

          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="ayo.icu" />
          <meta property="twitter:url" content="https://ayo.icu/" />
          <meta
            name="twitter:description"
            content="A website about some web dev named Alex"
          />
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
