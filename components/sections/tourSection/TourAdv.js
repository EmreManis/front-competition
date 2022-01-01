import { Fragment } from "react";
import Image from "next/image";

import tourAdv from "../../../public/tour/touradv.png";
import tourResp from "../../../public/tour/tourResp.png";

const TourAdv = () => {
  return (
    <Fragment>
      <div className="mt-8 hidden md:block">
        <Image src={tourAdv} alt="Roma" />
      </div>
      <div className="flex justify-center md:hidden">
        <div>
          <Image src={tourResp} alt="Roma" height={500} width={500}/>
        </div>
      </div>
    </Fragment>
  );
};

export default TourAdv;
