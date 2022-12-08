 import '../styles/Categories.css'

function Categories({categories, selectedCategorie, updateShoppingList}){  
      
    function handleSelect(e) {
		updateShoppingList(e.target.value)  
	}

    return (
        <div className='lmj-categories'>
            Categories&nbsp;<select value={selectedCategorie} onChange={handleSelect} className='lmj-categories-select'>
                <option value=' '>-----</option>
                {categories.map((cat) => (
                    <option key={cat} value={cat} >{cat}</option>
                ))}
            </select>
            <button onClick={() => updateShoppingList(' ')}>Réinitialiser</button>
        </div> 
    ) 
}
export default Categories