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

import LocationAutoComplete from "../components/searchSection/LocationAutoComplete";

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
      <Script strategy="beforeInteractive" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC50MMu9XK3qqdSYdalwZrBHaunjewfmiM&libraries=places"></Script>
      <SearchSection />
      <Intro />
      <Banner />
      <NextSeason />
      <TourSection />
      <OtelSection />
      <PromoForm />
      <AppsSection />
      <QuestionSection />
      {/* <LocationAutoComplete /> */}
    </Fragment>
  );
}

export default HomePage;
