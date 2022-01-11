import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import classes from "../infoSection.module.css"

import tatilBudur from "../../../../public/tatilBudur.jpg";

const Slide = () => {
  let slide = [];
  for (let i = 0; i <= 5; i++) {
    slide.push(
      <SwiperSlide className={classes.swiperslide} key={i}>
        <Image src={tatilBudur} width={780} height={340} alt="tatil-budur" />
      </SwiperSlide>
    );
  }

  return (
    <div>
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={10}
        slidesPerView={1}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet",
        }}
        className={classes.swiper}
      >
        {slide}
      </Swiper>
    </div>
  );
};

export default Slide;
