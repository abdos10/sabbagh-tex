import React from "react";

export default function HeroText() {
  return (
    <div
      className="
        absolute
        top-[22%] sm:top-[18%] md:top-[28%]
        left-[5%] sm:left-[7%]
        right-[5%] md:right-auto
        max-w-xl
        text-white
        drop-shadow-[0_2px_20px_rgba(0,0,0,0.25)]
      "
    >
      <h1
        className="
          text-4xl sm:text-4xl md:text-5xl lg:text-7xl
          font-light 
          leading-tight
          tracking-wide
          text-center md:text-left
        "
      >
        Your Gateway to <br /> Premium Global Textiles
      </h1>

      {/* <p
        className="
          mt-6
          ml-2
          text-lg 
          md:text-xl
          text-white/90
          font-light
          leading-relaxed
        "
      >
        Discover refined textures, timeless craftsmanship, and world-class fabrics 
        sourced from all the world.
      </p> */}
    </div>
  );
}
