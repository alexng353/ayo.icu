import { Typography } from "@mui/material";
import Head from "next/head";
import Content from "../../components/content";
import Footer from "../../components/share/footer";
import Navbar from "../../components/share/navbar";
// grab loading wheel from material-ui
import Link from "next/link";
import { useToggle } from "usehooks-ts";

const CLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const isExternal = href.startsWith("http");
  const linkStyles =
    "w-full border text-center px-4 py-2 border-green-500 hover:bg-green-500 rounded-lg transition-all";

  if (isExternal) {
    return (
      <a className={linkStyles} href={href}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={linkStyles}>
      {children}
    </Link>
  );
};

function Projects() {
  const [showCatGif, toggleCatGif] = useToggle(false);

  return (
    <>
      <Head>
        <title>Projects | alexng353</title>
      </Head>
      <Navbar />
      <Content>
        <div className="flex justify-center h-full">
          <div className="text-center max-w-xl h-full ">
            <Typography variant="h4" component="h4">
              Projects
            </Typography>
            <p>
              This is a list of projects I&apos;ve worked on, which mostly
              consist of a list of tools I&apos;ve made.
            </p>
            <br />
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
              <CLink href="https://edubeyond.org">EduBeyond</CLink>
              <CLink href="/projects/mkkl-dl">Mangakakalot Downloader</CLink>
              <CLink href="/projects/typescript-generator">
                TypeScript Generator
              </CLink>
              <CLink href="/projects/cf-ips">Cloudflare IPs</CLink>
            </div>
            <div className="grid place-items-center mt-4">
              {showCatGif && (
                <a
                  href="https://giphy.com/gifs/cat-WYEWpk4lRPDq0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/giphy.webp" alt="cat" width={400} height={400} />
                </a>
              )}
              <button
                onClick={toggleCatGif}
                className="text-green-500 hover:bg-gray-500 rounded-lg px-4 py-2 transition-all"
              >
                {showCatGif ? "Hide the cat gif" : "Show me the cat gif"}
              </button>
            </div>
          </div>
        </div>
      </Content>
      <Footer />
    </>
  );
}

export default Projects;
