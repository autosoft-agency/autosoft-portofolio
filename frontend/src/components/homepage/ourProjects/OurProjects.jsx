import React, { useState } from "react";
import portofolio from "../../../assets/portfolio_351456 1.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

export default function OurProjects() {
  const clonedProjectsSlides = [
    { image: "https://swiperjs.com/demos/images/nature-1.jpg" },
    { image: "https://swiperjs.com/demos/images/nature-2.jpg" },
    { image: "https://swiperjs.com/demos/images/nature-5.jpg" },
    { image: "https://swiperjs.com/demos/images/nature-7.jpg" },
    { image: "https://swiperjs.com/demos/images/nature-8.jpg" },
  ];

  const templatesSlides = [
    { image: "https://swiperjs.com/demos/images/nature-3.jpg" },
    { image: "https://swiperjs.com/demos/images/nature-4.jpg" },
    { image: "https://swiperjs.com/demos/images/nature-6.jpg" },
    { image: "https://swiperjs.com/demos/images/nature-9.jpg" },
    { image: "https://swiperjs.com/demos/images/nature-10.jpg" },
  ];
  const [slides, setSlides] = useState(clonedProjectsSlides);
  const [activeButton, setActiveButton] = useState("cloned");

  const handleButtonClick = (slides) => {
    if (slides === clonedProjectsSlides) {
      setSlides(clonedProjectsSlides);
      setActiveButton("cloned");
    } else {
      setSlides(templatesSlides);
      setActiveButton("templates");
    }
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center my-20">
        <img src={portofolio} alt="Portofolio" />
        <h2 className="text-3xl font-bold text-sky-700">Our Projects</h2>
        <p className="text-center my-4 w-11/12 md:w-full text-xl md:text-2xl  font-bold">
          A Showcase of Expertly Crafted Template-Based Projects,
          Custom-Designed and Tailored to Fit the
          <br /> Unique Requirements of Each Business, Ensuring Quality and
          Efficiency
        </p>
        <div className="flex mt-12 ">
          <button
            onClick={() => handleButtonClick(clonedProjectsSlides, "cloned")}
            type="button"
            className={`text-xl font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ${
              activeButton === "cloned"
                ? "bg-sky-700 text-white"
                : "text-sky-700 bg-white"
            } hover:bg-sky-700 hover:text-white focus:outline-none  `}
          >
            Cloned Projects
          </button>
          <button
            onClick={() => handleButtonClick(templatesSlides, "templates")}
            type="button"
            className={`text-xl font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ${
              activeButton === "templates"
                ? "bg-sky-700 text-white"
                : "text-sky-700 bg-white"
            } hover:bg-sky-700 hover:text-white focus:outline-none  `}
          >
            Templates
          </button>
        </div>
      </div>
      <Swiper
        effect={"coverflow"}
        navigation={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 100,
          modifier: 1.5,
          slideShadows: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectCoverflow, Navigation, Pagination]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img src={slide.image} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
