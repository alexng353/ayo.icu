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
  SiMongodb,
  SiLinkedin,
  SiGit,
} from "react-icons/si";

import { MdContactPage } from "react-icons/md";

import React from "react";
import { Tooltip, Typography } from "@mui/material";
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
        <br />
        <p>Hey there, I&apos;m</p>
        <Typography variant="h1" className="text-4xl tracking-wide">
          Alexander Ng,
        </Typography>
        <div className="flex flex-col gap-4">
          <p className="pt-3">
            A 16 year old Full Stack web developer from Vancouver, Canada.
            I&apos;m currently working as a{" "}
            <span className="text-green-400 hover:underline">
              <a href="https://www.edubeyond.org">
                Software Engineer at EduBeyond
              </a>
            </span>
            , an international education charity that provides education
            opportunities to children in developing countries.
          </p>
          <p>
            In my spare time, I like to build things, play games, and learn new
            things, which currently include Rust, Docker and MongoDB.
          </p>
        </div>
        <div className="mt-4">
          You can check out my{" "}
          <span className="text-green-400 hover:underline">
            <Link href="/projects">projects</Link>
          </span>{" "}
          and{" "}
          <span className="text-green-400 hover:underline">
            <Link href="https://github.com/alexng353">Github</Link>
          </span>
        </div>

        <br />

        <h1 className="text-3xl">Technologies</h1>
        <br />

        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <ListItem icon={SiReact} text="React.js" />
          <ListItem icon={SiNodeDotJs} text="Node.js" />
          <ListItem icon={SiPython} text="Python" />
          <ListItem icon={SiTypescript} text="TypeScript" />
          <ListItem icon={SiMysql} text="Mysql" />
          <ListItem icon={SiNextDotJs} text="Next.js" />
          <ListItem icon={SiTailwindcss} text="TailwindCSS" />
          <ListItem icon={SiRedis} text="Redis" />
          <ListItem icon={SiGit} text="Git" />
        </ul>
        <br />
        <ul className="grid grid-cols-3 gap-4 sm:grid-cols-4">
          <ListItem icon={SiDocker} text="Docker" />
          <ListItem icon={SiRust} text="Rust" />
          <ListItem icon={SiMongodb} text="MongoDB" />
        </ul>
      </Content>
      <Footer />
    </>
  );
}

export default Home;
