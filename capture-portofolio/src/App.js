import React from "react"
import AboutUs from "./pages/AboutUs.js";
import Nav from "./components/Nav.js";
//Global Style
import GlobalStyle from "./components/GlobalStyle.js";



function App() {
  return (
    <div className="App">
     <GlobalStyle/>
     <Nav/> 
     <AboutUs/>
    </div>
  );
}

export default App;
