import React from 'react'

export default function Section2() {
  return (
    <div class="banniere_2">
        <h1 class="box">DREAM-GYM <br/>C'EST QUOI ?</h1>
        <span><p class="box box1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ratione amet consectetur animi? Magnam, ab ratione harum repellendus veritatis dolores exercitationem omnis! Corrupti enim veritatis omnis delectus illo adipisci deleniti!</p></span>
    </div>
  )
}

window.addEventListener("scroll", checkboxes)

function checkboxes() {
  const boxes = document.querySelectorAll(".box")
  const triggerBottom = window.innerHeight / 5 * 4;
  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top

    if (boxTop< triggerBottom) {
      box.classList.add("show")
    } else {
      box.classList.remove("show")
    }
  })
}