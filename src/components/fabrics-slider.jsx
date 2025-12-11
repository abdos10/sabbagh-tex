import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import OptimizedImage from "./OptimizedImage";

import "swiper/css";
import "swiper/css/navigation";

const fabricImages = [
  { src: "/product1.png", alt: "Premium Fabric Product 1" },
  { src: "/product2.png", alt: "Premium Fabric Product 2" },
  { src: "/product3.png", alt: "Premium Fabric Product 3" },
  { src: "/product4.png", alt: "Premium Fabric Product 4" }
];

export default function FabricSlider({ isStatic = false }) {
  return (
    <div className={`
      ${isStatic 
        ? 'relative mx-auto w-full max-w-2xl' 
        : 'absolute bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-8 left-4 sm:left-auto z-50 w-auto sm:w-[400px] md:w-[480px] slider-lg:w-[570px] max-w-[calc(100vw-2rem)] sm:max-w-none'
      }
      bg-black/10 
      backdrop-blur-xl 
      border border-black/20 
      rounded-2xl sm:rounded-3xl md:rounded-[32px]
      shadow-[0_8px_30px_rgba(0,0,0,0.12)]
      py-2 px-2 sm:py-3 sm:px-3 md:py-4 md:px-4
    `}>

      {/* Premium Text - Center Top */}
      <div className="text-center mb-1 sm:mb-2 mt--10">
        <p className="
          text-[#7C3400FF]
          text-[10px] sm:text-xs md:text-sm
          tracking-[0.15em] sm:tracking-[0.2em]
          uppercase
          letter-spacing-wide
          drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]
        ">
          Premium Collection
        </p>
        <div className="
          w-12 sm:w-16 md:w-20
          h-[1.5px] sm:h-[2px]
          bg-gradient-to-r
          from-transparent
          via-[#A44A05FF]
          to-transparent
          mx-auto
          mt-0.5 sm:mt-1
        "></div>
      </div>

      {/* Custom arrows */}
      {/* <div className="swiper-button-prev !left-2 !text-white"></div>
      <div className="swiper-button-next !right-2 !text-white"></div> */}

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        slidesPerView={1.5}
        spaceBetween={8}
        loop={true}
        autoplay={{
          delay: 10,            // VERY small delay so it moves continuously
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        speed={2500}            // SLOW, SMOOTH sliding (increase for slower)
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 8,
          },
          480: {
            slidesPerView: 2.2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2.2,
            spaceBetween: 12,
          },
          1024: {
            slidesPerView: 2.5,
            spaceBetween: 12,
          },
        }}
        className="
            bg-grey/10
            backdrop-blur-xl
            border border-grey/20
            shadow-[0_8px_30px_rgba(0,0,0,0.12)]
            rounded-2xl sm:rounded-3xl md:rounded-[32px]
        "
      >
        {fabricImages.map((item, index) => (
          <SwiperSlide key={index}>
            <OptimizedImage
              src={item.src}
              alt={item.alt}
              className="
                rounded-xl sm:rounded-[18px] md:rounded-[22px]
                w-full 
                h-28 sm:h-36 md:h-32 slider-lg:h-36
                object-cover 
                shadow-md
              "
              lazy={true}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Center Button
      <button className="
        absolute
        bottom-[10px]
        left-1/2
        -translate-x-1/2
        px-6
        py-1
        rounded-xl 
        text-white 
        font-semibold 
        tracking-wide
        bg-[#6A4B33]
        shadow-[0_8px_24px_rgba(0,0,0,0.25)]
        transition-all
        duration-300
        hover:shadow-[0_12px_32px_rgba(0,0,0,0.35)]
        hover:scale-[1.05]
        z-10
        whitespace-nowrap
      ">
        Explore more
      </button> */
      
      }
    </div>
  );
}
