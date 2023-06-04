import { NavLink } from "../reuse";

function Navbar() {
  return (
    <div className="flex flex-row justify-center mt-2">
      <div className="float-left w-auto">
        <NavLink href="/">/home</NavLink>
        <span className="select-none">&nbsp;&nbsp;</span>
        {/* <NavLink href="/about">/about</NavLink>
        &nbsp;&nbsp; */}
        <NavLink href="/projects">/projects</NavLink>
        {/* &nbsp;&nbsp;
        <NavLink href="/tools">/tools</NavLink> */}
        {/* <div className="md:ml-80 sm:ml-60 ml-16 float-right">
          <Menu />
        </div> */}
      </div>
    </div>
  );
}

export default Navbar;
