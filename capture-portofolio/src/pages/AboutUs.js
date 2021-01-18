import React from "react"; 
//Import AboutSection
import AboutSection from "../components/AboutSection.js";
import ServicesSection from "../components/ServicesSection.js";
import FaqSection from "../components/FaqSection.js";


const AboutUs = () => {
    return (
        <div>
            <AboutSection/> 
            <ServicesSection />
            <FaqSection/> 
        </div>
    ); 
}
export default AboutUs;