import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  date: Date = new Date();

  render() {
    return (
      <Html>
        <Head>
          <script
            async
            defer
            data-website-id="bd823f41-733e-4767-9571-7a05b1b2f23f"
            src="https://umami.ayo.icu/umami.js"
          ></script>
          {((this.date.getMonth() === 10 && this.date.getDate() > 25) ||
            this.date.getMonth() === 11 ||
            (this.date.getMonth() === 0 && this.date.getDate() < 10)) && (
            <script src="https://app.embed.im/snow.js" defer></script>
          )}
          <meta
            name="alexng353 | portfolio"
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
