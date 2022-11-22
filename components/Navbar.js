import React from "react";
import Link from "next/link";
import navStyles from "../styles/Navbar.module.css";

function Navbar() {
  return (
    <nav className={navStyles.userList}>
      <ul>
        <Link href="/" className={navStyles.link}>
          Home
        </Link>
        <Link href="/about" className={navStyles.link}>
          About
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
