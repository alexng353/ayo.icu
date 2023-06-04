import { NavLink } from "../reuse";

function Navbar() {
  return (
    <div className="flex flex-row justify-center mt-2">
      <div className="float-left w-auto flex gap-4">
        <NavLink href="/">/home</NavLink>
        <NavLink href="/about">/about</NavLink>
        <NavLink href="/projects">/projects</NavLink>
      </div>
    </div>
  );
}

export default Navbar;
