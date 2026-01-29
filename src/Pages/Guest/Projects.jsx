

import React from "react";
import videop from "../../assets/video/projectv.mp4"

const Project = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">

      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={videop}
        autoPlay
        loop
        muted
        playsInline
      />
    
    </div>
  );
};

export default Project;