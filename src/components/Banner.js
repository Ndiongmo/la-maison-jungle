import '../styles/Banner.css'
import Recommendation from './Recommendation'

function Banner({children}) {
	const title = 'La maison jungle'
	return (
		<div className='lmj-banner'> 
			{children} 
			<Recommendation />
		</div>
	)
}

export default Banner
