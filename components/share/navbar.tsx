import { AppBar, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import { Component } from "react";
import Menu from "./menuList";
import styles from "../../styles/bar.module.css";
import { NavLink } from "../reuse";

import MenuIcon from "@mui/icons-material/Menu";


function Navbar() {
  return (
    <div className="flex flex-row justify-center mt-2">
      <div className="float-left w-auto">
        <NavLink href="/">/</NavLink>
        &nbsp;&nbsp;
        <NavLink href="/about">/about</NavLink>
        &nbsp;&nbsp;
        <NavLink href="/projects">/projects</NavLink>
        <div className="md:ml-96 sm:ml-60 ml-16 float-right">
          <Menu />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
