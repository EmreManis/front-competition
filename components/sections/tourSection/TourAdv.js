import { Fragment } from "react";
import Image from "next/image";

import tourAdv from "../../../public/tour/touradv.webp";
import tourResp from "../../../public/tour/tourResp.webp";
import gemi from "../../../public/tour/gemi.webp";
import kultur from "../../../public/tour/kultur.webp";
import hafta_sonu from "../../../public/tour/hafta_sonu.webp";
import mavi from "../../../public/tour/mavi.webp";


const TourAdv = (props) => {

  const section = [tourAdv, gemi, kultur, hafta_sonu, mavi];
  const respSection = [tourResp, gemi, kultur, hafta_sonu, mavi];

  return (
    <Fragment>

        <div className="mt-8 hidden md:block">
          <Image src={section[props.activeSection]} alt="Roma" height={400} width={1180} className="borderRadius26"/>
        </div>
        <div className=" md:hidden">
          <div>
            <Image src={respSection[props.activeSection]} alt="Roma" height={500} width={500}/>
          </div>
        </div>
 
    </Fragment>
  );
};

export default TourAdv;
