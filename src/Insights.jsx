import React from "react";
import img1 from "./assets/images/img1.jpg";
import img2 from "./assets/images/img2.jpg";

const Insights = () => {
  return (
    <section className="w-full px-30 md:px-25 py-25 space-y-10">
      
     
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 items-start">
        <img
          src={img1}
          alt="Trend rooftop garden"
          className="w-3/4 h-56 mx-auto rounded-md object-cover shadow-sm"
        />

        <div>
          <p className="uppercase text-md tracking-wide text-gray-500 font-bold">
            Trends
          </p>

          <h2 className="mt-2 text-3xl md:text-4xl font-lora leading-tight transition-colors duration-300 hover:text-green-800 cursor-pointer">
            The 5 Trends Shaping Design in 2025
          </h2>

          <p className="mt-4 text-gray-600 max-w-xl">
            Here are the most important signals and key opportunities we see in the
            building industry today....
          </p>
        </div>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div>
          <p className="uppercase text-md tracking-wide text-gray-500 font-bold">
            Blog
          </p>

          <h2 className="mt-2 text-2xl md:text-3xl font-lora leading-tight transition-colors duration-300 hover:text-green-800 cursor-pointer">
            Trends to Watch Reshaping the Future of Cities and Urban Living...
          </h2>

          <h3 className="text-3xl md:text-3xl mt-4 font-serif italic">
            Archbuild
          </h3>

          <p className="mt-4 text-gray-600 w-2/3">
            Cities & Urban Design leaders discuss what’s next for the future of cities.
          </p>
        </div>

        <img
          src={img2}
          alt="City street"
          className="w-3/4 h-56 mx-auto rounded-md object-cover shadow-sm"
        />
      </div>

    </section>
  );
};

export default Insights;