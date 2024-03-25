import "./App.css";
import React, { useState } from 'react'

function App(){
  const [listValue, setList] = useState("")
  const [items, setItem] = useState([])
  function addItem(){
    setItem(prevItems => {
      return [...prevItems, listValue]
  })

}
  const listChange =(event)=>{
    const newValue = event.target.value
    setList(newValue)
  }

  return(
    <div className="container">
      <h1>To - do List</h1>
      <input
      type="text"
      value={listValue} 
      onChange={listChange}
      />
      <button onClick={addItem}> Add</button>
      <div> 
        <ul>{items.map(todoItem =><li>{todoItem}</li>)}</ul>
        </div>
    </div>

  )
}


export default App;
