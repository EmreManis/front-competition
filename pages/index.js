import { Fragment } from "react";

import Head from "next/head";
import Script from "next/script";

import SearchSection from "../components/searchSection/SearchSection";
import Intro from "../components/introSection/Intro";
import Banner from "../components/banner/banner";
import NextSeason from "../components/nextSeason/NextSeason";
import TourSection from "../components/tourSection/TourSection";
import OtelSection from "../components/otelSection/OtelSection";
import PromoForm from "../components/promoForm/PromoForm";
import AppsSection from "../components/appsSection/AppsSection";
import QuestionSection from "../components/questionSection/QuestionSection";

const apiKey = process.env.GOOGLE_MAP_API_KEY;

const nearBySearch = `https://maps.googleapis.com/maps/api/place/nearbysearch/json
?keyword=cruise
&location=38.9637%35.2433
&radius=1500
&type=restaurant
&key=${apiKey}`;

function HomePage() {
  return (
    <Fragment>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Script
        strategy="beforeInteractive"
        src={`https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&query=shaheen%20public&type=lodging`}
      ></Script>
      <SearchSection />
      <Intro />
      <Banner />
      <NextSeason />
      <TourSection />
      <OtelSection />
      <PromoForm />
      <AppsSection />
      <QuestionSection />
    </Fragment>
  );
}

export default HomePage;
