import React, { useState } from "react";
import confBg from "../PiramalImge/over1.jpg";
import Modal from "./Modal";   // IMPORT MODAL
import "../css/Vana.css";

const configurations = [
  { title: "2 Bed", size: "854 SQ.FT." },
  { title: "2 Bed + Study", size: "1040 SQ.FT." },
  { title: "3 Bed Palace", size: "1354 SQ.FT." },
  { title: "3 Bed", size: "1192 SQ.FT." },
  { title: "3 Bed + Study", size: "1411 SQ.FT." },
];

const Vana = () => {
  const [showModal, setShowModal] = useState(false);  // STATE FOR MODAL

  return (
    <>
      {/* MODAL */}
      <Modal show={showModal} onClose={() => setShowModal(false)} />

      <section
        id="vana"
        className="relative mt-16 mb-16 py-24 bg-green-50"
        style={{
          backgroundImage: `url(${confBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0c3730]">
              Craft Your Dream Space
            </h2>
          </div>

          {/* Configuration Cards */}
          <div className="flex flex-wrap justify-center gap-6">
            {configurations.map((config, index) => (
              <div
                key={index}
                className="relative overflow-hidden bg-white rounded-xl shadow-lg p-6 w-64 text-center flex flex-col items-center card-hover"
              >
                <h3 className="text-xl font-semibold mb-2 z-10 relative">{config.title}</h3>
                <div className="h-[2px] w-12 bg-gray-300 mb-2 z-10 relative"></div>
                <h2 className="text-2xl font-bold mb-4 z-10 relative">{config.size}</h2>
                <div className="h-[2px] w-12 bg-gray-300 mb-4 z-10 relative"></div>

                {/* OPEN MODAL ON CLICK */}
                <button
                  className="bg-[#0c3730] text-white px-4 py-2 rounded-full hover:bg-green-800 transition z-10 relative"
                  onClick={() => setShowModal(true)}
                >
                  ₹ Check Price
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Vana;
