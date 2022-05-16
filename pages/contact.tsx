import React from "react";
import Head from "next/head";
import Footer from "../components/share/footer";
import Navbar from "../components/share/navbar";
import Content from "../components/content";


export default function Contact() {
  return(
    <>
      <Head>
        <title>Contact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Content>
        There&apos;s nothing here because I don&apos;t like to be contacted.
      </Content>

      <Footer />
    </>
  )
}

