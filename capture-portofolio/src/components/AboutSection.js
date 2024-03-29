import React from "react"; 
import home1 from "../img/home1.png";
import { About, Description, Hide, Image } from "../styles.js";
//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";
import {useScroll} from "../components/useScroll.js";


const AboutSection = () => {

    return(		
        <About>
            <Description>
                <motion.div>
                    <Hide>
                        <motion.h2
                            variants={titleAnim}
                            
                        >
                            We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2
                            variants={titleAnim}
                            
                        >
                            your <motion.span>dreams</motion.span> come</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2
                            variants={titleAnim}
                        >
                            true.</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p
                    variants={fade}

                >
                    Contact us for any photography or videography ideas that you have. We have professionals with amaizing skills </motion.p>
                <motion.button 
                    
                    variants={fade}
                >
                    Contact Us</motion.button>
            </Description>
            <Image>
                <motion.img variants={photoAnim} src={home1} alt="guy with a camera"/>
            </Image>
            <Wave></Wave>
        </About>
    ); 
}
export default AboutSection;