import React from "react";
import Head from "next/head";
import Footer from "../../components/share/footer";
import Navbar from "../../components/share/navbar";
import Content from "../../components/content";
import { Typography } from "@mui/material";
import Image from "next/image";
// grab loading wheel from material-ui
import {CircularProgress, Tooltip} from "@mui/material/";
import Link from "next/link";

function Projects () {
  return (
    <>
      <Head>
        <title>Projects | alexng353</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Content>
        <div className="flex justify-center ">
          <div className="text-center max-w-xl">
            <Typography variant="h4" component="h4">
              Projects
            </Typography>
            <p>
              It&apos;s a work in progress, but here&apos;s a cute cat gif (^_^)
            </p>
            <Tooltip title="I promise there will be projects on here... eventually">
              <a href="https://giphy.com/gifs/cat-WYEWpk4lRPDq0" target="_blank" rel="noopener noreferrer">
                <img src="https://media.giphy.com/media/WYEWpk4lRPDq0/giphy.gif" height="500" width="500" alt="cute cat gif"/> 
              </a>
            </Tooltip>
          </div>
        </div>
      </Content>
      <Footer />
    </>
  );
}

export default Projects;