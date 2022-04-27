import Head from "next/head";
import Image from "next/image";
import { Button, TextField } from "@mui/material";
import Footer from "./share/footer";
import Navbar from "./share/navbar";
import BubbleWrap from "../components/bubblewrap";
import LoremIpsum from "../components/lipsum";
import { useState } from "react";
function Home() {
  const [many, setMany] = useState(0);
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="mb-20 mt-10">
        <div className="flex justify-center">
          <div className="w-3/5 text-justify">
            <Button
              variant="outlined"
              onClick={() => {
                console.log("hello world!");
              }}
            >
              {" "}
              Hello World{" "}
            </Button>

            <div>
              <br />

              <TextField
                id="textfield"
                label="Generate buttons"
                helperText="Won't make more than 9999 buttons"
                type="number"
                onChange={(e) => {
                  if (parseInt(e.target.value) <= 9999) {
                  setMany(parseInt(e.target.value));
                  } else {
                    setMany(9999);
                  }}}/>
              <BubbleWrap many={many} toggle={false}/>

            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}

export default Home;
