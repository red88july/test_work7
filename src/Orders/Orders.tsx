import {Order} from "../types";
import React from "react";
import './Orders.css';

const Orders:React.FC<Order>= ({name,count,price,image,onClickDelete}) => {
    return (
        <div className="orders-box">
            <strong>{name}</strong>
            <span>x {count}</span>
            <strong>{price}</strong>
            <button type="button" className="delete-btn" onClick={onClickDelete}>
                <img src={image} alt={name} className="delete-img"/>
            </button>
        </div>
    );
};

export default Orders;