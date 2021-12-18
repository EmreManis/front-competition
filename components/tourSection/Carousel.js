import { useState, useRef, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import classes from "./carousel.module.css";

import tatilBudur from "../../public/tour/tour1.png";
import forwardArrow from "../../public/carousel/forwardArrow.png";
import backArrow from "../../public/carousel/backArrow.png";

const Slide = () => {
  const [swiper, setSwiper] = useState();
  const prevRef = useRef();
  const nextRef = useRef();

  useEffect(() => {
    if (swiper) {
      console.log("Swiper instance:", prevRef.current);
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [swiper]);

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
    <div className="flex mx-10 mt-5">
      <div className="swiper-button flex justify-center items-center mr-6" ref={prevRef}>
      <Image src={backArrow} width={18} height={18} alt="tatil-budur" />
      </div>
      <Swiper
        modules={[Navigation]}
        slidesPerView={4}
        // navigation={true}
        className={classes.swiper}
        navigation={{
          prevEl: prevRef?.current,
          nextEl: nextRef?.current,
        }}
        onSwiper={setSwiper}
      >
        {slide}
      </Swiper>
      <div className="swiper-button flex justify-center items-center" ref={nextRef}>
        <Image src={forwardArrow} width={18} height={18} alt="tatil-budur" />
      </div>
    </div>
  );
};

export default Slide;
