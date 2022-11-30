import { useState } from 'react'
import '../styles/Cart.css'

function Cart() {
	const monsteraPrice = 8
	const initCart = 0
	const [cart, updateCart] = useState(initCart)
	const [isOpen, setIsOpen] = useState(true) 

	return isOpen ? (
		<div className='lmj-cart'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer 🔕 
			</button>
			<h2>Panier</h2>
			<div>Monstera : {monsteraPrice}€</div>
			<button onClick={() => updateCart(cart + 1)}>Ajouter</button>
			<h3>Total : {monsteraPrice * cart}€</h3>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => updateCart(initCart)}
			>
				Vider le Panier 🌂 
			</button>
		</div>
	) : (
		<div className='lmj-cart-closed'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Ouvrir le Panier 🛍 
			</button>
		</div>
	)
} 

export default Cart