import React from "react";
import Head from "next/head";
import Footer from "../../components/share/footer";
import Navbar from "../../components/share/navbar";
import Content from "../../components/content";
import { Button, Typography } from "@mui/material";
// grab loading wheel from material-ui
import { CircularProgress, Tooltip } from "@mui/material/";
import Link from "next/link";
import { GreenButton } from "../../components/styled-mui";

function Projects() {
  const [show, setShow] = React.useState(false);
  const linkStyles =
    "w-full border text-center px-4 py-2 border-green-500 hover:bg-green-500 rounded-lg transition-all";
  return (
    <>
      <Head>
        <title>Projects | alexng353</title>
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
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
              <a className={linkStyles} href="https://edubeyond.ca">
                <span>EduBeyond</span>
              </a>
              <Link href="/projects/mkkl-dl">
                <a className={linkStyles}>Mangakakalot Downloader</a>
              </Link>
              <Link href="/projects/typescript-generator">
                <a className={linkStyles}>TypeScript Generator</a>
              </Link>
              <Link href="/projects/cf-ips">
                <a className={linkStyles}>Cloudflare IPs</a>
              </Link>
            </div>
            <div className="grid place-items-center mt-4">
              {show ? (
                <>
                  <a
                    href="https://giphy.com/gifs/cat-WYEWpk4lRPDq0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {/* reason for using img is  */}
                    <img src="/giphy.webp" alt="cat" width={400} height={400} />
                  </a>
                  <button
                    onClick={() => setShow(false)}
                    className=" text-green-500 hover:bg-gray-500 rounded-lg px-4 py-2"
                  >
                    Hide the cat gif
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setShow(true)}
                  className=" text-green-500 hover:bg-gray-500 rounded-lg px-4 py-2  transition-all"
                >
                  Show me the cat gif
                </button>
              )}
            </div>
          </div>
        </div>
      </Content>
      <Footer />
    </>
  );
}

export default Projects;
