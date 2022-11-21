import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../../Assets/Logo transparent.png"

export default function Header() {
  return (
    <nav class="navbar navbar-expand-md navbar-light bg-custom">
        <div class="container">
        <Link to="/"><a onClick={activeState} class="navbar-brand" href="Index.html"><img src={Logo} alt="Logo" width="115px"/></a></Link>
            <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavId">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <Link to="/"><a id = "1" class="nav-link active" aria-current="page" onClick={activeState}>Accueil</a></Link>
                    </li>
                    <li class="nav-item">
                        <a id = "2" class="nav-link" href="#" onClick={activeState}>Concept</a>
                    </li>
                    <li class="nav-item">
                    <Link to="/Programmes"><a id = "3" class="nav-link" href="#" onClick={activeState}>Programmes</a></Link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Giga+</a>
                        <div class="dropdown-menu" aria-labelledby="dropdownId">
                            <a class="dropdown-item" href="#">Abonnement premium</a>
                            <a class="dropdown-item" href="#">Salle premium</a>
                        </div>
                    </li>
                </ul>
                <form class="d-flex my-2 my-lg-0">
                    <input class="form-control me-sm-2" type="text" placeholder="Search"/>
                    <button class="btn btn-outline-custom my-2 my-sm-0" type="submit">Rechercher</button>
                </form>
            </div>
        </div>
    </nav>
  )
}

// const element1 = document.getElementById("1");
// const element2 = document.getElementById("2");
// const element3 = document.getElementById("3");
// const active = document.querySelector(".active");
// const elements = element1+element2+element3;

// FONCTION CLASSIQUE

// function activeRemove() {
//     if (!active) {
//         elements.classList.add("active")
//     } else {
//         elements.classList.remove("active")
//     }
// }

// FONCTION FLECHEE + TERNAIRE

// const activeRemove = () => {!active ? elements.classList.add("active") : elements.classList.remove("active")};

// FONCTION AVEC STATE 

const activeState = (e)=>{
    const id = e.target.id
    const idArray = ["1","2","3"]

    idArray.forEach((element)=> {
        document.getElementById(element).classList.remove("active")
    });
    document.getElementById(id).classList.add("active")
}