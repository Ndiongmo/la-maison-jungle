import { useState } from 'react'
  
function QuestionForm(){ 
    const [inputValue, setInputValue] = useState('')
    return(
        <div>
            <input type='text' value={inputValue} onChange={ (e) => checkValue(e.target.value, setInputValue)} onBlur={ (e) => checkEmail(e.target.value) } />
            &nbsp;<button onClick={() => alert(inputValue)} >Envoyer ✉</button>
        </div>
    )
}

function checkValue(value, setInputValue){ 
        setInputValue(value) 
}

function checkEmail(value){
    if(!value.includes('@')){
        alert(`Attention, il n'y a pas d'@, ceci n'est pas une adresse valide`)
    }
}

export default QuestionForm