"use client";

import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "src/lib/utils";
import { Button } from "src/components/ui/button";

// Define the type for a single review
type Review = {
  id: string | number;
  name: string;
  affiliation: string;
  quote: string;
  imageSrc: string;
  thumbnailSrc: string;
};

// Define the props for the slider component
interface TestimonialSliderProps {
  reviews: Review[];
  /** Optional class name for the container */
  className?: string;
}

/**
 * A reusable, animated testimonial slider component.
 * It uses framer-motion for animations and is styled with
 * shadcn/ui theme variables.
 */
export const TestimonialSlider = ({
  reviews,
  className,
}: TestimonialSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // 'direction' helps framer-motion understand slide direction (next vs. prev)
  const [direction, setDirection] = useState<"left" | "right">("right");

  const activeReview = reviews[currentIndex];

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setDirection("left");
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleThumbnailClick = (index: number) => {
    // Determine direction for animation
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };

  // Get the next 3 reviews for the thumbnails, excluding the current one
  const thumbnailReviews = reviews
    .filter((_, i) => i !== currentIndex)
    .slice(0, 3);

  // Animation variants for the main image
  const imageVariants = {
    enter: (direction: "left" | "right") => ({
      y: direction === "right" ? "100%" : "-100%",
      opacity: 0,
    }),
    center: { y: 0, opacity: 1 },
    exit: (direction: "left" | "right") => ({
      y: direction === "right" ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  // Animation variants for the text content
  const textVariants = {
    enter: (direction: "left" | "right") => ({
      x: direction === "right" ? 50 : -50,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction: "left" | "right") => ({
      x: direction === "right" ? -50 : 50,
      opacity: 0,
    }),
  };

  return (
    <div
      className={cn(
        "relative w-full min-h-[650px] md:min-h-[600px] overflow-hidden  p-8 md:p-12",
        className
      )}
      style={{ padding: '5rem 0' }}
    >
      <div className="max-w-[1340px] mx-auto px-[1.075rem]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-full">
          {/* === Left Column: Meta and Thumbnails === */}
          <div className="md:col-span-3 flex flex-col justify-between order-2 md:order-1">
            {/* Thumbnail Navigation */}
            <div className="flex space-x-2 mt-8 md:mt-0">
              {thumbnailReviews.map((review) => {
                // Find the original index to navigate to
                const originalIndex = reviews.findIndex(
                  (r) => r.id === review.id
                );
                return (
                  <button
                    key={review.id}
                    onClick={() => handleThumbnailClick(originalIndex)}
                    className="overflow-hidden rounded-[8px] w-16 h-20 md:w-20 md:h-24 opacity-70 hover:opacity-100 transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-[#16487E] focus:ring-offset-2"
                    aria-label={`View review from ${review.name}`}
                  >
                    <img
                      src={review.thumbnailSrc}
                      alt={review.name}
                      className="w-full h-full object-cover"
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* === Center Column: Main Image === */}
          <div className="md:col-span-5 relative h-80 min-h-[450px] md:min-h-[550px] order-1 md:order-2">
            <AnimatePresence initial={false} custom={direction}>
              <motion.img
                key={currentIndex}
                src={activeReview.imageSrc}
                alt={activeReview.name}
                custom={direction}
                variants={imageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                className="absolute inset-0 w-full h-full object-cover rounded-[12px]"
              />
            </AnimatePresence>
          </div>

          {/* === Right Column: Text and Navigation === */}
          <div className="md:col-span-4 flex flex-col justify-between md:pl-8 order-3 md:order-3">
            {/* Text Content */}
            <div className="relative overflow-hidden pt-4 md:pt-24 min-h-[200px]">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={textVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                >
                  <p className="text-[13px] font-normal text-[#010553] mb-[0.125rem]">
                    {activeReview.affiliation}
                  </p>
                  <h3 className="text-[20px] font-medium text-[#010553] mt-1 mb-[0.275rem] leading-[20px]">
                    {activeReview.name}
                  </h3>
                  <blockquote className="mt-6 text-[20px] md:text-[20px] font-normal leading-[30px] text-[#010553]">
                    "{activeReview.quote}"
                  </blockquote>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center space-x-2 mt-8 md:mt-0">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full w-12 h-12 border-[#010553]/30 hover:border-[#16487E] hover:bg-[#16487E] hover:text-white"
                onClick={handlePrev}
                aria-label="Previous review"
              >
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="default"
                size="icon"
                className="rounded-full w-12 h-12 bg-[#16487E] text-white hover:bg-[#0D447E]"
                onClick={handleNext}
                aria-label="Next review"
              >
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

