import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import Head from "next/head";
import { RiArrowUpSFill } from "react-icons/ri";
import Content from "../../components/content";
import { NavLink } from "../../components/reuse";
import Footer from "../../components/share/footer";
import Navbar from "../../components/share/navbar";
import { Headers } from "../../components/headers";

export default function TypescriptGenerator() {
  return (
    <>
      <Head>
        <Headers
          title="alexng353 | Cloudflare IP Range Grabber"
          description="A very simple tool to grab the Cloudflare IP range from the Cloudflare website and parse it into a nginx compatible format."
          image="https://raw.githubusercontent.com/alexng353/cf-ips/main/demo.png"
          url="https://ayo.icu/projects/cf-ips"
        />
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
