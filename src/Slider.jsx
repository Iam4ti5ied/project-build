import React, { useState } from "react";
import video1 from "./assets/video/video1.mp4";
import video2 from "./assets/video/video2.mp4";
import video3 from "./assets/video/video3.mp4";

// Video slides
const slides = [
  {
    src: video1,
    title: "Archbuild's Global Workspace Survey 2025",
    description: "Our Survey Data reveals the Top Factors Driving a High-Performance Workspace...",
    buttonText: "Explore",
  },
  {
    src: video2,
    title: "The Return of the City",
    description: "Our Survey Reveals How Perceptions Have Shifted from 2021 to 2025 across 15 Global Cities.",
    buttonText: "Explore",
  },
  {
    src: video3,
    title: "Design Forecast 2025:",
    description: "Explore the Design Trends and Strategies Transforming Tough Challenges Into Lasting, Positive Change...",
    buttonText: "Learn More",
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const currentSlide = slides[currentIndex];

  return (
    <div className="relative w-full h-[600px]">

      {/* Video */}
      <video
        src={currentSlide.src}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center px-35 text-white bg-black/40">

        <h1 className="text-3xl font-stretch-condensed transition-all duration-300 hover:text-emerald-400 hover:scale-105">
          {currentSlide.title}
        </h1>

        <p className="mt-3 text-l font-semibold max-w-3xs">
          {currentSlide.description}
        </p>

        {/* Button moved LEFT */}
        <div className="mt-4 flex">
          <button className="border border-emerald-500 px-4 py-1 rounded-md hover:bg-emerald-600 hover:border-emerald-600 transition">
            {currentSlide.buttonText}
          </button>
        </div>
      </div>

      {/* Slide Dots */}
      <div className="absolute bottom-5 w-full flex justify-center gap-3">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-3 w-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>

      
      <button
        onClick={prevSlide}
        className="absolute top-[60%] left-3 text-gray-400 text-4xl font-light p-2 hover:text-emerald-300 transition"
      >
        &lt;
      </button>

      
      <button
        onClick={nextSlide}
        className="absolute top-[60%] right-3 text-gray-400 text-4xl font-light p-2 hover:text-emerald-300 transition"
      >
        &gt;
      </button>

    </div>
  );
};

export default Slider;