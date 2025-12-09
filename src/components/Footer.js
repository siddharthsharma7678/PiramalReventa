import React from "react";
import "../css/footer.css";
import q1 from "../PiramalImge/1.webp";
import q2 from "../PiramalImge/2.webp";
import q3 from "../PiramalImge/3.webp";
import q4 from "../PiramalImge/4.webp";
import q5 from "../PiramalImge/5.webp";
import q6 from "../PiramalImge/6.webp";
import logo from "../PiramalImge/footer.png";
const Footer = () => {
  const towers = [
    { img: q1, rera: "Tower 1 MahaRERA No. P51800005983" },
    { img: q2, rera: "Tower 2 MahaRERA No. P51800014021" },
    { img: q3, rera: "Tower 3 MahaRERA No. P51800018099" },
    { img: q4, rera: "Tower 4 MahaRERA No. P51800031310" },
    { img: q5, rera: "Tower 5 MahaRERA No. P51800054164" },
    { img: q6, rera: "Tower 6 MahaRERA No. P51800079254" },
  ];

  return (
    <footer className="bg-[#0c3730] text-white py-12">
      <div className="container mx-auto px-4">
        {/* Site Address */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-2">Site Address</h3>
          <p className="text-sm md:text-base">
            Gate No. 2, Piramal Revanta, Sales Office, near Nirmal Lifestyle
            Mall, Moti Nagar, Mulund Colony, Mulund West, Mumbai, Maharashtra
            400080
          </p>
        </div>

        {/* QR Codes for Towers */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mb-8">
          {towers.map((tower, index) => (
            <div key={index} className="text-center">
              <img
                src={tower.img}
                alt={`QR code ${index + 1}`}
                className="mx-auto mb-2 w-20 h-20 object-contain"
              />
              <p className="text-xs sm:text-sm">{tower.rera}</p>
            </div>
          ))}
        </div>

        {/* Official Website & Disclaimer */}
        <div className="text-center space-y-4 mb-8 text-sm md:text-base">
          <p>
            <strong>Official Website</strong>
          </p>
          <p>
            Piramal Revanta: Project Revanta (Tower 1 to Tower 6) is mortgaged
            to ICICI Bank Ltd, and the necessary no-objection certificate for
            the sale of units/flats in Tower 1 to Tower 4 will be obtained from
            ICICI Bank Ltd as and when required. The project Piramal Revanta
            Tower 6 is mortgaged to TATA Capital Housing Finance Limited, and
            the necessary no-objection certificate for the sale of units/flats
            in Tower 6 will be obtained from TATA Capital Housing Finance
            Limited as and when required. “Piramal Revanta” is a brand name for
            a larger project. For more details, log on to the official website:{" "}
            <a
              href="https://maharera.maharashtra.gov.in/"
              className="underline hover:text-gray-300"
            >
              https://maharera.maharashtra.gov.in/
            </a>
          </p>
        </div>

        {/* Footer Logo */}
        <div className="text-center mb-4">
  <img src={logo} alt="Footer Logo" className="mx-auto w-32 md:w-40 logo-img" />
</div>

        {/* Copyright */}
        <div className="text-center text-xs md:text-sm">
          <p className="mb-0">
            Copyright © 2025. All rights reserved. Disclaimer *T&amp;C Apply |
            Privacy policy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
