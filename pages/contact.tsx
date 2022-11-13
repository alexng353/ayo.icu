import React from "react";
import Head from "next/head";
import Footer from "../components/share/footer";
import Navbar from "../components/share/navbar";
import Content from "../components/content";

import styles from "../styles/contact.module.css";

import { Button } from "@mui/material";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <Navbar />
      <Content>
        {/* make the button small */}
        You can contact me at{" "}
        <a href="mailto:alex@ayo.icu" className={styles.link}>
          alex@ayo.icu
        </a>
        <br />
        {/* center a div horizontally */}
        <div className="flex justify-center">
          <Button
            onClick={() => {
              // redirect to the last page of the browser
              window.location.href = "/";
            }}
            variant="contained"
          >
            Go home
          </Button>
        </div>
      </Content>

      <Footer />
    </>
  );
}
