export default function Footer() {
  return (
    <footer className="bg-[#3B241C] py-16 relative overflow-hidden">
      
      {/* Decorative elements */}
      <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Centered Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-white/20 pb-10 text-center">
          
          {/* 1. Brand Info / Logo (Takes full width on mobile) */}
          <div className="md:col-span-4 lg:col-span-1 mb-8 md:mb-0">
            <h3 className="text-3xl font-playfair font-bold text-white mb-4 drop-shadow-sm tracking-[0.15em]">
              SABBACH TEX
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
              Crafting premium textiles since 1990. Elegance woven into every thread.
            </p>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-[#FFD700] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-white hover:text-[#FFD700] transition-colors duration-200 text-sm">Home</a></li>
              <li><a href="#advantages" className="text-white hover:text-[#FFD700] transition-colors duration-200 text-sm">Advantages</a></li>
              <li><a href="#collections" className="text-white hover:text-[#FFD700] transition-colors duration-200 text-sm">Collections</a></li>
              <li><a href="#contact" className="text-white hover:text-[#FFD700] transition-colors duration-200 text-sm">Contact</a></li>
            </ul>
          </div>

          {/* 3. Customer Service */}
          <div>
            <h4 className="text-lg font-semibold text-[#FFD700] mb-4">
              Support
            </h4>
            <ul className="space-y-2">
              <li><a href="/faq" className="text-white hover:text-[#FFD700] transition-colors duration-200 text-sm">FAQ</a></li>
              <li><a href="/shipping" className="text-white hover:text-[#FFD700] transition-colors duration-200 text-sm">Shipping & Returns</a></li>
              <li><a href="/terms" className="text-white hover:text-[#FFD700] transition-colors duration-200 text-sm">Terms of Service</a></li>
              <li><a href="/privacy" className="text-white hover:text-[#FFD700] transition-colors duration-200 text-sm">Privacy Policy</a></li>
            </ul>
          </div>

          {/* 4. Contact Info */}
          <div className="md:col-span-2 lg:col-span-1">
            <h4 className="text-lg font-semibold text-[#FFD700] mb-4">
              Get in Touch
            </h4>
            <p className="text-gray-400 mb-2 text-sm">
              <i className="fas fa-map-marker-alt mr-2 text-white"></i> Aleppo, Syria
            </p>
            <p className="text-gray-400 mb-2 text-sm">
              <i className="fas fa-envelope mr-2 text-white"></i> info@sabbaghtex.com
            </p>
            <p className="text-gray-400 mb-4 text-sm">
              <i className="fas fa-phone mr-2 text-white"></i> +963-21-XXX-XXXX
            </p>

            {/* Social Icons (Flex container centered) */}
            <div className="flex space-x-4 mt-4 justify-center">
              <a href="#" className="text-white hover:text-[#FFD700] transition-colors duration-300 text-xl">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-white hover:text-[#FFD700] transition-colors duration-300 text-xl">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-white hover:text-[#FFD700] transition-colors duration-300 text-xl">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright and Bottom Text */}
        <div className="text-center pt-8">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Sabbagh Tex. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}