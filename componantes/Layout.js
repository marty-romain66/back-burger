import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children, data}, ) {
  
  return (
    <>

     
    <Header />
      <main> {children}</main>
      <Footer/>
      <div id="root"></div>
    </>
  );
}
