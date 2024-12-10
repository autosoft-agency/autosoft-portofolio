import Header from "../components/homepage/heroSection/Header";
import FloatingContainer from "../components/homepage/heroSection/FloatingContainer";
import backgroundImage from "../assets/background.png";
import OurServices from "../components/homepage/ourServices/OurServices";

const HomePage = () => {
  return (
    <div>
        <div 
           className="relative bg-cover bg-center min-h-screen" 
           style={{ backgroundImage:` url(${backgroundImage}) `}}
        >
           <div className="absolute inset-0 bg-black/10 backdrop-blur-md pointer-events-none"></div>  
           <Header />
           <FloatingContainer />
        </div>
        <OurServices />
    </div>
  );
};

export default HomePage;