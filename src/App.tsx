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
        {id:1, name: 'Hamburger', price: 0, count: 0, image: imageDelete},
        {id:2, name: 'Cheeseburger', price: 0, count: 0, image: imageDelete},
        {id:3, name: 'Fries', price: 0, count: 0, image: imageDelete},
        {id:4, name: 'Coffee', price: 0, count: 0, image: imageDelete},
        {id:5, name: 'Tea', price: 0, count: 0, image: imageDelete},
        {id:6, name: 'Cola', price: 0, count: 0, image: imageDelete},
    ]);

    const setParametrsOrder = (index: number) => {
        const orderCopy = [...order];
        orderCopy[index].count++;
        const foodItem = FOOD.find((item) => item.id === orderCopy[index].id);
        if (foodItem) {
            orderCopy[index].price += foodItem.price;
        }
        setOrder(orderCopy);
    };

  const total = order.reduce ((acc, currentPrice) => {
      return acc + currentPrice.price;
  }, 0);

    const setRemoveParametr = (index: number) => {
        const orderCopyRemove = [...order];
        orderCopyRemove[index].count--;
        const removeItem = FOOD.find((item) => item.id === orderCopyRemove[index].id);
        if (removeItem) {
            orderCopyRemove[index].price -= removeItem.price;
        }
        setOrder(orderCopyRemove);
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
                    <Orders
                        key={index}
                        id={order.id}
                        name={order.name}
                        price={order.price}
                        count={order.count}
                        image={order.image}
                        onClickDelete={() => setRemoveParametr(index)}
                    />
                ))}
                <div className="price-item">
                    <span className="order-total-pirce">Total price: {total}</span>
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
                                onClick={() => {setParametrsOrder(index);}}
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
                                onClick={() => {setParametrsOrder(index + 3);}}
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
