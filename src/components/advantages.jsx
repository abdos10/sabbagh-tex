import React from 'react';
import { FaTruck, FaPalette, FaCut, FaAward } from 'react-icons/fa';

const AdvantagesSection = () => {
  const advantagesData = [
    {
      title: 'Free & Fast Delivery',
      description: 'On all orders within 24 hours',
      icon: <FaTruck className="w-8 h-8 text-amber-100" />,
      bg: 'from-amber-800/20 to-amber-900/10',
      border: 'border-amber-600/30'
    },
    {
      title: 'Custom Color Selection',
      description: 'Pick the exact shade you want',
      icon: <FaPalette className="w-8 h-8 text-amber-100" />,
      bg: 'from-stone-800/20 to-stone-700/10',
      border: 'border-stone-600/30'
    },
    {
      title: 'Fabric Samples',
      description: 'Try before you buy',
      icon: <FaCut className="w-8 h-8 text-amber-100" />,
      bg: 'from-amber-800/20 to-amber-900/10',
      border: 'border-amber-600/30'
    },
    {
      title: 'Premium Quality',
      description: 'Carefully selected fabrics',
      icon: <FaAward className="w-8 h-8 text-amber-100" />,
      bg: 'from-stone-800/20 to-stone-700/10',
      border: 'border-stone-600/30'
    },
  ];

  return (
  <section id="advantages" className="py-20 bg-[#3B241C] relative overflow-hidden ">
  {/* Base Background is a single, deep, flat brown color. */}
  <div className="absolute top-0 left-0 w-full h-16 backdrop-blur-lg pointer-events-none z-20"></div>
  {/* Decorative elements are kept for subtle ambiance, using low opacity blurs against the dark base. */}
  <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#B8997A]/10 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
  <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#FFD700]/5 rounded-full mix-blend-screen filter blur-3xl animation-delay-2000"></div>

  <div className="container mx-auto px-4 sm:px-6 relative z-10">
    {/* Section Header: Crisp White Text with Bright Gold Divider */}
  
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-sans font-light text-white mb-4 drop-shadow-lg">
        Our Advantages
      </h2>
      <div className=" w-36
          h-[2px]
          bg-gradient-to-r
          from-transparent
          via-[#9F7F01FF]
          to-transparent
          mx-auto
          mt-1"></div>
    </div>

    {/* Advantages Grid (The modern glass cards remain the same—they provide the contrast and modern feel) */}
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 px-12">
    {advantagesData.map((advantage, index) => (
        <div
            key={index}
            className={`
                relative p-12 rounded-3xl 
                // CORE MODERN GLASSMORHISM STYLES:
                backdrop-blur-lg border border-solid border-[rgba(255,255,255,0.3)] 
                bg-[rgba(255,255,255,0.08)] 
                
                shadow-2xl transition-all duration-500 transform hover:scale-[1.02] overflow-hidden group
                hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] 
            `}
        >
            
            <div className="flex items-center mb-6 border-b border-white/20 pb-4">
                
                {/* ICON */}
                <div className="w-12 h-12 flex items-center justify-center rounded-[10px] bg-[#8D6300FF]/20 mr-4">
                    <div className="text-xl text-[#FFD700] group-hover:text-white transition-colors duration-300">
                        {advantage.icon} 
                    </div>
                </div>
                
                {/* TITLE */}
                <h3 className=" pr-14 text-2xl font-bold text-white drop-shadow-sm flex-grow flex items-center justify-center">
                    {advantage.title}
                </h3>
            </div>
            
            {/* 2. DESCRIPTION */}
            <p className="text-gray-300 leading-relaxed text-lg pt-2 flex items-center justify-center ">
                {advantage.description}
            </p>
        </div>
    ))}
</div>
  </div>
</section>
  );
};

export default AdvantagesSection;