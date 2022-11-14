import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children, data}, ) {
  console.log(data);
  return (
    <>

     
    <Header data={data}/>
      <main> {children}</main>
      <Footer/>
      <div id="root"></div>
    </>
  );
}
