import React from "react";

const EnquiryModal = ({ show, onClose }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    // your form submit logic here
    onClose();
  };

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}  // close modal on background click
    >
      <div
        className="w-11/12 max-w-md p-6 rounded-lg relative animate-fadeIn"
        style={{ backgroundColor: "rgb(12 55 48 / 1)" }}
        onClick={(e) => e.stopPropagation()} // prevent close on modal click
      >
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-white text-2xl font-bold"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Modal Content */}
        <h3 className="text-white text-2xl font-bold mb-2 text-center">
          Enquire Now
        </h3>
        <p className="text-white text-sm mb-4 text-center">
          Please enter your details to get more information
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="fname"
            placeholder="Name"
            className="w-full p-1 border-b-2 border-white bg-transparent text-white placeholder-white 
                       focus:outline-none focus:border-white transition"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-1 border-b-2 border-white bg-transparent text-white placeholder-white 
                       focus:outline-none focus:border-white transition"
            required
          />
          <input
            type="tel"
            name="mobile"
            placeholder="Mobile"
            className="w-full p-1 border-b-2 border-white bg-transparent text-white placeholder-white 
                       focus:outline-none focus:border-white transition"
            required
          />

          <div className="text-white text-xs">
            I agree to the Terms & Conditions.
          </div>

          <button
            type="submit"
            className="w-full bg-white text-green-600 font-bold py-2 hover:bg-gray-100 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnquiryModal;
