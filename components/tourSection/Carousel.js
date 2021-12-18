import { useState, useRef, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import classes from "./carousel.module.css";

import tour1 from "../../public/tour/tour1.png";
import tour2 from "../../public/tour/tour2.png";
import tour3 from "../../public/tour/tour3.png";
import tour4 from "../../public/tour/tour4.png";
import forwardArrow from "../../public/carousel/forwardArrow.png";
import backArrow from "../../public/carousel/backArrow.png";

const Slide = () => {
  const tourList = [
    {
      title: "Ülkelere Göre Turlar",
      img: tour1,
    },
    {
      title: "2022 Erken Rezervasyon Turları",
      img: tour2,
    },
    {
      title: "Amerika Turları",
      img: tour3,
    },
    {
      title: "Balayı Turları",
      img: tour4,
    },
    {
      title: "Ülkelere Göre Turlar",
      img: tour1,
    },
    {
      title: "2022 Erken Rezervasyon Turları",
      img: tour2,
    },
    {
      title: "Amerika Turları",
      img: tour3,
    },
    {
      title: "Balayı Turları",
      img: tour4,
    },
  ];

  const [swiper, setSwiper] = useState();
  const prevRef = useRef();
  const nextRef = useRef();

  useEffect(() => {
    if (swiper) {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [swiper]);

  const items = tourList.map((i, index) => {
    return (
      <SwiperSlide className="swiperItem" key={index}>
        <div className="flex border borderRadius10 px-2.5 items-center swiperItem">
          <Image
            className="borderRadius"
            src={i.img}
            width={50}
            height={50}
            alt="tatil-budur"
          />
          <div className="flex mx-3 w-4/5">
            <h3 className=" poppins14 poppinsSemiBold">{i.title}</h3>
          </div>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <div className="flex mx-10 mt-5">
      <div
        className="swiper-button flex justify-center items-center mr-6"
        ref={prevRef}
      >
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
        {items}
      </Swiper>
      <div
        className="swiper-button flex justify-center items-center"
        ref={nextRef}
      >
        <Image src={forwardArrow} width={18} height={18} alt="tatil-budur" />
      </div>
    </div>
  );
};

export default Slide;
