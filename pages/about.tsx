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
        <div className="text-center">
          <Typography variant="h4" component="h4">
            Made with <Favorite className="text-pink-500" /> by Alex
          </Typography>
          using Next.js, Material-UI and TailwindCSS.
          <p className="mt-20">
            This site is for me to learn React and showcase some of my favourite
            projects.
          </p>
        </div>
      </Content>
      <Footer />
    </>
  );
}
