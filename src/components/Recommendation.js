function recommendation(){
    const currentMonth  = new Date().getMonth()
    const isSpring = currentMonth >= 2 && currentMonth <= 5

    if(!isSpring){
        return (<div className='lmj-recommendation'><br/><br/>C'est le printemps, rempotez  🍆 </div>)
    }
    return (<div className='lmj-recommendation'><br/><br/>Ce n'est pas le moment de rempoter 🌻 </div>) 
}

export default recommendation