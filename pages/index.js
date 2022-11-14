import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import BoxVideo from "../componantes/BoxVideo";
import Contact from "../componantes/Contact";
import Footer from "../componantes/Footer";
import Info from "../componantes/Info";
import Menu from "../componantes/Menu";
import getBurgers from "./api/getBurgers";


export default function Home() {
  
 
 
 
  return (
    <>
      <BoxVideo   />
      <Menu />
      <Info/>
      
    </>
  );
}
// export async function getServerSideProps({
//   params,
//   req,
//   res,
//   query,
//   preview,
//   previewData,
//   resolvedUrl,
//   locale,
//   locales,
//   defaultLocale,
// }) {
//   console.log("Logging : " + res);
//   const data = await axios
//     .get("http://localhost:3001/api/user/config/", {
//       headers: {
//         token: process.env.API_KEY,
//       },
//     })
//     .then((res) => {
//       return res.data;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
//   return {
//     props: {
//       data,
//     },
//   };
// }




 
