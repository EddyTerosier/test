import React from 'react'

export default function Item(props) {
  return (
    <div class="col-md-4">
            <div class="card mb-4 text-white bg-dark">
               <img class="card-img-top" src={props.img} alt="Card image"/>
               <div class="card-body">
                  <h5 class="card-title">{ props.name }</h5>
                  <p class="card-text">{ props.texte }</p>
                  <a href="#" className="btn btn-outline-custom btn-sm btn-read-more" onClick={() => props.delFunc(props.id)}>{props.btn}</a>
               </div>
            </div>
         </div>
  )
}
