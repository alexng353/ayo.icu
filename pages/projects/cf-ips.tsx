import Footer from "../../components/share/footer";
import Navbar from "../../components/share/navbar";
import Content from "../../components/content";
import Head from "next/head";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Tooltip,
} from "@mui/material";
import { NavLink } from "../../components/reuse";
import { RiArrowUpSFill } from "react-icons/ri";

export default function TypescriptGenerator() {
  return (
    <>
      <Head>
        <title>Cloudflare IP Range Grabber | alexng353</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Content>
        <div className="flex justify-center ">
          <Typography variant="h4" component="h4">
            Cloudflare IP Range Grabber
          </Typography>
        </div>
        <Typography variant="body1" component="p">
          A very simple tool to grab the Cloudflare IP range from the Cloudflare
          website and parse it into a nginx compatible format.
          <br />
          <br />
          <NavLink href="https://github.com/alexng353/cf-ips">
            Source Code
          </NavLink>
          <NavLink href="https://github.com/alexng353/cf-ips/releases/tag/v1.0.0">
            Download
          </NavLink>
          <NavLink href="https://github.com/alexng353/not-a-tutorial/blob/main/nginx/Get%20IPs%20from%20Cloudflare.md">
            Get Real IP from Cloudflare
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
              - Generate the thing you need to put in your nginx config with 1
              command
            </Typography>
          </AccordionDetails>
        </Accordion>

        <img src="/projects/cf-ips/demo.png" alt="demo" />
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
