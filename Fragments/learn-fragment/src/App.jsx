import React, { useState } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";


function App() {

   //let foodItems = ['Sabzi', 'Green Vegetable', 'Roti', 'Salad', 'Milk','Eggs'];
   let [foodItems, setFoodItems] = useState([]);

   const onKeyDown = (event) => {
    if (event.key === 'Enter'){
      let newFoodItem = event.target.value;
      event.target.value = ''; // Clear the input field after adding the item
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
    }
   };

  return (
    <React.Fragment>
      <Container>
        <h1 className="food-heading">List of Healthy Foods</h1>
        <FoodInput handleKeyDown = {onKeyDown}></FoodInput>
        <ErrorMessage items = {foodItems}></ErrorMessage>   
        <FoodItems items = {foodItems}></FoodItems>
      </Container>
    </React.Fragment>
  );
}
export default App;
