import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface HeroSlideshowProps {
  autoPlayInterval?: number;
}

const slides = [
  {
    src: '/co-op-job-photo-1.jpeg',
    alt: 'Mendo Labor Cooperative workers on the job - Photo 1',
    position: 'object-top'
  },
  {
    src: '/co-op-job-photo-2.jpeg',
    alt: 'Mendo Labor Cooperative workers on the job - Photo 2',
    position: 'object-top'
  },
  {
    src: '/co-op-job-photo-3.jpeg',
    alt: 'Mendo Labor Cooperative workers on the job - Photo 3',
    position: 'object-top'
  },
  {
    src: '/co-op-job-photo-4.jpeg',
    alt: 'Mendo Labor Cooperative workers on the job - Photo 4',
    position: 'object-[center_38%]'
  }
];

const HeroSlideshow: React.FC<HeroSlideshowProps> = ({ autoPlayInterval = 4000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume autoplay after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(timer);
  }, [isAutoPlaying, autoPlayInterval, nextSlide]);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-lg shadow-xl">
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className={`object-cover ${slide.position}`}
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => {
          prevSlide();
          setIsAutoPlaying(false);
          setTimeout(() => setIsAutoPlaying(true), 10000);
        }}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-moss/70 hover:bg-moss text-cream p-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-gold"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => {
          nextSlide();
          setIsAutoPlaying(false);
          setTimeout(() => setIsAutoPlaying(true), 10000);
        }}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-moss/70 hover:bg-moss text-cream p-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-gold"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-gold ${
              index === currentSlide
                ? 'bg-gold scale-110'
                : 'bg-cream/60 hover:bg-cream'
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentSlide ? 'true' : 'false'}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlideshow;
