export default function BrandBadge() {
  return (
    <div
      className="
        relative
        w-48 h-48
        rounded-full
        backdrop-blur-xl
        bg-[radial-gradient(circle_at_30%_30%,#b98a5e,#6a4028)]
        border border-[#d4b08a]/40
        shadow-[0_0_25px_rgba(0,0,0,0.25)]
        flex items-center justify-center
        overflow-hidden
      "
    >

      {/* Metallic highlight overlay */}
      <div
        className="
          absolute inset-0
          rounded-full
          bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.18),transparent_60%)]
        "
      />

      {/* Text */}
      <p className="relative text-center text-white/90 text-sm tracking-wide">
        Quality Assured<br />since 1998
      </p>
    </div>
  );
}
