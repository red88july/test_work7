import Buttons from './Buttons/Buttons';
import {Food} from "./types";
import imageCup from './assets/cup.png';
import imageForkKnife from './assets/forkKnife.png';
import './App.css';


function App() {

    const FOOD: Food[] = [
        {id:1, name: 'Hamburger', price: 80, image:  imageForkKnife},
        {id:2, name: 'Cheeseburger', price: 90, image:  imageForkKnife},
        {id:3, name: 'Fries', price: 45, image:  imageForkKnife},
        {id:4, name: 'Coffee', price: 70, image:  imageCup},
        {id:5, name: 'Tea', price: 50, image:  imageCup},
        {id:6, name: 'Cola', price: 40, image:  imageCup},
    ];

  return (
    <>
        <div className="main-box">
            <div className="item-order">
                <span>Order Details</span>

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
