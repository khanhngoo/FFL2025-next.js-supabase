'use client';

import { useState } from 'react';
import Image from 'next/image';

interface OptimizedImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  priority?: boolean;
  sizes?: string;
  placeholderType?: 'default' | 'hero';
  quality?: number;
}

const OptimizedImage = ({
  src,
  alt,
  fill = false,
  className = '',
  priority = false,
  sizes = '100vw',
  placeholderType = 'default',
  quality = 85,
}: OptimizedImageProps) => {
  const [error, setError] = useState(false);
  const [imgSrc, setImgSrc] = useState(src);
  const [loadAttempts, setLoadAttempts] = useState(0);
  
  // If there's an error loading the image, try different strategies
  const handleError = () => {
    // Track attempts to avoid infinite loops
    setLoadAttempts(prev => prev + 1);
    
    // Don't try more than 3 times
    if (loadAttempts >= 3) {
      const placeholder = placeholderType === 'hero' 
        ? '/placeholders/hero-placeholder.svg' 
        : '/placeholder.svg';
      
      setImgSrc(placeholder);
      return;
    }
    
    // First attempt: Try lowercase extension
    if (!error && imgSrc === src) {
      // Try to normalize the extension
      const normalized = src.toLowerCase();
      setImgSrc(normalized);
      setError(true);
      return;
    }
    
    // Second attempt: Try the image directly without optimization
    if (error && !imgSrc.includes('?unoptimized=true')) {
      setImgSrc(`${imgSrc}?unoptimized=true`);
      return;
    }
    
    // Final fallback: Use a placeholder
    const placeholder = placeholderType === 'hero' 
      ? '/placeholders/hero-placeholder.svg' 
      : '/placeholder.svg';
    
    setImgSrc(placeholder);
  };

  return (
    <Image
      src={imgSrc}
      alt={alt}
      fill={fill}
      className={className}
      priority={priority}
      sizes={sizes}
      quality={quality}
      unoptimized={error || imgSrc.includes('placeholder')} // Disable optimization for placeholders
      onError={handleError}
    />
  );
};

export default OptimizedImage; 