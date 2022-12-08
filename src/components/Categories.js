 import { plantList } from '../datas/plantList'

function Categories({SelectedCategorie, updateShoppingList}){  
    const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

    function handleSelect(e) {
		updateShoppingList(e.target.value)  
	}

    return (
        <select onChange={handleSelect}>
            <option value=' '></option>
            {categories.map((cat) => (
                <option key={cat} value={cat} >{cat}</option>
            ))}
        </select>
    ) 
}
export default Categories