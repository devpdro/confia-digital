'use client';

import { StackedImageHover } from "src/components/ui/hover-deck-fx";

export default function DemoOne() {
  // Usando imagens do Unsplash que sabemos que existem
  const images = [
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
  ];

  return (
    <div>
      <StackedImageHover
        images={images}
      />
    </div>
  );
}

