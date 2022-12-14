import Banner from "./Banner";
import logo from "../assets/logo.svg";
import Cart from "./Cart";
import Footer from "./Footer";
import ShoppingList from "./ShoppingList";
import "../styles/Layout.css";
import { useEffect, useState } from "react";
import Recommendation from "./Recommendation";

function App() {
    const savedCart = localStorage.getItem("cart");
    const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : []);
    const [isFooterShown, updateIsFooterShown] = useState(false);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
        //console.log(JSON.stringify(cart))
    }, [cart]);

    return (
        <div className="App">
            <Banner>
                <img src={logo} alt="La maison jungle" className="lmj-logo" />
                <h1 className="lmj-title">La maison jungle</h1>
                <Recommendation />
            </Banner>
            <div className="lmj-layout-inner">
                <Cart cart={cart} updateCart={updateCart} />
                <ShoppingList cart={cart} updateCart={updateCart} />
            </div>
            <button onClick={() => updateIsFooterShown(!isFooterShown)}>
                {isFooterShown ? "Cacher le Footer !" : "Montrer le Footer !"}
            </button>
            {isFooterShown && <Footer cart={cart} />}
        </div>
    );
}

export default App;
