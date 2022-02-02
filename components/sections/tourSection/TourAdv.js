import { Fragment } from "react";
import Image from "next/image";

import tourAdv from "../../../public/tour/touradv.webp";
import tourResp from "../../../public/tour/tourResp.webp";
import gemi from "../../../public/tour/gemi.webp";
import kultur from "../../../public/tour/kultur.webp";
import mavi from "../../../public/tour/mavi.webp";
import hafta_sonu from "../../../public/tour/hafta_sonu.webp";


const TourAdv = () => {
  return (
    <Fragment>

        <div className="mt-8 hidden md:block">
          <Image src={tourAdv} alt="Roma" />
        </div>
        <div className=" md:hidden">
          <div>
            <Image src={tourResp} alt="Roma" height={500} width={500} />
          </div>
        </div>
 
    </Fragment>
  );
};

export default TourAdv;
