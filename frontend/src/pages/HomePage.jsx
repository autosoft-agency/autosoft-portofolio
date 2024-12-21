import Header from "../components/homepage/heroSection/Header";
import FloatingContainer from "../components/homepage/heroSection/FloatingContainer";
import backgroundImage from "../assets/background.png";
import OurServices from "../components/homepage/ourServices/OurServices";
import ProjectJourney from "../components/homepage/projectJourney/ProjectJourney";
import OurProjects from "../components/homepage/ourProjects/OurProjects";

const HomePage = () => {
  return (
    <div>
<<<<<<< HEAD
        <div 
           className="relative bg-cover bg-center min-h-screen" 
           style={{ backgroundImage:` url(${backgroundImage}) `}}
        >
           <div className="absolute inset-0 bg-black/10 backdrop-blur-md pointer-events-none"></div>  
           {/* <Header /> */}
           <FloatingContainer />
        </div>
        <OurServices />
        {/* <Footer /> */}
=======
      <div className="relative bg-cover bg-center min-h-screen" style={{ backgroundImage: ` url(${backgroundImage}) ` }} >
        <div className="absolute inset-0 bg-black/10 backdrop-blur-md pointer-events-none"></div>
        <Header />
        <FloatingContainer />
      </div>
      <OurServices />
      <ProjectJourney />
      <OurProjects />
>>>>>>> 30a2bb8da41f93ac9b781fe2ce2db705279600ed
    </div>

  );
};

export default HomePage;
