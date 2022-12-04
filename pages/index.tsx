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
  SiPostgresql,
  SiPrisma,
  SiGithubactions,
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
              <SiGithub
                style={{ color: "white" }}
                className="h-6 w-6 hover:scale-110 transition-all ease-in-out"
              />
            </a>
          </Tooltip>
          <Tooltip title="Twitter">
            <a
              href="https://twitter.com/alexng353"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiTwitter
                style={{ color: "white" }}
                className="h-6 w-6 hover:scale-110 transition-all ease-in-out"
              />
            </a>
          </Tooltip>
          <Tooltip title="LinkedIn">
            <a
              href="https://www.linkedin.com/in/alexng353/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLinkedin
                style={{ color: "white" }}
                className="h-6 w-6 hover:scale-110 transition-all ease-in-out"
              />
            </a>
          </Tooltip>
          <Tooltip title="Contact">
            <Link href="/contact">
              <a>
                <MdContactPage
                  style={{ color: "white", position: "relative", top: "-2" }}
                  className="h-7 w-7 hover:scale-110 transition-all ease-in-out"
                />
              </a>
            </Link>
          </Tooltip>
        </div>
        <br className="select-none" />

        <p>Hey there, I&apos;m</p>
        <h1 className="text-4xl tracking-wide">Alexander Ng</h1>
        <div className="flex flex-col gap-4">
          <p className="pt-3">
            A 16 year old Full Stack web developer based in{" "}
            <span className="text-fuchsia-500">Vancouver, Canada.</span>
            I&apos;m currently working as a{" "}
            <a
              href="https://www.edubeyond.org"
              className="text-green-400 hover:underline"
            >
              Software Engineer at EduBeyond
            </a>
            , an international edtech startup that provides education
            opportunities to children in developing countries. Primarily, I
            write a lot of <span className="text-p-500">TypeScript</span>,{" "}
            <span className="text-p-500">React</span> and{" "}
            <span className="text-p-500">Next</span>, but I also have good
            experience with <span className="text-p-500">Rust</span>, (my
            current favourite), <span className="text-p-500">Python</span>, and{" "}
            <span className="text-p-500">GoLang</span>.
          </p>
          <p>
            In my spare time, I like to build stuff, play games, and learn new
            things, which currently include{" "}
            <span className="text-p-500">Rust</span>, and{" "}
            <span className="text-p-500">MongoDB</span>, though my favourite
            database right now is <span className="text-p-500">PostgreSQL</span>
            . I&apos;m also learning <span className="text-p-500">Docker</span>{" "}
            and <span className="text-p-500">Prisma</span>, primarily to run
            databases inside containers.
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
          , where you can see what I&apos;m currently working on.
        </div>

        <br className="select-none" />

        <h1 className="text-3xl">Technologies</h1>
        <br className="select-none" />
        <ul className="grid grid-cols-2 gap-y-6 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
          <ListItem icon={SiNextDotJs} text="Next" />
          <ListItem icon={SiReact} text="React" />
          <ListItem icon={SiTailwindcss} text="Tailwind" />
          <ListItem icon={SiNodeDotJs} text="Node" />
          <ListItem icon={SiTypescript} text="TypeScript" />
          <ListItem icon={SiPrisma} text="Prisma" />
          <ListItem icon={SiPython} text="Python" />
          <ListItem icon={SiGit} text="Git" />
          <ListItem icon={SiGithub} text="GitHub" />
          <ListItem icon={SiGithubactions} text="CI/CD" />
          <ListItem icon={SiRust} text="Rust" />
        </ul>
        <br className="select-none" />
        <br className="select-none" />
        <ul className="grid grid-cols-2 gap-y-6 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
          <ListItem icon={SiDocker} text="Docker" />
          <ListItem icon={SiMongodb} text="MongoDB" />
          <ListItem icon={SiPostgresql} text="PostgreSQL" />
          <ListItem icon={SiRedis} text="Redis" />
          <li className="flex space-x-2 items-center">
            <span>
              <img
                src="/MySQL.png"
                alt="MySQL"
                className="h-8 w-8 select-none"
              />
            </span>
            <span>MySQL</span>
          </li>
          <li className="flex space-x-2 items-center">
            <span>
              <img
                src="/tauri.png"
                alt="tauri"
                className="h-8 w-8 select-none"
              />
            </span>
            <span>Tauri</span>
          </li>
        </ul>
      </Content>
      <Footer />
    </>
  );
}

export default Home;
