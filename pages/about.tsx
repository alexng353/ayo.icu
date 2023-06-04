import { Favorite } from "@mui/icons-material";
import { Typography } from "@mui/material";
import Head from "next/head";
import Content from "../components/content";
import Footer from "../components/share/footer";
import Navbar from "../components/share/navbar";
import { Headers } from "../components/headers";

export default function About() {
  return (
    <>
      <Head>
        <Headers title="alexng353 | about" />
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
