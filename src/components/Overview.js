import React from "react";
import over1 from "../PiramalImge/over1.jpg";
import over2 from "../PiramalImge/over2.jpg";

import highlight1 from "../PiramalImge/highlights1.png";
import highlight2 from "../PiramalImge/highlights2.png";
import highlight3 from "../PiramalImge/highlights3.png";
import highlight4 from "../PiramalImge/highlights4.png";
import highlight5 from "../PiramalImge/highlights5.png";
import highlight6 from "../PiramalImge/highlights6.png";
import "../css/Overview.css";

const highlights = [
  { img: highlight1, text: "2 Multilevel Clubhouses with 30,000 sq.ft. of Amenities" },
  { img: highlight2, text: "3 Acre Paradise with Only 2 Towers (Vana)" },
  { img: highlight3, text: "Phase 1 Clubhouse & Podium Amenities Delivered" },
  { img: highlight4, text: "Over 60% Open Spaces" },
  { img: highlight5, text: "Over 50 Lifestyle Amenities" },
  { img: highlight6, text: "~12,500 sq.ft. Lobby Drop-off Experience" },
];

const Overview = () => {
  return (
    <section id="overview" className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title and Description */}
        <div className="relative flex flex-col md:flex-row items-center justify-center mb-12 md:mb-16 space-y-6 md:space-y-0 md:space-x-8">
          {/* Circle with paragraph */}
          <div className="bg-gray-100 w-72 sm:w-80 md:w-96 h-72 sm:h-80 md:h-96 rounded-full shadow-lg flex items-center justify-center p-4 sm:p-6 relative z-10">
            <p className="text-black-600 text-xs sm:text-sm md:text-sm leading-relaxed text-center">
              Nestled in the biophilic ecosystem of Piramal Revanta, discover a
              sanctuary beyond compare. A three-acre residential community with
              just two towers, designed to engage all your senses. Vana at
              Piramal Revanta offers 50+ world-class amenities that meld
              vibrancy with serenity, ensuring you and your loved ones live in
              true bliss.
            </p>
          </div>

          {/* Download Button slightly lower */}
          <div className="relative z-20 mt-6">
            <a
              href="javascript:void(0);"
              className="inline-block bg-gray-100 text-black-600 px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg hover:bg-gray-200 hover:text-green-700 transition"
            >
              Download Brochure
            </a>
          </div>

          {/* Overview title positioned above the circle */}
          <h3
  className="absolute -top-2 sm:top-12 md:top-16 left-1/2 transform -translate-x-1/2 text-4xl sm:text-5xl md:text-6xl font-bold z-20"
  style={{ color: "#0c3730" }}
>
  OVERVIEW
</h3>

        </div>

        {/* Images Section */}
        <div className="relative mb-12 md:mb-16 flex justify-center items-start gap-4 sm:gap-6 md:gap-8">
          {/* Base Image (over1) */}
          <div className="floating-image w-72 sm:w-80 md:w-96 h-48 sm:h-56 md:h-72 overflow-hidden rounded-lg z-10">
            <img
              src={over1}
              alt="overview base"
              className="w-full h-full object-cover rounded-lg shadow"
            />
          </div>

          {/* Floating Image (over2) - same size */}
          <div className="w-72 sm:w-80 md:w-96 h-48 sm:h-56 md:h-72 overflow-hidden rounded-lg relative -mt-12 sm:-mt-16 md:-mt-20 -ml-8 sm:-ml-12 md:-ml-16">
            <img
              src={over2}
              alt="floating overview"
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
