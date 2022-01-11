import { Fragment, Suspense, lazy } from "react";

import Head from "next/head";
import Script from "next/script";

import SearchSection from "../components/sections/searchSection/SearchSection";
import InfoSection from "../components/sections/infoSlideSection/InfoSection";
import NextSeason from "../components/sections/nextSeasonSection/NextSeason";
import TourSection from "../components/sections/tourSection/TourSection";
import OtelSection from "../components/sections/alternativeOtelSection/OtelSection";
import CampaignForm from "../components/sections/campaignSection/CampaignForm";
import AppsSection from "../components/sections/appsSection/AppsSection";
import QuestionSection from "../components/sections/questionSection/QuestionSection";
import Banner from "../components/banner/Banner";


const apiKey = process.env.GOOGLE_MAP_API_KEY;

function HomePage() {
  return (
    <Fragment>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      </Head>
      <Script
        strategy="beforeInteractive"
        src={`https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&query=shaheen%20public`}
      ></Script>
      <SearchSection />
      <InfoSection />
        <Banner />
        <NextSeason />
        <div className="block md:hidden">
          <AppsSection />
        </div>
        <TourSection />
        <OtelSection />
        <CampaignForm />
        <div className="hidden md:block">
          <AppsSection />
        </div>
        <QuestionSection />
    </Fragment>
  );
}

export default HomePage;
