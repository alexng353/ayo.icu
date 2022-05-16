import { AppBar, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import { Component } from "react";
import Menu from "./menuList";
import styles from "../../styles/bar.module.css";
import { NavLink } from "../reuse";



function Navbar() {
  return (
    <header>
      <AppBar position="static" className={styles.navbar}>
        <div className="flex justify-center">
          <div>
            <NavLink href="/">/</NavLink>
            &nbsp;&nbsp;
            <NavLink href="/about">about</NavLink>
            &nbsp;&nbsp;

          </div>
          {/* <Menu /> */}
        </div>
      </AppBar>
    </header>
  );
}

export default Navbar;
