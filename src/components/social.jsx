import React from "react";

export default function SocialIconG({
  icon,
  href = "#",
  size = "55px",
  hoverColor = "#8C6239", // bronze hover color
  blur = "8px",
  className = "",
}) {
  // Use className if provided, otherwise use inline style with size prop
  const hasSizeClass = className.includes('w-') || className.includes('h-');
  
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        flex items-center justify-center
        
        rounded-full
        border border-[#8C623970]
        bg-[#6F44198B]
        backdrop-blur-[${blur}]
        transition-all duration-300
        shadow-[0_4px_20px_rgba(0,0,0,0.15)]
        ${className}
      `}
      style={!hasSizeClass ? {
        width: size,
        height: size,
      } : {}}
    >
      <div
        className="transition-all duration-300"
        style={{
          color: "white",
        }}
      >
        {icon}
      </div>

      <style>
        {`
          a:hover {
            background: ${hoverColor}33; 
            border-color: ${hoverColor}66;
            transform: scale(1.1);
          }
          a:hover div {
            color: ${hoverColor};
          }
        `}
      </style>
    </a>
  );
}
