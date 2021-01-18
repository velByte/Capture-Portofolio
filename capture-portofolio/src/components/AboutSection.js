import React from "react"; 
import home1 from "../img/home1.png";
//Импортираме компонента, преди това трябва да бъде инсталлиреан с npm 
// npm install styled-conponents
//Styled
import styled from "styled-components";

const AboutSection = () => {
    return(
				//След като сме оформили желаните css параметри, заместваме div компонента
				//с името на константата. Константата се създава по-долу
        <About>
            <Description>
                <div className="title">
                    <Hide>
                        <h2>We work to make</h2>
                    </Hide>
                    <Hide>
                        <h2>your <span>dreams</span> come</h2>
                    </Hide>
                    <Hide>
                        <h2>true.</h2>
                    </Hide>
                </div>
                <p>Contact us for any photography or videography ideas that you have. We have professionals with amaizing skills </p>
                <button>Contact Us</button>
            </Description>
            <Image>
                <img src={home1} alt="guy with a camera"/>
            </Image>
        </About>
    ); 
}


//Styled Component
//Създаваме константа, която ще бъде използвана като заместител на HTML тага. 
//Константата трябва да бъде равна на styled точка следвана от името на HTML тага
//който трябва да замести, в този случай това е DIV таг. 
//След това следва `и после съвсем нормален CSS. 
//Добре е да се инсталира styled-componend разширение за VS Code. 
const About = styled.div`
    min-height: 90vh;
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: white;
`;
const Description = styled.div`
    flex: 1; 
    padding-right: 5rem; 
    h2{
        font-weight: lighter;
    }
`;
const Image = styled.div`
    flex:1;  
    overflow: hidden;
    img{
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }  
`;

const Hide = styled.div`
    overflow: hidden;
`;

export default AboutSection;