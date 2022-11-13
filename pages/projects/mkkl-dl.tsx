import Footer from "../../components/share/footer";
import Navbar from "../../components/share/navbar";
import Content from "../../components/content";
import Head from "next/head";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { NavLink } from "../../components/reuse";
import { RiArrowUpSFill } from "react-icons/ri";

export default function TypescriptGenerator() {
  return (
    <>
      <Head>
        <title>Mangakakalot Downloader | alexng353</title>
      </Head>

      <Navbar />
      <Content>
        <div className="flex justify-center ">
          <Typography variant="h4" component="h4">
            Mangakakalot Downloader
          </Typography>
        </div>
        <Typography variant="body1" component="p">
          This is a tool I made to download manga from{" "}
          <a
            className="text-green-400 hover:underline"
            href="https://mangakakalot.com"
          >
            Mangakakalot
          </a>
          . It&apos;s a command-line tool, so you&apos;ll need to know how to
          use the command line to use it. It&apos;s written in Rust and uses the{" "}
          <a
            className="text-green-400 hover:underline"
            href="https://github.com/seanmonstar/reqwest"
          >
            reqwest
          </a>{" "}
          library to make HTTP requests. It also uses regular expressions to
          parse the HTML, and grab the images from the site.
          <div className="my-2">
            <NavLink href="https://github.com/alexng353/rust-mangakakalot">
              Source Code
            </NavLink>
            <NavLink href="https://github.com/alexng353/rust-mangakakalot/releases/latest">
              Download
            </NavLink>
          </div>
        </Typography>
        <Accordion>
          <AccordionSummary expandIcon={<RiArrowUpSFill />}>
            <Typography variant="h6" component="h6">
              Features
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" component="p">
              - Download from mangakakalot with a single command
              <br />
              - Lightweight at 10ish MB
              <br />
              - It&apos;s an executable, so no need to install rust
              <br />
              - MIT Licensed, do as you please with the source
              <br />
              - Supports downloading between a range
              <br />
              - Supports downloading by chapter name
              <br />
              - Supports downloading by chapter number
              <br />- Supports downloading all chapters after a certain chapter
            </Typography>
          </AccordionDetails>
        </Accordion>
        <div className="w-full grid place-items-center pt-4">
          <span className="text-red-400 bg-gray-900 rounded-lg px-2 py-1 mb-4">
            <pre>
              rust-mangakakalot.exe
              https://mangakakalot.com/read-wg9rm158504883358
            </pre>
          </span>
          <img
            src="/projects/mkkl-dl/demo.png"
            alt="demo"
            width={557}
            height={255}
          />
        </div>
      </Content>
      <Footer />
    </>
  );
}

//DATABASE_URL="postgresql://umami:46vg79wGdBnD8Sw7YcDpGnTP@localhost:5445/umami?schema=public"
