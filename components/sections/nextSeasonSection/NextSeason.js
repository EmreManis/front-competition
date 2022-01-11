import Link from "next/link";
import Image from "next/image";

import Card from "./Card";
import NextSeasonNav from "./NextSeasNav";

import classes from "./nextSeasSect.module.css";

import forwardIcon from "../../../public/icons/forwardIcon.webp";
import NextSeasMobileNav from "./NextSeasMobileNav";

const NextSeason = () => {
  return (
    <section className="flex flex-row md:flex-col items-center mt-16">
      <div
        className={`xl:w-1360 md:borderRadius26 ${classes.nextSeason} ${classes.nextSeasonPadding}`}
      >
        <div className="flex flex-col ml-12 md:ml-0">
          <div className="flex justify-center md:justify-start mb-5 mt-10 md:mt-12">
            <h1 className="poppins20 md:poppins24">
              Yazın ilk fırsatlarını kaçırma!
            </h1>
          </div>
          <div className="flex justify-center ml-14 md:hidden">
            <NextSeasMobileNav />
          </div>
        </div>
        <div className="hidden md:block">
          <NextSeasonNav />
        </div>
        <Card />
        <div className="md:hidden flex justify-center mt-8">
          <Link href="/">
            <a>
              <span className="blueTone pr-2">Daha fazla göster</span>
              <Image src={forwardIcon} alt="" />
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NextSeason;
