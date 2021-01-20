
//Импортираме компонента, преди това трябва да бъде инсталлиреан с npm 
// npm install styled-conponents
//Styled
import styled from "styled-components";


//Styled Component
//Създаваме константа, която ще бъде използвана като заместител на HTML тага. 
//Константата трябва да бъде равна на styled точка следвана от името на HTML тага
//който трябва да замести, в този случай това е DIV таг. 
//След това следва `и после съвсем нормален CSS. 
//Добре е да се инсталира styled-componend разширение за VS Code. 
export const About = styled.div`
min-height: 90vh;
display:flex;
align-items: center;
justify-content: space-between;
padding: 5rem 10rem;
color: white;
`;

export const Description = styled.div`
flex: 1; 
padding-right: 5rem; 
z-index: 2;
h2{
    font-weight: lighter;
}
`;

export const Image = styled.div`
flex:1;  
overflow: hidden;
z-index: 2;
img{
    width: 100%;
    height: 80vh;
    object-fit: cover;
}  
`;

export const Hide = styled.div`
    overflow: hidden;
`;