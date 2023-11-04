import Orders from "./Orders/Orders";
import {Order} from "./types";
import Buttons from './Buttons/Buttons';
import {Food} from "./types";
import imageDelete from './assets/delete.png';
import imageCup from './assets/cup.png';
import imageForkKnife from './assets/forkKnife.png';
import './App.css';
import {useState} from "react";

function App() {

    const FOOD: Food[] = [
        {id:1, name: 'Hamburger', price: 80, image:  imageForkKnife},
        {id:2, name: 'Cheeseburger', price: 90, image:  imageForkKnife},
        {id:3, name: 'Fries', price: 45, image:  imageForkKnife},
        {id:4, name: 'Coffee', price: 70, image:  imageCup},
        {id:5, name: 'Tea', price: 50, image:  imageCup},
        {id:6, name: 'Cola', price: 40, image:  imageCup},
    ];

    const [order, setOrder] = useState<Order []>([
        {id:1, name: 'Hamburger', price: 80, count: 0, image: imageDelete},
        {id:2, name: 'Cheeseburger', price: 90, count: 0, image: imageDelete},
        {id:3, name: 'Fries', price: 45, count: 0, image: imageDelete},
        {id:4, name: 'Coffee', price: 70, count: 0, image: imageDelete},
        {id:5, name: 'Tea', price: 50, count: 0, image: imageDelete},
        {id:6, name: 'Cola', price: 40, count: 0, image: imageDelete},
    ]);

    const setParametrsOrder = (index: number) => {
        const orderCopy = { ...order[index] };
        orderCopy.count++;
        orderCopy.price *= 2;
        const orderCopyElements = [...order];
        orderCopyElements[index] = orderCopy;
        setOrder(orderCopyElements);
    };


    return (
    <>
        <div className="main-box">
            <div className="item-order">
                <span>Order Details</span>
                <div className="orders-empty-menu">
                    <span className="text-order">Order is empty!</span>
                    <span className="text-order">Please add some items.</span>
                </div>

                {order.map((order, index) => (
                    <Orders key={index}
                    id={order.id}
                    name={order.name}
                    price={order.price}
                    count={order.count}
                    image={order.image}/>
                ))}


                <div className="price-item">
                    <span className="order-total-pirce">Total price: </span>
                </div>
            </div>

            <div className="add-items">
                <span>Add items</span>
                <div className="buttons-container">
                    <div className="column">
                        {FOOD.slice(0, 3).map((food, index) => (
                            <Buttons
                                key={index}
                                id={food.id}
                                name={food.name}
                                price={food.price}
                                image={food.image}
                            />
                        ))}
                    </div>
                    <div className="column">
                        {FOOD.slice(3, 6).map((food, index) => (
                            <Buttons
                                key={index}
                                id={food.id}
                                name={food.name}
                                price={food.price}
                                image={food.image}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>

    </>
  );
}

export default App;
