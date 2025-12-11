// Assume the file is named CollectionsSection.jsx
// Notice the capital 'C'
import OptimizedImage from './OptimizedImage';

export default function CollectionsSection() {
  // Define dummy collection data if needed, or assume this component receives it as props.
  const collections = ['Winter', 'Summer', 'Premium', 'Decorative'];
  
  return (
    <section id="collections" className="py-20 bg-[#3B241C] relative overflow-hidden">
        
        {/* Decorative elements (consistent with Advantages section) */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#B8997A]/10 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#FFD700]/5 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-6000"></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
            
            {/* Section Header */}
            <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-sans font-light text-white mb-4 drop-shadow-lg">
        Our Collections
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

            {/* --- Collections Loop --- */}
            {collections.map((collectionName, collectionIndex) => (
                <div key={collectionIndex} className="mb-24">
                    <div className="flex items-center justify-between mb-8 border-b border-white/20 pb-2">
                        <h3 className="text-3xl font-playfair font-light text-white tracking-[0.35em]">
                            {collectionName} Collection
                        </h3>
                        <button className="text-sm font-medium text-white px-4 py-1.5 rounded-full bg-transparent hover:bg-[#FFD700] hover:text-[#3B241C] transition-colors duration-300 border border-[#FFD700]">
                            Explore {collectionName}
                        </button>
                    </div>

                    {/* --- 3-Column Product Grid --- */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        
                        {/* Placeholder data loop (3 items per collection) */}
                        {[1, 2, 3].map((product, productIndex) => (
                            <div 
                                key={productIndex}
                                className={`
                                    relative rounded-2xl overflow-hidden
                                    backdrop-blur-md border border-solid border-[rgba(255,255,255,0.3)] 
                                    bg-[rgba(255,255,255,0.05)] 
                                    shadow-2xl transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,215,0,0.3)]
                                    group
                                `}
                            >
                                {/* Product Image - Optimized with lazy loading */}
                                <div className="h-64 overflow-hidden relative">
                                    <OptimizedImage 
                                        src={`/${collectionName.toLowerCase()}${productIndex + 1}.png`} 
                                        alt={`${collectionName} Collection ${productIndex + 1} - Premium fabric from Sabbagh Tex`}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        lazy={true}
                                    />
                                    
                                    {/* Optional: Gold badge for Premium tag */}
                                    {collectionName === 'Premium' && (
                                        <span className="absolute top-4 right-4 bg-[#FFD700] text-[#3B241C] text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                            Premium
                                        </span>
                                    )}
                                </div>
                                
                                {/* Product Details Area (Glass effect overlay) */}
                                <div className="p-5">
                                    <h4 className="text-xl font-semibold text-white mb-1 drop-shadow-sm">
                                        {collectionName} Fabric {product}
                                    </h4>
                                    <p className="text-sm text-[#FFD700] mb-3">
                                        $XX.XX / Meter
                                    </p>
                                    <div className="flex justify-between gap-16">
                                        <button className="flex-1 text-sm font-medium text-white px-4 py-2 rounded-lg bg-transparent hover:bg-white/10 transition-colors duration-300 border border-white/30">
                                            View Details
                                        </button>
                                        <button className="flex-1 text-sm font-medium text-[#3B241C] px-4 py-2 rounded-lg bg-[#FFD700] hover:bg-[#FFE44D] transition-colors duration-300 border border-[#FFD700]">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div> 
                    
                </div>
            ))}
        </div>
    </section>
  );
}