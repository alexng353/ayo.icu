import Head from "next/head";
import Image from "next/image";
import { Button, TextField } from "@mui/material";
import Footer from "./share/footer";
import Navbar from "./share/navbar";
import BubbleWrap from "./components/bubblewrap";
import LoremIpsum from "./components/lipsum";
import Test4 from "./test";

function Home() {
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
            <LoremIpsum />

            <Button
              variant="outlined"
              onClick={() => {
                console.log("hello world!");
              }}
            >
              {" "}
              Hello World{" "}
            </Button>

            <br />
            
            <div>
            <TextField
              id="textfield"
              label="How many buttons?"
              type="number"
              onChange={console.log(e.target.value)}
            />
            </div>

            <BubbleWrap many={100} toggle={true} text="show bubbles"/>

          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}

export default Home;
