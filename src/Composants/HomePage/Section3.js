import React from 'react'

export default function Section3() {
  return (
    <div class="banniere_3">
        <span><h1 class="box">Trouves ta salle de sport pres de chez toi !</h1></span>
        <form class="d-flex my-2 my-lg-0 box box1">
            <input class="me-sm-2" type="text" placeholder="Nom,Ville,Adresse..."/>
            <button class="btn btn-outline-custom my-sm-0" type="submit">OK</button>
        </form>
    </div>
  )
}

window.addEventListener("scroll", checkboxes)

function checkboxes() {
  const boxes = document.querySelectorAll(".box1")
  const triggerBottom = window.innerHeight / 4 * 3;
  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top

    if (boxTop< triggerBottom) {
      box.classList.add("show")
    } else {
      box.classList.remove("show")
    }
  })
}