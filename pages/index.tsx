import Head from "next/head";
import Content from "../components/content";
import { ListItem } from "../components/list-item";
import Footer from "../components/share/footer";
import Navbar from "../components/share/navbar";

import {
  SiDocker,
  SiExpress,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiLinkedin,
  SiMongodb,
  SiNextdotjs as SiNextDotJs,
  SiNodedotjs as SiNodeDotJs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiRedis,
  SiRust,
  SiTailwindcss,
  SiTwitter,
  SiTypescript,
} from "react-icons/si";

import { MdContactPage } from "react-icons/md";

import { Tooltip } from "@mui/material";
import Link from "next/link";
import { useMemo } from "react";

const HeadIcons = () => (
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
        <MdContactPage
          style={{ color: "white", position: "relative", top: "-2" }}
          className="h-7 w-7 hover:scale-110 transition-all ease-in-out"
        />
      </Link>
    </Tooltip>
  </div>
);
function Home() {
  const show = useMemo(() => {
    const date = new Date();
    return (
      (date.getMonth() === 10 && date.getDate() > 25) ||
      date.getMonth() === 11 ||
      (date.getMonth() === 0 && date.getDate() < 10)
    );
  }, []);

  return (
    <>
      <Head>
        <title>Home | alexng353</title>
      </Head>
      <Navbar />
      <Content>
        <HeadIcons />
        <p>Hey there, I&apos;m</p>
        <h1 className="text-4xl tracking-wide">Alexander Ng</h1>
        <div className="flex flex-col gap-4">
          <p className="pt-3">
            A 17 year old Full Stack web developer based in{" "}
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
            write a lot of TypeScript, React and Next, but I also have some
            experience with Rust, Python, and GoLang.
          </p>
          <p>
            In my spare time, I like to build stuff, play games, and learn new
            things, which currently include Rust, and MongoDB, though my
            favourite database right now is PostgreSQL. I&apos;m also learning
            Docker and Prisma.
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
          <ListItem icon={SiExpress} text="ExpressJS" />
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
          <MySQL />
          <Tauri />
        </ul>
        {show && (
          <a
            href="https://embed.im/snow/"
            className="absolute bottom-20 right-20 text-white hover:underline bg-green-500 rounded-lg px-4 py-2"
          >
            snow effect from embed.im/snow
          </a>
        )}
      </Content>
      <Footer />
    </>
  );
}

export default Home;

const Tauri = () => (
  <li className="flex space-x-2 items-center">
    <span>
      <img src="/tauri.png" alt="tauri" className="h-8 w-8 select-none" />
    </span>
    <span>Tauri</span>
  </li>
);

const MySQL = () => (
  <li className="flex space-x-2 items-center">
    <span>
      <img src="/MySQL.png" alt="MySQL" className="h-8 w-8 select-none" />
    </span>
    <span>MySQL</span>
  </li>
);
