import React from 'react'
import './programmes.css';

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
    // <li className="border d-flex justify-content-between align-items-center p-2 m-2">
    //   <div className="p-3">{props.texte}</div>
    //   <button className="btn btn-danger p-2 h-50" onClick={() => props.delFunc(props.id)}>Supprimer</button>
    // </li>
  )
}