
import react from "react";
import videox from "../../assets/video/videox.mp4";
import imga from "../../assets/images/culture.jpg";
import imgb from "../../assets/images/hospital.jpg";
import imgc from "../../assets/images/sport.jpg";
import imgd from "../../assets/images/city.jpg"


const researchinsight = () => {
  return (
    <div className="w-full">

      {/* VIDEO HERO SECTION */}
      <div className="relative w-full h-[550px] overflow-hidden">

        <video
          src={videox}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />

        {/* OVERLAY BOX ON VIDEO */}
        <div className="absolute top-10 left-10 bg-white bg-opacity-90 p-6 md:p-8 shadow-lg max-w-sm rounded">
          <p className="text-sm text-gray-700 mb-1">Global Workplace Survey 2025</p>
          <h2 className="text-xl font-semibold text-gray-900 leading-snug">
            Our Survey Data Reveals the Top <br />
            Factors Driving a High-Performance Workspace
          </h2>
        </div>
      </div>

      {/* BLACK TEXT SECTION */}
      <section className="bg-black text-white px-6 md:px-20 py-16 text-center">
        
        <h3 className="text-lg italic mb-6">
          The Archbuild Research Institute{" "}
          <span className="not-italic font-light">
            plays a vital role in unlocking innovative design solutions needed to navigate a changing world.
          </span>
        </h3>

        <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto mb-4">
          Our network of researchers and thought leaders create the insights our designers and clients
          need to address their toughest problems.
        </p>

        <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto mb-10">
          The Institute is organized into six pillars of research expertise with a focus on Workplace, Cities, Health,
          Lifestyle, Equity, and Resilience. We fund over 50 global research grants annually.
        </p>

        <button className="px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition duration-300">
          LEARN MORE
        </button>

      </section>

      {/* ============================== */}
      {/*      RESEARCH CONTENT LIST     */}
      {/* ============================== */}

      {/* SECTION 1 — IMAGE LEFT / TEXT RIGHT */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-20 py-20">

        {/* IMAGE */}
        <img
          src={imga}
          alt="Research"
          className="w-full max-w-[450px] h-[260px] object-cover rounded mx-auto"
        />

        {/* TEXT */}
        <div className="flex flex-col justify-center">
          <p className="text-sm text-gray-600 mb-2">Research</p>

          <h2 className="text-2xl font-[Playfair Display] text-gray-900 mb-4 italic">
            The Culture of Innovation Diagnostic
          </h2>

          <p className="text-gray-700 leading-relaxed max-w-md">
            Archbuild’s Culture Strategy team developed a diagnostic framework that uncovers the key factors to activate an intentional culture of innovation. ​
          </p>
        </div>
      </div>

      {/* SECTION 2 — TEXT LEFT / IMAGE RIGHT */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-20 pb-20">

        {/* TEXT */}
        <div className="flex flex-col justify-center">
          <p className="text-sm text-gray-600 mb-2">Research</p>

          <h2 className="text-2xl font-[Playfair Display] text-gray-900 mb-4 italic">
            Hospitality Experience Survey 2024
          </h2>

          <p className="text-gray-700 leading-relaxed max-w-md">
            As travel ramps up, our survey explores the growing blend of business
            and leisure travel, new definitions of luxury hospitality experiences,
            and heightened guest expectations.
          </p>
        </div>

        {/* IMAGE */}
        <img
          src={imgb}
          alt="Hospitality Research"
          className="w-full max-w-[450px] h-[260px] object-cover rounded mx-auto"
        />
      </div>
      

       <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-20 py-20">

        {/* IMAGE */}
        <img
          src={imgc}
          alt="Research"
          className="w-full max-w-[450px] h-[260px] object-cover rounded mx-auto"
        />

        {/* TEXT */}
        <div className="flex flex-col justify-center">
          <p className="text-sm text-gray-600 mb-2">Research</p>

          <h2 className="text-2xl font-[Playfair Display] text-gray-900 mb-4 italic">
            Sport Experience Survey 2025
          </h2>

          <p className="text-gray-700 leading-relaxed max-w-md">
            With live sports at a turning point, it’s more important now than ever to understand what people value in a live sports experience, and how venues can adapt and deliver. ​
          </p>
        </div>
      </div>

      {/* SECTION 2 — TEXT LEFT / IMAGE RIGHT */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-20 pb-20">

        {/* TEXT */}
        <div className="flex flex-col justify-center">
          <p className="text-sm text-gray-600 mb-2">Research</p>

          <h2 className="text-2xl font-[Playfair Display] text-gray-900 mb-4 italic">
            City Pulse Survey Spring 2027
          </h2>

          <p className="text-gray-700 leading-relaxed max-w-md">
           Our City Pulse Survey Spring 2022 surveyed city residents in 25 cities across the world to understand how residents are feeling about their cities through the lenses of affordability, work, and safety. ​
          </p>
        </div>

        {/* IMAGE */}
        <img
          src={imgd}
          alt="Hospitality Research"
          className="w-full max-w-[450px] h-[260px] object-cover rounded mx-auto"
        />
      </div>

    </div>
  );
};

export default researchinsight;