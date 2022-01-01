import Link from "next/link";
import Image from "next/image";

import OtelItems from "./OtelItems";

import classes from "./otelSection.module.css";

import forwardIcon from "../../../public/icons/forwardIcon.svg";

const OtelSection = () => {
  return (
    <section className="md:flex flex-col items-center mt-10">
      <div
        className={`xl:w-1360  overflow-hidden borderRadius26 ${classes.otelSection}`}
      >
        <div className="mt-5">
          <div className=" mb-2.5">
            <h1 className="poppins20 md:poppins24">Kararsız mı Kaldınız?</h1>
          </div>
          <div className="flex">
            <h1 className="poppinsRegular opacity-50 md:opacity-100">
              Nasıl bir Tatil istediğinize karar veremediyseniz size önerdiğimiz
              tatil temalarını inceleyin!
            </h1>
          </div>
        </div>
        <OtelItems />
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

export default OtelSection;
