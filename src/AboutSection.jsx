import React from "react";


const AboutSection = () => {
  return (
    <section className="w-full bg-black text-white py-32 px-6 md:px-20">

      <div className="max-w-5xl mx-auto space-y-8">

        {/* MAIN QUOTE */}
        <h2 className="text-4xl md:text-6xl font-lora leading-tight tracking-wide">
          We are creating a better world <br />
          through the power of design.
        </h2>

        {/* COMPANY NAME + PARAGRAPH */}
        <p className="text-2xl md:text-3xl font-semibold">
          Archbuild
          <span className="block mt-2 text-base md:text-lg font-normal text-gray-300">
            is a global architecture and design firm with 53 offices spanning Asia, Europe, Australia, the Middle East, and the Americas..
          </span>
        </p>

        <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-3xl">
          Every day, our work touches the lives of millions, which is why people remain at the core of our design approach. By focusing on human experience, we are able to address the most complex urban challenges and help shape a more resilient and equitable future..
        </p>

        {/* BUTTON */}
        <button className="mt-6 border border-white px-6 py-3 uppercase text-sm tracking-wide font-medium hover:bg-green-700 hover:text-black transition">
          Learn More About Us
        </button>

      </div>

    </section>
  );
};

export default AboutSection;