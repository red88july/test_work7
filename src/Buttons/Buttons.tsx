import React from "react";
import {Button} from "../types";
import './Buttons.css';

const Buttons: React.FC<Button> = ({name, price, image}) => {
    return (
        <button type="button" className="btn-ingridient">
                <img src={image} alt={name} className="img-ingridient" />
            <div className="description-items">
                <h4 className="title">{name}</h4>
                <span className="price">{price} KGZ</span>
            </div>
        </button>
    );
};

export default Buttons;
