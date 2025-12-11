import React from 'react';

/**
 * Loading Spinner Component
 * Used for Suspense fallback and loading states
 */
export default function LoadingSpinner({ size = 'medium', fullScreen = false }) {
  const sizeClasses = {
    small: 'w-8 h-8 border-2',
    medium: 'w-12 h-12 border-3',
    large: 'w-16 h-16 border-4',
  };

  const spinner = (
    <div className="flex items-center justify-center">
      <div
        className={`
          ${sizeClasses[size]}
          border-[#FFD700]
          border-t-transparent
          rounded-full
          animate-spin
        `}
        role="status"
        aria-label="Loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-[#3B241C] z-50">
        {spinner}
        <p className="ml-4 text-white text-lg">Loading...</p>
      </div>
    );
  }

  return spinner;
}

/**
 * Section Loading Skeleton
 * Used for component-level loading states
 */
export function SectionLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <LoadingSpinner size="large" />
    </div>
  );
}

/**
 * Card Skeleton Loader
 * For loading product/collection cards
 */
export function CardSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-64 bg-gray-700/20 rounded-t-2xl"></div>
      <div className="p-5 space-y-3 bg-gray-700/10 rounded-b-2xl">
        <div className="h-4 bg-gray-700/20 rounded w-3/4"></div>
        <div className="h-3 bg-gray-700/20 rounded w-1/2"></div>
        <div className="flex gap-2 mt-4">
          <div className="h-8 bg-gray-700/20 rounded flex-1"></div>
          <div className="h-8 bg-gray-700/20 rounded flex-1"></div>
        </div>
      </div>
    </div>
  );
}

