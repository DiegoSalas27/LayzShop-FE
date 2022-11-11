import React from "react";
import Footer from "../footer";
import NavBar from "../navbar";

const Layout: React.FC = (props: any) => (
  <>
    <NavBar />
    <main>{props.children}</main>
    <Footer />
  </>
);

export default Layout;
