import Layout from '../componantes/Layout'
import "../styles/index.scss";
import "../styles/header.scss";
import "../styles/boxVideo.scss";
import "../styles/menu.scss";
import "../styles/footer.scss";
import "../styles/info.scss";
import "../styles/pageMenu.scss";


function MyApp({ Component, pageProps, } , ) {

  return (
    <Layout data={pageProps.data}>
    <Component {...pageProps} />
    </Layout>
  )
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




 


export default MyApp
