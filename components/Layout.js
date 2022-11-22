import React from "react";
import mainStyle from "../styles/Layout.module.css";
import Navbar from "./Navbar";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();
  console.log(router.asPath);
  return (
    <>
      {router.asPath === `${"/" || "/about"}` ? <Navbar /> : null}

      <div className={mainStyle.conatiner}>{children}</div>
    </>
  );
};

export default Layout;
