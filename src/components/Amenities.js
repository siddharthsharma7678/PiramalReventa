import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

// Image Imports
import kids from '../PiramalImge/ground24ame.png';
import mppplay from '../PiramalImge/ground22ame.png';
import yoga from '../PiramalImge/ground20ame.png';
import jogging from '../PiramalImge/ground23ame.png';
import skating from '../PiramalImge/ground21ame.png';
import drive from '../PiramalImge/ground19ame.png';
import water from '../PiramalImge/ground18ame.png';
import entry from '../PiramalImge/ground17ame.png';
import green from '../PiramalImge/ground16ame.png';
import focal from '../PiramalImge/ground15ame.png';
import seating from '../PiramalImge/ground14ame.png';
import tramp from '../PiramalImge/ground13ame.png';
import greenplaza from '../PiramalImge/ground12ame.png';
import outdoor from '../PiramalImge/ground11ame.png';
import cspine from '../PiramalImge/ground10ame.png';
import meditation from '../PiramalImge/ground9ame.png';

const AmenitiesCarousel = () => {
  const amenities = [
    { img: kids, name: "Kids play area" },
    { img: jogging, name: "Jogging & cycling track" },
    { img: mppplay, name: "Multipurpose play court" },
    { img: skating, name: "Skating rink" },
    { img: yoga, name: "Yoga garden" },
    { img: drive, name: "Driveway" },
    { img: water, name: "Water cove" },
    { img: entry, name: "Entry portal" },
    { img: green, name: "Green edge" },
    { img: focal, name: "Focal point" },
    { img: seating, name: "Seating court" },
    { img: tramp, name: "Trampoline cove" },
    { img: greenplaza, name: "Green plaza" },
    { img: outdoor, name: "Outdoor gym" },
    { img: cspine, name: "Central spine" },
    { img: meditation, name: "Meditation deck" },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 2000 })]
  );

  // Handle arrows
  useEffect(() => {
    if (!emblaApi) return;

    const prevBtn = document.querySelector(".amenity-prev");
    const nextBtn = document.querySelector(".amenity-next");

    prevBtn.onclick = () => emblaApi.scrollPrev();
    nextBtn.onclick = () => emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id='amenities' className="py-10">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-[#0c3730] mb-6">
        Amenities
      </h2>

      {/* Embla Carousel */}
      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex gap-6 px-4">
          {amenities.map((item, i) => (
            <div
              key={i}
              className="embla__slide flex-shrink-0 w-40 h-48 bg-white rounded-2xl p-4 
                         flex flex-col justify-start items-center"
            >
              {/* Circle Image */}
              <div className="w-20 h-20 rounded-full bg-[#0c3730]/10 flex justify-center items-center mb-3">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-10 h-10 object-contain 
                             filter brightness-0 invert-[15%] sepia-[100%] saturate-[7500%] hue-rotate-[200deg] contrast-[90%]"
                />
              </div>

              {/* Name */}
              <p className="text-sm font-medium text-center text-[#212529] px-2">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ⬅️➡️ ARROWS BELOW */}
      <div className="flex justify-center gap-6 mt-6">
        <button className="amenity-prev bg-[#0c3730] text-white w-10 h-10 rounded-full flex items-center justify-center text-xl">
          ◀
        </button>
        <button className="amenity-next bg-[#0c3730] text-white w-10 h-10 rounded-full flex items-center justify-center text-xl">
          ▶
        </button>
      </div>
    </section>
  );
};

export default AmenitiesCarousel;
