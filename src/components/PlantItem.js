import CareScale from "./CareScale";
import "../styles/PlantItem.css";

function handleClick(plantName) {
    alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`);
}

function PlantItem({ cover, name, water, light, price, cart, updateCart }) {
    function addToCart(name, price) {
        const currentPlantSaved = cart.find((plant) => plant.name === name);
        if (currentPlantSaved) {
            const cartFilteredCurrentPlant = cart.filter(
                (plant) => plant.name !== name
            );
            updateCart([
                ...cartFilteredCurrentPlant,
                { name, price, amount: currentPlantSaved.amount + 1 },
            ]);
        } else {
            updateCart([...cart, { name, price, amount: 1 }]);
        }
    }
    return (
        <li className="lmj-plant-item" onClick={() => handleClick}>
            <img
                className="lmj-plant-item-cover"
                src={cover}
                alt={`${name} cover`}
            />
            <div className="lmj-plant-item-info">
                {name} | {price}€
                <button onClick={() => addToCart(name, price)}>Ajouter</button>
            </div>

            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    // alignItem: "space-between",
                    // alignItems: "flex-start",
                    gap: "50px",
                }}
            >
                <CareScale careType="water" scaleValue={water} />
                <CareScale careType="light" scaleValue={light} />
            </div>
        </li>
    );
}

export default PlantItem;
