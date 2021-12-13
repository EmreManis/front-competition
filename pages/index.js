import { Fragment } from "react";

import Head from "next/head";

import Slide from "../components/carousel/Carousel";
import SearchSection from "../components/searchSection/SearchSection";


function HomePage() {
  return (
    <Fragment>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <SearchSection />
    </Fragment>
  );
}

export default HomePage;
