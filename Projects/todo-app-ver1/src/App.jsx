import Addtodo from "./components/AddTodo";
import Appname from "./components/AppName";
import WelcomeMessage from "./components/WelcomeMessage";
import './App.css';
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import { TodoItemsContext } from "./store/todoitems-store";

function App() {

  // const initialtodoItems = [{name: 'Buy Groceries', date: '20/07/2025'},
  //     {name: 'Complete Project', date: '22/07/2025'},
  //     {name: 'like this project}',date: '23/07/2025'},];

  const [todoItems, setTodoItems] = useState([]);
  
  const addNewItem = (itemName, itemDate) => {
    setTodoItems((currValue) => {
      const newTodoItems = [
        ...newTodoItems, 
        {todoName: itemName, todoDate: itemDate}];
      return newTodoItems;
    });

    setTodoItems((currValue) => [
      ...currValue,
      {todoName: itemName, todoDate: itemDate},

    ]);
  };

  const deleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter(item => item.todoName !== todoItemName);
    setTodoItems(newTodoItems);
    console.log(`Item deleted: ${todoItemName}`);
  };


  const defaultTodoItems = [{ name: 'Buy Groceries', date: 'Today'}];

  return (
    <TodoItemsContext.Provider 
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      <center className="todo-container">
        <Appname/>
        <Addtodo/>
        <WelcomeMessage></WelcomeMessage>
        <TodoItems/>
      </center>
    </TodoItemsContext.Provider>
  );
}
export default App;
