// import axios from "axios"
// import {useEffect, useState} from "react"

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Programmes from "./Composants/Programmes/programmes"
import Header from "./Composants/main/Header.js"
import Footer from "./Composants/main/Footer.js"
import Section1 from "./Composants/HomePage/Section1"
import Section2 from "./Composants/HomePage/Section2"
import Section3 from "./Composants/HomePage/Section3"
import Section4 from "./Composants/HomePage/Section4"

function App() {
  return (
    <div className="App">
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
    </div>
  );
}

export default App;
