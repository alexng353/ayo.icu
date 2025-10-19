import { Tooltip } from "@mui/material";
import Link from "next/link";
import { MdContactPage } from "react-icons/md";
import { SiGithub, SiLinkedin } from "react-icons/si";

export const HeadIcons = () => (
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
