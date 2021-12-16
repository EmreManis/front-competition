import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import classes from "./carousel.module.css";

import tatilBudur from "../../public/tour/tour1.png";

const Slide = () => {
  let slide = [];
  for (let i = 0; i <= 8; i++) {
    slide.push(
      <SwiperSlide className="swiperItem" key={i}>
        <div className="flex border borderRadius10 justify-center items-center swiperItem">
          <Image src={tatilBudur} width={50} height={50} alt="tatil-budur" />
          <h3 className="poppins14 poppinsSemiBold">Ülkelere Göre Turlar</h3>
        </div>
      </SwiperSlide>
    );
  }

  return (
    <div>
      <Swiper
        modules={[Navigation]}
        slidesPerView={4}
        // navigation={true}
        className={classes.swiper}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
          <button>
            <span className="swiper-button-prev" />
          </button>
          {slide}
          <button>
            <span className="swiper-button-next" />
          </button>
      </Swiper>
    </div>
  );
};

export default Slide;
