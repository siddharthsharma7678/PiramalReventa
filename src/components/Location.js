import React, { useState } from "react";
import loc from '../PiramalImge/loc.svg'
const locationData = {
  "SCHOOLS & COLLEGES": [
    { name: "Eurokids", distance: "1.8 Km" },
    { name: "Nes International School", distance: "2.8 Km" },
    { name: "DAV Public School", distance: "3 Km" },
    { name: "St. Gregorious Public School", distance: "3.9 Km" },
  ],
  HOSPITALS: [
    { name: "Fortis Hospital", distance: "1.2 Km" },
    { name: "Upasani Super Speciality Hospital", distance: "1.8 Km" },
    { name: "Apex Hospital", distance: "3 Km" },
  ],
  "RETAIL ZONES": [
    { name: "D-Mart", distance: "0.75 Km" },
    { name: "R-Galleria", distance: "1.7 Km" },
    { name: "R Mall", distance: "3 Km" },
  ],
};

const LocationAdvantage = () => {
  const [activeTab, setActiveTab] = useState("SCHOOLS & COLLEGES");

  return (
    <section id="location" className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left Column - Tabs */}
          <div className="w-full lg:w-1/3">
            <h3 className="text-3xl font-bold text-[#0c3730] mb-6">
              Location Advantage
            </h3>
            <ul className="flex flex-col space-y-2">
              {Object.keys(locationData).map((category) => (
                <li
                  key={category}
                  className={`cursor-pointer px-4 py-2 rounded-lg font-medium transition ${
                    activeTab === category
                      ? "bg-[#0c3730] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  onClick={() => setActiveTab(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
            {/* Location Items */}
            <div className="mt-6 space-y-4">
              {locationData[activeTab].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg shadow-sm"
                >
                  <img
                    src={loc}
                    alt="location icon"
                    className="w-6 h-6"
                  />
                  <p className="text-gray-700">
                    {item.name} <span className="text-gray-500">{item.distance}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* Right Column - Google Map */}
          <div className="w-full lg:w-2/3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30148.58868891766!2d72.93773!3d19.170134!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b913585fc533%3A0x4c5fa5cf22f5bd5d!2sPiramal%20Revanta%20Sales%20Office!5e0!3m2!1sen!2sin!4v1707299261586!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationAdvantage;
