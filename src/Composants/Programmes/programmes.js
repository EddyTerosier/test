import { useState } from "react";
import Item from "./Items";
import { v4 as uuidv4 } from "uuid";
import './programmes.css';

export default function Form(){
    return (
        <>
        <h1 className="pb-3 mb-4 font-italic border-bottom">Nos programmes</h1>
        <div className="container card1">
            <div className="row">
                <Item />
            </div>
        </div>
        </>
    )
}