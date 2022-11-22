import React from "react";
import mainStyle from "../styles/Layout.module.css";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className={mainStyle.conatiner}>{children}</div>
    </>
  );
};

export default Layout;
