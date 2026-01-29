

import React from "react";
import city from "../../assets/images/city.jpg";
import culture from "../../assets/images/culture.jpg";

const About = () => {
  return (
    <div className="w-full">

      <div className="relative h-[70vh] w-full overflow-hidden">
        <img
          src={culture}
          alt="Architecture Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center">
          <h1 className="text-white text-5xl font-light ml-16">
            About ArchBuild's
          </h1>
        </div>
      </div>

      <section className="px-16 py-20 grid grid-cols-1 md:grid-cols-2 gap-12">
        <img
          src={city}
          alt="Studio"
          className="rounded-lg shadow-lg object-cover h-[450px]"
        />

        <div>
          <h2 className="text-3xl font-light mb-6">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We are a multidisciplinary architectural Company dedicated to
            creating meaningful spaces rooted in clarity, purpose, and
            innovation. Our team combines technical precision with design
            sensitivity to deliver functional, timeless environments.
          </p>

          <h3 className="text-xl font-medium mb-3">Our Vision</h3>
          <p className="text-gray-700 mb-6">
            To redefine the built environment through timeless design and
            sustainable innovation.
          </p>

          <h3 className="text-xl font-medium mb-3">Our Approach</h3>
          <p className="text-gray-700">
            Every project begins with understanding people, place, and purpose.
            Through collaboration and rigorous exploration, we transform ideas
            into functional and resilient architectural solutions.
          </p>
        </div>
      </section>

      <section className="px-16 py-20 bg-gray-50">
        <h2 className="text-3xl font-light mb-12">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            "Architectural Design",
            "Urban Planning & Masterplanning",
            "Interior Architecture",
            "Project Management",
            "Sustainable Design",
            "3D Visualization / BIM",
          ].map((service, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg hover:shadow-lg transition bg-green-700"
            >
              <p className="text-lg text-white font-mediumn">{service}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-16 py-20 bg-gray-300">
        <h2 className="text-3xl font-light mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {[
            { name: "Precision", text: "Detail-driven design and execution." },
            { name: "Innovation", text: "Future-ready, efficient solutions." },
            { name: "Integrity", text: "Honest process and communication." },
            { name: "Sustainability", text: "Designing responsibly for tomorrow." },
          ].map((value, index) => (
            <div key={index}>
              <h3 className="text-xl font-medium mb-2">{value.name}</h3>
              <p className="text-gray-700">{value.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-16 py-20 bg-black text-white text-center">
        <h2 className="text-3xl font-light mb-4">
          Let’s Build Something Exceptional Together.
        </h2>
        <button className="border px-6 py-3 text-sm font-semibold hover:bg-white hover:text-black transition">
          CONTACT US
        </button>
      </section>
    </div>
  );
};

export default About;