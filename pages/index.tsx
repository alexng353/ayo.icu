import Head from "next/head";
import Image from "next/image";
import Link from "next/link"
import { Button, TextField, Typography } from "@mui/material";
import Footer from "../components/share/footer";
import Navbar from "../components/share/navbar";
import { useState } from "react";
import Content from "../components/content";
function Home() {
  return (
    <>
      <Head>
        <title>Home | alexng353</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Content>
        <Typography variant="h1" component="h1">
          Hello World!
        </Typography>
      </Content>
      <Footer />
    </>
  );
}

export default Home;
