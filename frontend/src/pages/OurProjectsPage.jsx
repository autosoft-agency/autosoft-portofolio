import React, { useState } from "react";
import Body from "../components/Body";
import Heading from "../components/Heading";
import ourProjectsBg from "../assets/2150010115 1.png";
import Pagination from "../components/Pagination";
import Cards from "../components/Cards";
import project1 from "../assets/GameWorrier.png";
import project2 from "../assets/AutoNet.png";
import project3 from "../assets/gem-gym.png";
import project4 from "../assets/movies.png";
import project5 from "../assets/tradex.png";
import cloneProject1 from "../assets/Chat-App-Clone.png";
import cloneProject2 from "../assets/Netflix-Clone.png";
import cloneProject3 from "../assets/Threads-Clone.png";
import cloneProject4 from "../assets/E-Commerce-Clone.png";
import cloneProject5 from "../assets/travello-clone.png";

const OurProjectsPage = () => {
  const templateCardData = [
    {
      id: 1,
      title: "GameWorrier",
      imageUrl: `${project1}`,
      link: "https://diamond-games.onrender.com/",
    },
    {
      id: 2,
      title: "Movies",
      imageUrl: `${project4}`,
      link: "https://moviessimplewebsite.netlify.app/",
    },
    {
      id: 3,
      title: "AutoNet",
      imageUrl: `${project2}`,
      link: "https://autonet.netlify.app/",
    },
    {
      id: 4,
      title: "Gem-Gym",
      imageUrl: `${project3}`,
      link: "https://gem-gym.onrender.com/",
    },
    {
      id: 5,
      title: "Tradex",
      imageUrl: `${project5}`,
      link: "https://nadamaher74.github.io/Tradex/",
    },
  ];
  const clonedProjectsCardData = [
    {
      id: 1,
      title: "Chat-App",
      imageUrl: `${cloneProject1}`,
    },
    {
      id: 2,
      title: "Netflix",
      imageUrl: `${cloneProject2}`,
    },

    {
      id: 3,
      title: "Travello",
      imageUrl: `${cloneProject5}`,
      link: "https://vimeo.com/1030207965",
    },
    { id: 4, title: "Threads", imageUrl: `${cloneProject3}` },
    {
      id: 5,
      title: "E-Commerce",
      imageUrl: `${cloneProject4}`,
    },
  ];
  const cardsPerPage = 3;
  const [currentTemplatePage, setCurrentTemplatePage] = useState(0);
  const startTemplateIdx = currentTemplatePage * cardsPerPage;
  const currentTemplateCards = templateCardData.slice(
    startTemplateIdx,
    startTemplateIdx + cardsPerPage
  );

  const [currentClonedPage, setCurrentClonedPage] = useState(0);
  const startClonedIdx = currentClonedPage * cardsPerPage;
  const currentClonedCards = clonedProjectsCardData.slice(
    startClonedIdx,
    startClonedIdx + cardsPerPage
  );

  return (
    <>
      <Heading
        bgImg={ourProjectsBg}
        title="OUR PROJECTS"
        subtitle="A Showcase of Tailored Solutions, Innovative Designs, and Seamless Functionality Built to Empower Businesses and Ideas"
      />
      <Body>
        <h1 className="text-4xl  my-10 font-bold text-center text-blue-600">
          TEMPLATES
        </h1>
        <Cards currentCards={currentTemplateCards} />
        <Pagination
          currentPage={currentTemplatePage}
          setCurrentPage={setCurrentTemplatePage}
          totalCards={templateCardData.length}
          cardsPerPage={cardsPerPage}
        />
        <h1 className="text-4xl  my-10 font-bold text-center text-blue-600">
          CLONED PROJECTS
        </h1>
        <Cards currentCards={currentClonedCards} />
        <Pagination
          currentPage={currentClonedPage}
          setCurrentPage={setCurrentClonedPage}
          totalCards={clonedProjectsCardData.length}
          cardsPerPage={cardsPerPage}
        />
      </Body>
    </>
  );
};

export default OurProjectsPage;
