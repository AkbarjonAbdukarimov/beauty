import Head from "next/head";
import Script from "next/script";

//components
import Nav from "./components/Nav";
import MainContent from "./components/MainContent";
//css
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
export default function Home() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Beauty</title>
      </Head>
      <Nav />
      <MainContent />
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"></Script>
    </>
  );
}
