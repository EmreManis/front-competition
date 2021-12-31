import { Fragment } from "react";

import Carousel from "./carousel/Carousel";
import Promo from "./promotion/Promotion";
import Discount from "./discount/Discount";

const InfoSection = () => {
  return (
    <Fragment>
      <section className="flex justify-center mb-7">
        <div className="flex justify-between  widthSearch">
          <Carousel />
          <Promo />
        </div>
      </section>
      <Discount />
    </Fragment>
  );
};

export default InfoSection;
