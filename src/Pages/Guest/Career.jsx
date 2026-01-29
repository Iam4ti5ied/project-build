
import React from "react";
import careerv from "../../assets/video/careerv.mp4";

const Career = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">

      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={careerv}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay Box */}
      <div className="
        absolute top-1/4 left-10
        bg-white/90 
        shadow-xl 
        p-8 
        w-[350px]
        rounded-sm
      ">
        <h2 className="font-serif text-[22px] mb-4">
          DESIGN YOUR CAREER <br /> WITH US
        </h2>

        <p className="text-sm leading-relaxed mb-6">
          We strive to hire the best people and give them the tools they need
          to thrive.
        </p>

        <button className="
          border border-black 
          px-5 py-2 
          text-sm 
          font-semibold
          hover:bg-black hover:text-white
          transition
        ">
          SEARCH FOR JOBS
        </button>
      </div>
    </div>
  );
};

export default Career;
