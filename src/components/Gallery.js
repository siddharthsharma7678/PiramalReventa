import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import ext1 from "../PiramalImge/ext1.jpg";
import ext2 from "../PiramalImge/ext2.jpg";
import ext3 from "../PiramalImge/ext3.jpg";
import ext4 from "../PiramalImge/ext4.jpg";
import ext5 from "../PiramalImge/ext5.jpg";
import ext6 from "../PiramalImge/ext6.jpg";
import ext7 from "../PiramalImge/ext7.jpg";
import '../css/Gal.css'
const Gallery = () => {
  const images = [ext1, ext2, ext3, ext4, ext5, ext6, ext7];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section id="gallery" className="py-12 relative">
      <div className="relative flex justify-center items-center mb-8">
        <h3 className="text-3xl md:text-4xl font-bold text-[#0c3730]">
          Gallery
        </h3>
      </div>

      <div className="relative w-full overflow-hidden" ref={emblaRef}>
        {/* Carousel slides */}
        <div className="flex embla__container gap-4">
          {images.map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full max-w-[900px] mx-auto"
            >
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-[500px] md:h-[600px] lg:h-[700px] object-contain rounded-xl shadow-lg"
              />
            </div>
          ))}
        </div>

        {/* Left arrow */}
        <button
          onClick={scrollPrev}
          className="absolute top-1/2 -left-6 transform -translate-y-1/2 w-10 h-10 flex justify-center items-center rounded-full bg-[#0c3730] text-white z-10"
        >
          ‹
        </button>

        {/* Right arrow */}
        <button
          onClick={scrollNext}
          className="absolute top-1/2 -right-6 transform -translate-y-1/2 w-10 h-10 flex justify-center items-center rounded-full bg-[#0c3730] text-white z-10"
        >
          ›
        </button>
      </div>
    </section>
  );
};

export default Gallery;
