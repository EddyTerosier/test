// import axios from "axios"
// import {useEffect, useState} from "react"

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Programmes from "./Composants/Programmes/programmes"
import Header from "./Composants/main/Header.js"
import Footer from "./Composants/main/Footer.js"

function App() {
  return (
    <div className="App">
      <Header/>
      <Programmes/>
      <Footer/>
    </div>
  );
}

export default App;
