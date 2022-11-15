import { useState } from "react";
import Item from "./Items";
import { v4 as uuidv4 } from "uuid";



export default function Form(){
    const [dataArr, setDatArr] = useState([
        {texte: "Some quick example text to build on the card title and make up the bulk of the card's content.", id: uuidv4(), name: "Débutant", texte_btn: "Read more", image: "./Assets/Carousel.jpg"},
        {texte: "Some quick example text to build on the card title and make up the bulk of the card's content.", id: uuidv4(), name: "Débutant", texte_btn: "Read more", image: "test/src/Assets/Carousel.jpg"},
        {texte: "Some quick example text to build on the card title and make up the bulk of the card's content.", id: uuidv4(), name: "Débutant", texte_btn: "Read more", image: "./images/Carousel.jpg"},
    ])

    const deleteElement = id => {
        const filteredState = dataArr.filter(item => {
            return item.id !== id;
        })
        setDatArr(filteredState)
    }

    return (
        <>
        <div className="container">
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
                            delFunc={deleteElement}
                            />
                        )
                    })}
            </div>
        </div>
        </>
    )
}