import React from 'react'
import ProgrammeJson from "../../product.js"

export default function Item(props) {
  return (
   <>
   {
      ProgrammeJson.map(programme => {
         return (
            <div class="col-md-4">
               <div class="card mb-4 text-white bg-dark">
                  <img class="card-img-top" src={programme.image} alt="Card image"/>
                  <div class="card-body">
                     <h5 class="card-title">{ programme.name }</h5>
                     <p class="card-text">{ programme.texte }</p>
                     <a href="#" className="btn btn-outline-custom btn-sm btn-read-more">{programme.texte_btn}</a>
                  </div>
               </div>
            </div>
         )
      })
   }
   </>
  )
}
