import React, { useState } from "react";

function App() {
  //creating a state for the input to save and track inputs
  const [inputItem, setInputItem] = useState("");
  //state that will keep track of added items and add them to array
  const [items, setItems] = useState([]);

  //Method to handle changes in the input
  function handleItem(event) {
    const newValue = event.target.value;

    setInputItem(newValue);
  }

  //method to handle array of todos after the add button is clicked
  function addItem() {
    setItems((prevItems) => {
      //the previous items wont change only the new value of the input Item will be added
      //the map function below will loop thru array and display to the screen the todos
      return [...prevItems, inputItem];
    });
    //After adding an item with the add button you will want the field to be cleared 
    setInputItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          onChange={handleItem}
          type="text"
          // cuz we have only one input we don't need a name attribute to specify the input field
          value={inputItem}
        />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {/*we shall use map function to return items from an array as li  */}
          {items.map((todoitem) => (
            <li>{todoitem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
