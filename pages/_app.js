import Layout from '../componantes/Layout'
import "../styles/index.scss";
import "../styles/header.scss";
import "../styles/boxVideo.scss";
import "../styles/menu.scss";
import "../styles/footer.scss";
import "../styles/info.scss";
import "../styles/pageMenu.scss";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

    // <Layout data={pageProps.data}>
    // <Component {...pageProps} />
    // </Layout>

 



