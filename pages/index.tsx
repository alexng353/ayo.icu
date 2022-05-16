import Head from "next/head";
import Image from "next/image";
import Link from "next/link"
import { Button, TextField, Typography } from "@mui/material";
import Footer from "../components/share/footer";
import Navbar from "../components/share/navbar";
import { useState } from "react";
import Content from "../components/content";
import { GitHub, Twitter, ChatBubble } from "@mui/icons-material";
function Home() {
  return (
    <>
      <Head>
        <title>Home | alexng353</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Content>
        <a href='https://github.com/alexng353' target='_blank' rel='noopener noreferrer'><GitHub style={{color: "white"}}/></a>
        <a href='https://twitter.com/alexng353' target='_blank' rel='noopener noreferrer' > <Twitter style={{color: "white"}}/></a>
        <a href='/contact' target='_blank' rel='noopener noreferrer'><ChatBubble style={{color: "white"}}/></a>
        <Typography variant="h1" component="h1">
          Hey, I&apos;m Alex.
        </Typography>
        <div>

          I&apos;m a student learning to code in Vancouver, Canada.
        </div>
      </Content>
      <Footer />
    </>
  );
}

export default Home;
