import React from "react"; 
//Import AboutSection
import AboutSection from "../components/AboutSection.js";
import ServicesSection from "../components/ServicesSection.js";
import FaqSection from "../components/FaqSection.js";
//Animations
import {motion} from "framer-motion";
import { pageAnimation } from "../animation";

const AboutUs = () => {
    return (
        <motion.div 
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
        >
                <AboutSection/> 
                <ServicesSection />
                <FaqSection/> 
        </motion.div>
    ); 
}
export default AboutUs;