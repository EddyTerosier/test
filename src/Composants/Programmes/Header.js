import React from 'react'
import './programmes.css'
import "../../App.css"
import Logo from "../../Assets/Logo transparent.png"

export default function Header() {
  return (
    <div class="navbar navbar-expand-md navbar-light bg-custom">
                <div class="container">
                    <a class="navbar-brand" href="Index.html"><img src={Logo} alt="Logo" width="110px"/></a>
                    <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="collapsibleNavId">
                        <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" href="/Index.html" aria-current="page">Accueil</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Concept</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="Programmes.html">Programmes</a>
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
            </div>
  )
}
