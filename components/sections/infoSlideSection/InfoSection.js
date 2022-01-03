import { Fragment } from "react";

import Carousel from "./carousel/Carousel";
import Promo from "./promotion/Promotion";
import Discount from "./discount/Discount";

const InfoSection = () => {
  return (
    <Fragment>
       <div className="md:hidden mb-14">
        <Discount />
      </div>
      <section className="md:flex justify-center mb-7">
        <div className="flex justify-center md:justify-between md:widthSearch">
          <Carousel />
          <Promo />
        </div>
      </section>
      <div className="hidden md:block">
        <Discount />
      </div>
    </Fragment>
  );
};

export default InfoSection;
