import Addtodo from "./components/AddTodo";
import Appname from "./components/AppName";
import WelcomeMessage from "./components/WelcomeMessage";
import './App.css';
import TodoItems from "./components/TodoItems";
import { useState } from "react";

function App() {

  // const initialtodoItems = [{name: 'Buy Groceries', date: '20/07/2025'},
  //     {name: 'Complete Project', date: '22/07/2025'},
  //     {name: 'like this project}',date: '23/07/2025'},];

  const [todoItems, setTodoItems] = useState([]);
  
  const handleNewItem = (itemName, itemDate) => {
    console.log(`New item added: ${itemName} Date: ${itemDate}`);
    const newTodoItems = [...todoItems, {todoName: itemName, todoDate: itemDate}];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter(item => item.todoName !== todoItemName);
    setTodoItems(newTodoItems);
    console.log(`Item deleted: ${todoItemName}`);
  };

  return (
    <center className="todo-container">
      <Appname/>
      <Addtodo onNewItem = {handleNewItem}/>
      {todoItems.length === 0 && <WelcomeMessage/>}
      <TodoItems todoItems = {todoItems} onDeleteClick = {handleDeleteItem}/>
    </center>
  );
}
export default App;
