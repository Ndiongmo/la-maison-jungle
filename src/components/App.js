import Banner from './Banner'
import logo from '../assets/logo.svg'
import Cart from './Cart'
import Footer from './Footer'
import ShoppingList from './ShoppingList'
import '../styles/Layout.css'
import { useState } from 'react'

function App() {
	const [cart, updateCart] = useState([])
	
	return (
		<div>
			<Banner>
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
			</Banner>
			<div className='lmj-layout-inner'>
				<Cart />
				<ShoppingList />
			</div> 
			<Footer />
		</div>
	)
}

export default App