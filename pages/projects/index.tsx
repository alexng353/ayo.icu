import React from "react";
import Head from "next/head";
import Footer from "../../components/share/footer";
import Navbar from "../../components/share/navbar";
import Content from "../../components/content";
import { Button, Typography } from "@mui/material";
import Image from "next/image";
// grab loading wheel from material-ui
import { CircularProgress, Tooltip } from "@mui/material/";
import Link from "next/link";

function Projects() {
  const [show, setShow] = React.useState(false);
  return (
    <>
      <Head>
        <title>Projects | alexng353</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Content>
        <div className="flex justify-center h-full">
          <div className="text-center max-w-xl h-full ">
            <Typography variant="h4" component="h4">
              Projects
            </Typography>
            <p>
              This is a list of projects I&apos;ve worked on, which mostly
              consist of a list of tools I&apos;ve made.
            </p>
            <br />
            <div className="md:grid md:grid-cols-2 md:gap-4 grid grid-cols-1 space-y-4">
              <Tooltip title="A barebones typescript generator written in rust">
                <Button
                  className="bg-green-500 hover:bg-green-600"
                  href="/projects/typescript-generator"
                  variant="contained"
                >
                  TypeScript Generator
                </Button>
              </Tooltip>
              {/* <Tooltip title="A utility to download and format the cloudflare ip range list">
                <Button
                  className="bg-green-500 hover:bg-green-600"
                  href="/projects/cf-ips"
                  variant="contained"
                >
                  Cloudflare IPs
                </Button>
              </Tooltip> */}
            </div>
            {show ? (
              <a
                href="https://giphy.com/gifs/cat-WYEWpk4lRPDq0"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* reason for using img is  */}
                <Image
                  src="/giphy.webp"
                  alt="cat"
                  width={500}
                  height={500}
                  layout="responsive"
                />
              </a>
            ) : (
              <button
                onClick={() => setShow(true)}
                className="hover:underline text-green-500 hover:bg-gray-500 rounded-lg p-4"
              >
                Show me the cat gif
              </button>
            )}
          </div>
        </div>
      </Content>
      <Footer />
    </>
  );
}

export default Projects;
