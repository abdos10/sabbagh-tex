import React from "react";

export default function GlassyButton({
  text = "Click Me",
  bg = "bg-white/20",
  onClick,
  className = "",
}) {
  return (
    <button
      onClick={onClick}
      className={`
        ${bg}
        px-8 py-4 sm:px-6 sm:py-3 
        rounded-2xl
        backdrop-blur-xl
        border border-white/30
        text-white
        text-sm sm:text-base
        font-light tracking-wide
        shadow-[0_8px_25px_rgba(0,0,0,0.12)]
        transition-all duration-300
        hover:bg-white/30
        hover:shadow-[0_10px_40px_rgba(0,0,0,0.18)]
        hover:scale-[1.03]
        active:scale-[0.98]
        ${className}
      `}
    >
      {text}
    </button>
  );
}
