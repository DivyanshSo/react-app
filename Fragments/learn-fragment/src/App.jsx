import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  let foodItems = ['Dal', 'Green Vegetable', 'Roti', 'Salad', 'Milk','Eggs'];

  return (
    <React.Fragment> 
      <h1>List of Healthy Foods</h1>
      <ul className="list-group">
        {foodItems.map((item) => (
            <li key={item} className="list-group-item">{item}</li>
          ))}
      </ul>
    </React.Fragment>
  );
}
export default App;
