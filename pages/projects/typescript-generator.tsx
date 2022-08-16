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
import Image from "next/image";
import { RiArrowUpSFill } from "react-icons/ri";

export default function TypescriptGenerator() {
  return (
    <>
      <Head>
        <title>Typescript Generator | alexng353</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Content>
        <div className="flex justify-center ">
          <Typography variant="h4" component="h4">
            Typescript Generator
          </Typography>
        </div>
        <Typography variant="body1" component="p">
          A barebones typescript project generator written in rust. This project
          was written to help me learn rust, so the code isn&apos;t super great.
          <br />
          <br />
          <NavLink href="https://github.com/alexng353/typescript-generator">
            Source Code
          </NavLink>
          <NavLink href="https://github.com/alexng353/typescript-generator/releases/tag/v1.0.0-release">
            Download
          </NavLink>
        </Typography>
        <Accordion>
          <AccordionSummary expandIcon={<RiArrowUpSFill />}>
            <Typography variant="h6" component="h6">
              Features
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" component="p">
              - Generate a typescript file with a single command
              <br />
              - Lightweight at 1.7 MB
              <br />
              - Auto install dependencies
              <br />
              - Auto generate MIT license
              <br />
              - Auto generate README.md
              <br />
              - Auto generate package.json, tsconfig.json and nodemon.json
              <br />
              - Includes customizable logger
              <br />- Run your project with npm run dev
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Image
          src="/projects/typescript-generator/demo.png"
          alt="demo"
          width={1602}
          height={1744}
        />
        {/* not to self: write some documentation and clean up the codebase */}
        {/* <Accordion>
          <AccordionSummary expandIcon={<RiArrowUpSFill />}>
            <Typography variant="h6" component="h6">
              Customize
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" component="p">
              Very easily customize the project by editing the corresponding file in main.rs
            </Typography>
          </AccordionDetails>
        </Accordion>
         */}
      </Content>
      <Footer />
    </>
  );
}
