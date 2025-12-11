import React, { useState, useEffect } from 'react';

/**
 * Optimized Image Component with lazy loading and performance features
 * @param {string} src - Image source URL
 * @param {string} alt - Alt text for accessibility
 * @param {string} className - CSS classes
 * @param {boolean} lazy - Enable lazy loading (default: true)
 * @param {string} width - Image width
 * @param {string} height - Image height
 * @param {function} onLoad - Callback when image loads
 * @param {function} onError - Callback on error
 */
export default function OptimizedImage({
  src,
  alt,
  className = '',
  lazy = true,
  width,
  height,
  onLoad,
  onError,
  priority = false,
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = (e) => {
    setIsLoaded(true);
    if (onLoad) onLoad(e);
  };

  const handleError = (e) => {
    setHasError(true);
    if (onError) onError(e);
  };

  // For WebP support check
  const getImageSrc = (originalSrc) => {
    // If src already includes .webp or is an external URL, return as is
    if (originalSrc.includes('.webp') || originalSrc.startsWith('http')) {
      return originalSrc;
    }
    // Try to use WebP version if available
    // You can implement WebP conversion logic here
    return originalSrc;
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Loading placeholder */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gray-700/10 animate-pulse" />
      )}

      {/* Error placeholder */}
      {hasError && (
        <div className="absolute inset-0 bg-gray-700/20 flex items-center justify-center">
          <span className="text-gray-400 text-sm">Failed to load image</span>
        </div>
      )}

      {/* Actual image */}
      <img
        src={getImageSrc(src)}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : lazy ? 'lazy' : 'eager'}
        decoding={priority ? 'sync' : 'async'}
        onLoad={handleLoad}
        onError={handleError}
        className={`
          ${className}
          transition-opacity duration-300
          ${isLoaded ? 'opacity-100' : 'opacity-0'}
        `}
      />
    </div>
  );
}

/**
 * Background Image Component with lazy loading
 */
export function BackgroundImage({ src, alt, children, className = '' }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setIsLoaded(true);
  }, [src]);

  return (
    <div className={`relative ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-800 animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        className={`
          absolute inset-0 w-full h-full object-cover -z-10
          transition-opacity duration-500
          ${isLoaded ? 'opacity-100' : 'opacity-0'}
        `}
        loading="lazy"
      />
      {children}
    </div>
  );
}

