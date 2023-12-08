import Footer from "@components/share/footer";
import Navbar from "@components/share/navbar";
import Content from "@components/content";
import { Headers } from "@components/headers";

import styles from "@styles/contact.module.css";

import { Button } from "@mui/material";
import { useRouter } from "next/router";

export default function Contact() {
  const router = useRouter();
  return (
    <>
      <Headers
        title="alexng353 | contact"
        description="How to contact me"
        image="https://cdn.ayo.icu/assets/ayo.icu/{season}/contact.png"
        imageAlt="Contact me"
      />

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
              void router.push("/");
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
