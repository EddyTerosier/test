import axios from "axios"
import {useEffect, useState} from "react"
// import './Composants/Programmes/programmes.css';


// function App() {
//   const [products,setProducts] = useState ([])

//   useEffect(() => {
//     axios.get("./product.json")
//     .then((data) => {
//       setProducts(data)
//     }
//     )
//   }, []
//   )

//   return (
//     <>
//     <div className="app">
//       <header>

//       </header>
//       <div>
//         {products.map((id, name, texte) => (
//       <div key={id} name={name} texte={texte}></div>
//     )
//     )}
//       </div>
//       <footer>

//       </footer>

//     </div>
//     </>
//   );
// }

// export default App;

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Programmes from "./Composants/Programmes/programmes"
import Header from "./Composants/Programmes/Header.js"
import Footer from "./Composants/Programmes/Footer.js"

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
