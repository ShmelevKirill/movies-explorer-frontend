import './Main.css';
import React from "react";
import Promo from '../Promo/Promo'
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
// import NavTab from '../NavTab/NavTab'
// import AboutProject from '../AboutProject/AboutProject'
// import Techs from '../Techs/Techs'
// import AboutMe from '../AboutMe/AboutMe'
// import Portfolio from '../Portfolio/Portfolio'

function Main() {
  return (
    <main>
        <section className="main">
          <Promo/> 
          <AboutProject />
          <Techs />
          <AboutMe />
          <Portfolio />
          
        </section>
    </main>
  );
}

export default Main;