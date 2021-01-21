import React from "react"; 
import styled from "styled-components";
import {About} from "../styles.js";
import Toggle from "./Toggle.js";
import { AnimateSharedLayout, motion } from "framer-motion";


const FaqSection = () => {
    
    return(

        <Faq>

            

            <AnimateSharedLayout>

                <motion.h2 layout>Any quastions? <span>FAQ</span></motion.h2>

                <Toggle title = "How Do I Start">
                        <div className="answer">    
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, saepe.</p>
                        </div>
                </Toggle>
                
                <Toggle title="Daily Schedule">
                        <div className="answer">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, saepe.</p>
                        </div>
                </Toggle>
                
                <Toggle title="Different Paymant Methods">    
                        <div className="answer">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, saepe.</p>
                        </div>
                </Toggle>

                <Toggle title = "What Products do you offer">
                        <div className="answer">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, saepe.</p>
                        </div>
                </Toggle>

            </AnimateSharedLayout>

        </Faq>
    );
}

const Faq = styled(About)`
    display: block;
    span{
        display: block;  
    }
    h2{
        padding-bottom: 2rem; 
        font-weight: lighter; 
    }
    .faq-line{
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem; 
        width: 100%;
    }
    .quastion{
        padding: 3rem 0rem; 
        cursor: pointer;
    }
    .answer{
        padding: 2rem 0rem; 
        p{
            padding: 1rem 0rem; 
        }
    }
`;


export default FaqSection;