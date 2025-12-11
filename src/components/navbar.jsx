import React, { useState, useEffect } from "react";

export default function Navbar() {
  // 1. STATE: Initialize state with 'Home' as the default active link
  const [activeLink, setActiveLink] = useState("Home");
  // Mobile menu state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Advantages", href: "#advantages" },
    { name: "Collections", href: "#collections" },
    { name: "Contact", href: "#footer" },
  ];

  // 2. EFFECT: Set up scroll detection
  useEffect(() => {
    // Define all target sections
    const sections = navLinks.map(link => document.querySelector(link.href)).filter(Boolean);

    // Observer options: check when the section is within 50% of the viewport (or adjust based on your layout)
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Highlight when 50% of the section is visible
    };

    // Intersection Observer callback function
    const callback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Find the name of the link associated with the intersecting section
          const newActiveLink = navLinks.find(link => link.href === `#${entry.target.id}`);
          if (newActiveLink) {
            setActiveLink(newActiveLink.name);
          }
        }
      });
    };

    // Create and start the observer
    const observer = new IntersectionObserver(callback, options);
    sections.forEach(section => observer.observe(section));

    // Cleanup function: stop observing when the component unmounts
    return () => sections.forEach(section => observer.unobserve(section));
  }, []); // Empty dependency array ensures this runs only once after initial render

  // Close mobile menu when a link is clicked
  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
    setIsMobileMenuOpen(false);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('nav')) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      // Prevent body scroll when mobile menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className="
        fixed top-0 left-0 right-0 
        px-4 sm:px-6 md:px-8 lg:px-16 xl:px-40 
        py-2 sm:py-3
        flex justify-center
        z-[9999]
      "
      >
        <div
          className="
          w-full max-w-7xl 
          h-14 sm:h-16
          flex items-center justify-between       
          bg-white/10 
          backdrop-blur-xl 
          border border-white/20         
          rounded-2xl sm:rounded-3xl
          shadow-[0_8px_30px_rgba(0,0,0,0.1)]
          px-4 sm:px-6 md:px-8
        "
        >
          {/* Logo */}
          <div
            className="
            text-sm sm:text-base md:text-lg lg:text-xl
            font-bold 
            tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] lg:tracking-[0.35em]
            text-white/80
            whitespace-nowrap
          "
          >
            SABBAGH TEX
          </div>

          {/* Desktop Navigation Links - Hidden on mobile */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-10">
            {navLinks.map((link, index) => {
              const isActive = link.name === activeLink; 

              return (
                <a
                  key={index}
                  href={link.href}
                  onClick={() => setActiveLink(link.name)} 
                  className={`
                    text-[15px] xl:text-[17px]
                    font-light
                    tracking-wide               
                    relative
                    transition-all duration-300
                    py-2
                    group
                    ${isActive 
                      ? 'text-amber-300' 
                      : 'text-white/90 hover:text-amber-300' 
                    }
                  `}
                >
                  {link.name}
                  <span
                    className={`
                      absolute 
                      bottom-0 
                      left-0 
                      w-full 
                      h-[2px] 
                      transform
                      transition-all 
                      duration-300 
                      ${isActive 
                        ? 'opacity-100 scale-x-100'
                        : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
                      }
                      bg-gradient-to-r 
                      from-transparent 
                      via-[#FFD700] 
                      to-transparent
                    `}
                  ></span>
                </a>
              );
            })}
          </div>

          {/* Right Side: Search Button (Desktop) + Hamburger Menu (Mobile) */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Search Button - Hidden on mobile */}
            <div
              className="
              hidden sm:flex
              w-9 h-9 sm:w-10 sm:h-10
              items-center justify-center
              rounded-xl
              bg-white/40 
              border border-white/30
              backdrop-blur-md
              cursor-pointer
              transition-all duration-300
              hover:bg-white/60
              hover:scale-110
            "
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-white/70"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            {/* Hamburger Menu Button - Visible on mobile */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="
              lg:hidden
              w-9 h-9 sm:w-10 sm:h-10
              flex items-center justify-center
              rounded-xl
              bg-white/40 
              border border-white/30
              backdrop-blur-md
              transition-all duration-300
              hover:bg-white/60
              active:scale-95
            "
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                // Close icon (X)
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-white/70"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger icon
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-white/70"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`
          fixed inset-0 
          bg-black/60 
          backdrop-blur-sm
          z-[9998]
          transition-opacity duration-300
          lg:hidden
          ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div
        className={`
          fixed top-0 right-0
          h-full w-80 max-w-[85vw]
          bg-[#3B241C] backdrop-blur-2xl
          border-l border-[#8C6239]
          shadow-2xl
          z-[9999]
          transition-transform duration-300 ease-in-out
          lg:hidden
          ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="flex flex-col h-full pt-20 px-6">
          {/* Mobile Navigation Links */}
          <div className="flex flex-col gap-6">
            {navLinks.map((link, index) => {
              const isActive = link.name === activeLink; 

              return (
                <a
                  key={index}
                  href={link.href}
                  onClick={() => handleLinkClick(link.name)}
                  className={`
                    text-lg
                    font-light
                    tracking-wide
                    relative
                    transition-all duration-300
                    py-3
                    px-4
                    rounded-lg
                    ${isActive 
                      ? 'text-amber-300 bg-amber-300/10' 
                      : 'text-white hover:text-amber-300 hover:bg-[#8C6239]/50' 
                    }
                  `}
                >
                  {link.name}
                  {isActive && (
                    <span
                      className="
                        absolute 
                        left-0 
                        top-0 
                        bottom-0
                        w-1
                        bg-gradient-to-b 
                        from-transparent 
                        via-[#FFD700] 
                        to-transparent
                        rounded-r-full
                      "
                    ></span>
                  )}
                </a>
              );
            })}
          </div>

          {/* Mobile Search Button */}
          <div className="mt-auto mb-8">
            <div
              className="
              w-full
              h-12
              flex items-center justify-center gap-3
              rounded-xl
              bg-[#8C6239] 
              border border-[#8C6239]
              backdrop-blur-md
              cursor-pointer
              transition-all duration-300
              hover:bg-[#8C6239]/80
              active:scale-95
            "
            >
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <span className="text-white font-light">Search</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}