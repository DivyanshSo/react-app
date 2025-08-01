import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";


function App() {

   let foodItems = ['Sabzi', 'Green Vegetable', 'Roti', 'Salad', 'Milk','Eggs'];
  // let foodItems = [];
  
  /*Conditional rendering:- ...
  logical(emptyMessage), ternary operators... 
  let emptyMessage =  ?  : null  */

  
  /* usage of if-else statement
  if(foodItems.length === 0) {
    return <h3>I am still hungry.</h3>
  }
    */
  return (
    <React.Fragment>
      <Container>
        <h1 className="food-heading">List of Healthy Foods</h1>

        <ErrorMessage items = {foodItems}></ErrorMessage>   
        <FoodItems items = {foodItems}></FoodItems>
      </Container>
      <Container>
        <h2 className="food-heading">List of Unhealthy Foods</h2>
        <FoodItems items = {['Chips', 'Soda', 'Candy', 'Fast Food']}></FoodItems>
        
      </Container>
      <Container>
          <p>
            Above is the list of healthy and unhealthy foods, that you can consume in your daily diet.
          </p>
        </Container>
    </React.Fragment>
  );
}
export default App;
