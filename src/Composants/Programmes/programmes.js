import { useState } from "react";
import Item from "./Items";
import { v4 as uuidv4 } from "uuid";
import './programmes.css';
import Card1 from "../../Assets/Carousel.jpg"
import Card2 from "../../Assets/Carousel2.jpg"
import Card3 from "../../Assets/Carousel3.jpg"




export default function Form(){
    const [dataArr, setDatArr] = useState([
        {texte: "Some quick example text to build on the card title and make up the bulk of the card's content.", id: uuidv4(), name: "Débutant", texte_btn: "Read more", image: Card1},
        {texte: "Some quick example text to build on the card title and make up the bulk of the card's content.", id: uuidv4(), name: "Intermédiaire", texte_btn: "Read more", image: Card3},
        {texte: "Some quick example text to build on the card title and make up the bulk of the card's content.", id: uuidv4(), name: "Expert", texte_btn: "Read more", image: Card2},
    ])
    return (
        <>
        <h1 className="pb-3 mb-4 font-italic border-bottom">Nos programmes</h1>
        <div className="container card1">
            <div className="row">
            {dataArr.map((item) => {
                        return (
                            <Item
                            texte={item.texte}
                            name={item.name}
                            img={item.image}
                            key={item.id}
                            id={item.id}
                            btn={item.texte_btn}
                            />
                        )
                    })}
            </div>
        </div>
        </>
    )
}