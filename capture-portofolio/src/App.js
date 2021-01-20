import React from "react"
import AboutUs from "./pages/AboutUs.js";
import Nav from "./components/Nav.js";
//Global Style
import GlobalStyle from "./components/GlobalStyle.js";
import ContactUs from "./pages/ContactUs"; 
import OurWork from "./pages/OurWork";
//Router
import { Switch, Route, useLocation } from "react-router-dom"; //Трябва да бъде импортирано за да може да работи
import MovieDetail from "./pages/MovieDetail.js";
//Animation
import {AnimatePresence} from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle/>
      <Nav/>
     {/* //Rout има няколко параметара. 
     //path параметара казва кога искаме да рендваме
     //компонента който е обграден от Route. Свързано е с URLа  */}
      <AnimatePresence exitBeforeEnter> //Неоходимо за анимациите
        <Switch location={location} key={location.pathname}> //Тези параметри са необходими за анимирането на страницата
          <Route path="/" exact>
            <AboutUs/>
          </Route> 
          <Route path="/work" exact>
            <OurWork/>
          </Route>
          <Route path="/work/:id">
            <MovieDetail />
          </Route>
          <Route path="/contact">
            <ContactUs/>
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
