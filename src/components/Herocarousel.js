import React, { useEffect, useState } from "react";
import web1 from '../PiramalImge/web01.jpeg';
import web2 from '../PiramalImge/web02.jpeg';
import web3 from '../PiramalImge/web03.jpeg';
import web4 from '../PiramalImge/web04.jpeg';
import mob1 from '../PiramalImge/mob01.jpeg';
import mob2 from '../PiramalImge/mob02.jpeg';
import mob3 from '../PiramalImge/mob03.jpeg';
import mob4 from '../PiramalImge/mob04.jpeg';

const slides = [
  { desktop: web1, mobile: mob1 },
  { desktop: web2, mobile: mob2 },
  { desktop: web3, mobile: mob3 },
  { desktop: web4, mobile: mob4 },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="flex-shrink-0 w-full">
            {/* Desktop Image */}
            <img
              src={slide.desktop}
              alt="banner"
              className="hidden md:block w-full h-auto max-h-[90vh] object-contain"
            />

            {/* Mobile Image */}
            <img
              src={slide.mobile}
              alt="banner"
              className="block md:hidden w-full h-auto max-h-[60vh] object-contain"
            />
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 sm:left-4 md:left-6 transform -translate-y-1/2 bg-black/50 text-white p-2 sm:p-3 md:p-4 rounded-full hover:bg-black/70 transition z-20"
      >
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 sm:right-4 md:right-6 transform -translate-y-1/2 bg-black/50 text-white p-2 sm:p-3 md:p-4 rounded-full hover:bg-black/70 transition z-20"
      >
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default HeroCarousel;
