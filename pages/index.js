import { Fragment } from "react";

import Head from "next/head";

import SearchSection from "../components/searchSection/SearchSection";
import Intro from "../components/introSection/Intro";
import Banner from "../components/banner/banner";
import NextSeason from "../components/nextSeason/NextSeason";


function HomePage() {
  return (
    <Fragment>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <SearchSection />
      <Intro />
      <Banner />
      <NextSeason />
    </Fragment>
  );
}

export default HomePage;
