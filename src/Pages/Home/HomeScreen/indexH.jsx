import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";
import Testimonial from "../Testimonial";

function Home(){
    return(
        <>
         <HeroSection />
         <MySkills />
         <AboutMe />
         <MyPortfolio />
         <Testimonial />
         <ContactMe />
         <Footer />
        </>
    );
}


export default  Home
