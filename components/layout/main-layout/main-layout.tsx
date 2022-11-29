/*
  AUTHOR: Diego Salas Noain
  FILENAME: main-layout.tsx
  SPECIFICATION: 
    - We need to always have a heading and a footer in all pages
  FOR: CS 5364 Information Retrieval Section 001 
*/

import React from "react";
import Footer from "../footer";
import NavBar from "../navbar";

/*
  NAME: Layout
  PARAMETERS: props
  PURPOSE: It wraps all of the pages to add the same Navbar and Footer
  PRECONDITION: None
  POSTCONDITION: The children pages are appended to this higher order component
*/

const Layout: React.FC = (props: any) => (
  <>
    <NavBar />
    <main>{props.children}</main>
    <Footer />
  </>
);

export default Layout;
