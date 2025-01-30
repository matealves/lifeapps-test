"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export const HomeBanner = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="w-full max-w-screen-2xl h-full lg:h-96"
      >
        <SwiperSlide>
          <div className="w-full h-full flex justify-center items-center">
            <img
              src="/banner1.png"
              alt="banner1.png"
              className="w-full bg-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full flex justify-center items-center">
            <img
              src="/banner2.png"
              alt="banner2.png"
              className="w-full bg-cover"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
