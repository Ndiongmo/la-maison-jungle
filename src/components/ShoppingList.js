import { plantList } from "../datas/plantList";
import PlantItem from "./PlantItem";
import "../styles/ShoppingList.css";
import Categories from "./Categories";
import { useState } from "react";

function ShoppingList({ cart, updateCart }) {
    const categories = plantList.reduce(
        (acc, plant) =>
            acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    );

    const [selectedCategorie, updateShoppingList] = useState(" ");

    return (
        <div className="lmj-shopping-list">
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Categories
                    categories={categories}
                    selectedCategorie={selectedCategorie}
                    updateShoppingList={updateShoppingList}
                />
            </div>
            <ul className="lmj-plant-list">
                {plantList
                    .filter((plant) =>
                        selectedCategorie !== " "
                            ? plant.category === selectedCategorie
                            : plant
                    )
                    .map(({ id, cover, name, water, light, price }) => (
                        // <li key={id}>
                        <PlantItem
                            cover={cover}
                            name={name}
                            water={water}
                            light={light}
                            price={price}
                            cart={cart}
                            updateCart={updateCart}
                        />
                        // </li>
                    ))}
            </ul>
        </div>
    );
}

export default ShoppingList;
