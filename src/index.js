import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App1 from './App';
import Header from './Composants/main/Header';
import Footer from './Composants/main/Footer';
import Programmes from './Composants/Programmes/programmes'
import "./Composants/main/style.css"

export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route index element={<App1/>} />
        <Route path='Programmes' element={<Programmes/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)
