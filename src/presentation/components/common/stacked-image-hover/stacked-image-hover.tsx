'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';

export type StackedImageHoverProps = {
  /** List of image URLs to stack (back -> front order). */
  images: string[];
  /** Width in px. Default: 640 */
  width?: number;
  /** Height in px. Default: 260 */
  height?: number;
  /** Container background (behind images). Default: '#000' */
  backgroundColor?: string;
  /** Rotation in deg. Default: -30 */
  rotateDeg?: number;
  /** Skew in deg. Default: 25 */
  skewDeg?: number;
  /** Scale multiplier. Default: 0.6 */
  scale?: number;
  /** Base pixel shift per layer. Default: 40 (so 40, 80, 120, …) */
  stepPx?: number;
  /** Hover opacity range [min..1]. Default: 0.4 */
  minOpacity?: number;
  /** Accessibility label */
  ariaLabel?: string;
  /** Extra class on root */
  className?: string;
};

export default function StackedImageHover({
  images,
  width = 640,
  height = 260,
  backgroundColor = '#000',
  rotateDeg = -30,
  skewDeg = 25,
  scale = 0.6,
  stepPx = 40,
  minOpacity = 0.4,
  ariaLabel = 'stacked image hover effect',
  className = '',
}: StackedImageHoverProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Calculate transform and opacity for each image on hover
  const imageStyles = useMemo(() => {
    if (!images?.length) return [];

    const n = images.length;
    const denom = Math.max(1, n - 1);
    
    return images.map((_, i) => {
      if (!isHovered) {
        return {
          transform: 'translate(0, 0)',
          opacity: 1,
        };
      }

      const shift = stepPx * (i + 1);
      const opacity = (i === n - 1) ? 1 : (minOpacity + (i * (1 - minOpacity) / denom));

      return {
        transform: `translate(${shift}px, -${shift}px)`,
        opacity,
      };
    });
  }, [images, stepPx, minOpacity, isHovered]);

  return (
    <div
      className={[
        'relative mx-auto transition-transform duration-500 ease-in-out',
        className,
      ].join(' ')}
      style={{
        width,
        height,
        background: backgroundColor,
        transform: `rotate(${rotateDeg}deg) skew(${skewDeg}deg) scale(${scale})`,
      }}
      role="region"
      aria-label={ariaLabel}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {images.map((src, i) => (
        <div
          key={i}
          className="absolute inset-0 will-change-transform transition-all duration-500 ease-in-out"
          style={{
            zIndex: images.length - i,
            transform: imageStyles[i]?.transform || 'translate(0, 0)',
            opacity: imageStyles[i]?.opacity ?? 1,
          }}
        >
          <Image
            src={src}
            alt={`stacked image ${i + 1}`}
            fill
            className="object-cover"
            unoptimized
            priority={i === images.length - 1}
          />
        </div>
      ))}
    </div>
  );
}

export { StackedImageHover };

