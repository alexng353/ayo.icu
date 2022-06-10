import Head from "next/head";
import Footer from "../components/share/footer";
import Navbar from "../components/share/navbar";
import Content from "../components/content";
import { ListItem } from "../components/list-item";
import Script from "next/script";

import {
  SiMysql,
  SiNextdotjs as SiNextDotJs,
  SiNodedotjs as SiNodeDotJs,
  SiTwitter,
  SiReact,
  SiRedis,
  SiStyledcomponents as SiStyledComponents,
  SiTailwindcss,
  SiTypescript,
  SiWebpack,
  SiWebstorm,
  SiYarn,
  SiGithub,
  SiDiscord,
  SiPython,
  SiCsharp,
  SiDocker,
  SiRust,
  // linked in
  SiLinkedin,
} from "react-icons/si";

import { MdContactPage } from "react-icons/md";

import React from "react";
import { Tooltip } from "@mui/material";
import Link from "next/link";

function Home() {
  return (
    <>
      <Head>
        <title>Home | alexng353</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Content>
        <div className="inline-flex gap-3">
          <Tooltip title="Github">
            <a
              href="https://github.com/alexng353"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub style={{ color: "white" }} className="h-6 w-6" />
            </a>
          </Tooltip>
          <Tooltip title="Twitter">
            <a
              href="https://twitter.com/alexng353"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiTwitter style={{ color: "white" }} className="h-6 w-6" />
            </a>
          </Tooltip>
          <Tooltip title="LinkedIn">
            <a
              href="https://www.linkedin.com/in/alexng353/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLinkedin style={{ color: "white" }} className="h-6 w-6" />
            </a>
          </Tooltip>
          <Tooltip title="Contact">
            <Link href="/contact">
              <a>
                <MdContactPage
                  style={{ color: "white", position: "relative", top: "-2" }}
                  className="h-7 w-7"
                />
              </a>
            </Link>
          </Tooltip>
        </div>

        <p className="pt-3">
          Hi, I&apos;m a High School student learning to code. I&apos;m from
          Vancouver, Canada and I&apos;m interested in Full Stack web
          development, machine learning/vision and scripting. My current goals
          as a developer are to learn containerization and kubernetes as well as
          find some inspiration to write something useful for other people.
        </p>

        <br />

        <h1 className="text-3xl">Technologies</h1>
        <br />

        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <ListItem icon={SiReact} text="React.js" />
          <ListItem icon={SiNodeDotJs} text="Node.js" />
          <ListItem icon={SiPython} text="Python" />
          <ListItem icon={SiTypescript} text="TypeScript" />
          <ListItem icon={SiMysql} text="Mysql" />
          <ListItem icon={SiCsharp} text="C#" />
          <ListItem icon={SiNextDotJs} text="Next.js" />
          <ListItem icon={SiTailwindcss} text="TailwindCSS" />
          <ListItem icon={SiRedis} text="Redis" />
        </ul>
        <br />
        <h1 className="text-3xl">Learning</h1>
        <br />
        <ul className="grid grid-cols-3 gap-4 sm:grid-cols-4">
          <ListItem icon={SiDocker} text="Docker" />
          <ListItem icon={SiRust} text="Rust" />
        </ul>
      </Content>
      <Footer />
    </>
  );
}

export default Home;
