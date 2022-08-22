import React from "react";
import Head from "next/head";
import Footer from "../components/share/footer";
import Navbar from "../components/share/navbar";
import Content from "../components/content";
import { Typography } from "@mui/material";

// import a heart icon from @material-ui/icons
import { Favorite } from "@mui/icons-material";

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Content>
        <div className="flex justify-center ">
          <div className="text-center max-w-xl">
            <Typography variant="h4" component="h4">
              Made with <Favorite className="text-pink-500" /> by Alex
            </Typography>
            using Next.js, Material-UI and TailwindCSS.
            {/* generate 4 empty lines */}
            <br />
            <br />
            <br />
            <br />
            This site is for me to learn front end development and React, and to
            showcase some of my favourite projects.
          </div>
        </div>
      </Content>
      <Footer />
    </>
  );
}
