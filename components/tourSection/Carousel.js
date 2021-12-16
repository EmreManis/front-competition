import { useState, useRef, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import classes from "./carousel.module.css";

import tatilBudur from "../../public/tour/tour1.png";

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
    console.log(prevRef.current);
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
    <div className="flex mx-10">
      <div className="swiper-button-next" ref={prevRef}>
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
      <div className="swiper-button" ref={nextRef}>
      </div>
    </div>
  );
};

export default Slide;
