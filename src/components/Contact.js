import React, { useState } from "react";
import '../css/Contact.css'
const Contact = () => {
  const [formData, setFormData] = useState({
    fname: "",
    email: "",
    mobile: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace this with your form submission logic
    console.log("Form Data:", formData);
    alert("Form submitted successfully!");
    setFormData({ fname: "", email: "", mobile: "" });
  };

  return (
    <section id="contact" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-[#0c3730] mb-8">GET IN TOUCH</h3>
        <form
          className="grid grid-cols-1 md:grid-cols-4 gap-4"
          onSubmit={handleSubmit}
        >
          {/* Name */}
          <div className="col-span-1">
            <input
              type="text"
              name="fname"
              value={formData.fname}
              onChange={handleChange}
              placeholder="Name"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0c3730]"
              required
            />
          </div>

          {/* Email */}
          <div className="col-span-1">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0c3730]"
              required
            />
          </div>

          {/* Mobile */}
          <div className="col-span-1">
            <input
              type="number"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Mobile"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0c3730]"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="col-span-1 flex items-center">
            <button
              type="submit"
              className="w-full bg-[#0c3730] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#094336] transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
