import React from "react";
import rocket from "../../../assets/rocket.png";
import group1 from "../../../assets/Group 1.png";
import group2 from "../../../assets/Group 2.png";
import group3 from "../../../assets/Group 3.png";
import group4 from "../../../assets/Group 4.png";
import group5 from "../../../assets/Group 5.png";
import backgroundImage from "../../../assets/Frame 40 (1).png";

export default function ProjectJourney() {
  const groupImages = [group1, group2, group3, group4, group5];
  const groupTitles = [
    { title: "Discovery", color: "text-blue-500" },
    { title: "UI/UX Design", color: "text-blue-400" },
    { title: "Development", color: "text-orange-500" },
    { title: "Testing", color: "text-red-500" },
    { title: "Deployment", color: "text-blue-800" },
  ];
  const groupDescriptions = [
    {
      description:
        "understanding your goals, target audience, and requirements to create a solid foundation for your project.",
    },
    {
      description:
        "Our designers craft intuitive wireframes and stunning visuals to ensure a seamless and engaging user experience.",
    },
    {
      description:
        "We bring your vision to life with robust frontend and backend development, ensuring functionality and scalability.",
    },
    {
      description:
        "Thorough testing is conducted to ensure the application is bug-free, secure, and performs flawlessly across all devices.",
    },
    {
      description:
        "Your application goes live with everything configured for optimal performance, hosting, and domain setup.",
    },
  ];
  return (
    <div>
      {" "}
      <div className="flex flex-col justify-center items-center">
        <img src={rocket} alt="rocket" />
        <h2 className="text-3xl  font-bold text-sky-700">Project Journey</h2>
        <p className="text-center w-11/12 md:w-full my-6 font-bold text-gray-600">
          From Initial Concepts to Final Deployment, Our Step-by-Step Process
          Ensures Every Detail is Perfectly <br /> Aligned to Deliver
          Exceptional, High-Performance Web Solutions Tailored to Your Needs
        </p>
        <div className="flex  w-full px-6  flex-col md:flex-row gap-4 justify-center">
          {groupImages.map((image, index) => (
            <div key={index} className="text-center w-64 m-auto">
              <img
                src={image}
                alt={`Group ${index + 1}`}
                className=" w-full "
              />
              <div
                className={`text-xl my-4 w-full    ${groupTitles[index].color} font-semibold`}
              >
                {groupTitles[index].title}
              </div>
              <p className=" w-full  p-0  text-gray-500">
                {groupDescriptions[index]?.description ||
                  "No description available."}
              </p>
            </div>
          ))}
        </div>
        <div className="hero my-12 overflow-hidden">
          <img src={backgroundImage} alt="background" className="h-full" />
          <div className="hero-overlay ">
            <div className="hero-content text-white ">
              <div className="mx-6 md:mx-24 my-12 ">
                <h1 className="text-2xl md:text-3xl font-bold">
                  Empower Your Existance with Transformative Web Development{" "}
                  <br />
                  Solutions
                </h1>

                <button className="btn btn-primary  border-none text-white  rounded-full mt-4">
                  Contact US
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
