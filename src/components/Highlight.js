import React, { useRef, useEffect } from "react";
import '../css/Highlight.css'
import highlight1 from "../PiramalImge/highlights1.png";
import highlight2 from "../PiramalImge/highlights2.png";
import highlight3 from "../PiramalImge/highlights3.png";
import highlight4 from "../PiramalImge/highlights4.png";
import highlight5 from "../PiramalImge/highlights5.png";
import highlight6 from "../PiramalImge/highlights6.png";

const highlights = [
  { img: highlight1, text: "2 Multilevel Clubhouses with 30,000 sq.ft. of Amenities" },
  { img: highlight2, text: "3 Acre Paradise with Only 2 Towers (Vana)" },
  { img: highlight3, text: "Phase 1 Clubhouse & Podium Amenities Delivered" },
  { img: highlight4, text: "Over 60% Open Spaces" },
  { img: highlight5, text: "Over 50 Lifestyle Amenities" },
  { img: highlight6, text: "~12,500 sq.ft. Lobby Drop-off Experience" },
];

const InfiniteHighlights = () => {
  const carouselRef = useRef(null);
  const scrollAmount = 200;

  const scrollRight = () => {
    if (!carouselRef.current) return;
    carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const scrollLeft = () => {
    if (!carouselRef.current) return;
    carouselRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    const handleScroll = () => {
      const scrollWidth = carousel.scrollWidth / 2;
      if (carousel.scrollLeft >= scrollWidth) {
        carousel.scrollLeft -= scrollWidth;
      } else if (carousel.scrollLeft <= 0) {
        carousel.scrollLeft += scrollWidth;
      }
    };
    carousel.addEventListener("scroll", handleScroll);
    return () => carousel.removeEventListener("scroll", handleScroll);
  }, []);

  const displayHighlights = [...highlights, ...highlights];

  return (
    <div className="relative px-4 md:px-8">
      <h3 className="text-3xl md:text-4xl font-semibold mb-6 text-center">HIGHLIGHTS</h3>
      <div className="flex items-center">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-white text-[#212529] shadow hover:bg-gray-100 transition"
        >
          &#8592;
        </button>

        {/* Carousel */}
        <div
          ref={carouselRef}
          className="flex overflow-x-auto space-x-6 scrollbar-hide snap-x snap-mandatory mx-4 md:mx-6"
        >
          {displayHighlights.map((item, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-48 md:w-48 bg-white rounded-xl shadow-lg p-4 snap-center"
            >
              <img
                src={item.img}
                alt={`highlight-${idx}`}
                className="mx-auto mb-4 h-16 md:h-20 object-contain filter brightness-0 invert-[15%] sepia-[100%] saturate-[7500%] hue-rotate-[200deg] contrast-[90%]"
              />
              <p className="text-[#212529] text-sm md:text-base text-center">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-white text-[#212529] shadow hover:bg-gray-100 transition"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default InfiniteHighlights;
