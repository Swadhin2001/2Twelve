import "@/styles/globals.css";
import "@/styles/style.css";
import "@/styles/plugins.css";
import Head from "next/head";
// import '@/assets/js/custom'

export default function App({ Component, pageProps }) {
  return(

  <>
    <Head>
    <link rel="preload"
        href="https://fonts.googleapis.com/css2?family=Karla:wght@400;500&family=Poppins:wght@400;500;600;700&display=swap"
        as="style" onload="this.onload=null;this.rel='stylesheet'"/>
    <noscript>
        <link
            href="https://fonts.googleapis.com/css2?family=Karla:wght@400;500&family=Poppins:wght@400;500;600;700&display=swap"
            rel="stylesheet"/>
    </noscript>
    <link href="https://use.fontawesome.com/releases/v5.0.1/css/all.css" rel="stylesheet"/>
    </Head>
    <Component {...pageProps}/>
  </>
  );
}
