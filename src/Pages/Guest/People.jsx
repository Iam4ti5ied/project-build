 import React from "react";
 import image1 from "../../assets/images/Emily.jpeg"
 import image2 from "../../assets/images/thompson.jpeg"
 import image3 from "../../assets/images/daniel.jpeg"
 import image4 from "../../assets/images/michael.jpeg"
 import image5 from "../../assets/images/julia.jpeg"
 import image6 from "../../assets/images/ethan.jpeg"
 import image7 from "../../assets/images/sophia.jpeg"
 import image8 from "../../assets/images/johnny.jpeg"
 import image9 from "../../assets/images/Bill.jpeg"

const people = [
  
  {
    name: "Thomas Thompson",
    role: "Lead Architect",
    email: "thomas.thompson@company.com",
    bio: "Thomas is a lead architect with 21 years of experience in designing innovative, sustainable buildings. Specializing in commercial and residential urban designs, he lead cross-functional teams to deliver high-quality, functional spaces that meet both client needs and environmental standards.",
    image: image1, 
  },
  {
    name: "Sarah Morgan",
    role: "Senior Project Manager",
    email: "sarah.morgan@company.com",
    bio: "Sarah is a Senior Project Manager with 12 years of experience leading complex projects from inception to completion. Specializing in construction, tech and infrastructure, She excels in project planning, risk management, and stakeholder coordination to ensure on-time, on-budget delivery.",
    image: image2,
  },
  {
    name: "Daniel Navarro",
    role: "Interior Designer",
    email: "daniel.navarro@company.com",
    bio: "Daniel is an interior designer with 8 years of experience creating functional and aesthetically pleasing spaces. Specializing in residential,commercial and industrial design, he focus on blending creativity with practicality to craft personalized environments that enhance both form and function.",
    image: image3,
  },
  {
    name: "Michael Ross",
    role: "Urban Planner",
    email: "michael.ross@company.com",
    bio: "Michael is an urban planner specializing in key areas. With 13 years of experience, he focus on optimizing land use, infrastructure, and urban resilience. He also focus on creating cities that are livable, efficient and environmentally responsible.",
    image: image4,
  },
  {
    name: "Julia Carter",
    role: "Creative Director",
    email: "julia.carter@company.com",
    bio: "A visionary Creative Director who leads the firm’s design direction, ensuring every project reflects a clear concept, strong identity, and a high standard of visual excellence. They guide teams in crafting innovative, human-centered solutions that elevate the firm's brand and architectural expression.",
    image: image5,
  },
  {
    name: "Ethan Kim",
    role: "Structural Engineer",
    email: "ethan.kim@company.com",
    bio: "Experienced in structural analysis, material optimization, and code compliance, they design frameworks that balance performance with cost efficiency. Their expertise includes seismic design, load evaluation, and advanced modeling, ensuring projects meet the highest safety standards.",
    image: image6,
  },

   {
    name: "Sophia Ethan ",
    role: "Urban Planner / Design Researcher",
    email: "sophia.ethan@company.com",
    bio: "Sophia collaborates closely with architects to engineer safe, high-performing building systems. With a strong foundation in structural analysis and material behavior,  She is known for her clear communication, methodical problem-solving, and ability to translate design intent into practical, long-lasting solutions.",
    image: image7,
  },

   {
    name: "Johnny Cole",
    role: "Quality Control Specialist",
    email: "johnny.cole@company.com",
    bio: "A detail-driven Quality Control Specialist who ensures every project meets the firm’s technical, safety, and design standards. They review drawings, specifications, and on-site work to maintain accuracy and compliance, supporting the team in delivering architecture of the highest quality.",
    image: image8,
  },

   {
    name: "Bill Spencer",
    role: "BIM Manager",
    email: "bill.spencer@company.com",
    bio: "A highly skilled BIM Manager who leads the digital delivery process across all projects. They oversee model coordination, enforce BIM standards, and ensure seamless collaboration between architects, engineers, and contractors. Their expertise improves project efficiency, accuracy, and overall design quality.",
    image: image9,
  },
];

function People() {
  return (
    <div className="px-6 md:px-16 lg:px-24 py-20 bg-gray-100">
      <h1 className="text-4xl font-bold font-[Playfair Display] mb-6 text-gray-900 border-b-2 border-gray-300 inline-block pb-2">
  Our People
</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {people.map((person, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-xl transition-all"
          >
            <img
              src={person.image}
              alt={person.name}
              className="w-full h-75 object-cover rounded-lg mb-5"
            />

            <h2 className="text-xl font-bold text-gray-900">{person.name}</h2>
            <p className="text-green-700 font-semibold">{person.role}</p>

            <p className="text-gray-700 mt-3 mb-4 text-sm">{person.bio}</p>

            <a
              href={`mailto:${person.email}`}
              className="text-blue-600 underline text-sm"
            >
              {person.email}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default People;