import React from "react";
import Link from "next/link";
import { NavButton } from "./styled-mui";

function InlineHref(properties: { href: string; children: React.ReactNode }) {
  return <Link href={properties.href}>{properties.children}</Link>;
}

const NavLink = (properties: { href: string; children: React.ReactNode }) => (
  <Link href={properties.href}>
    <NavButton>{properties.children}</NavButton>
  </Link>
);

function Tech(properties: { children: React.ReactNode }) {
  return <div className="inline-flex">{properties.children}</div>;
}

export { InlineHref, NavLink, Tech };
