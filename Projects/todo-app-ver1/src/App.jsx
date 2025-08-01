import Addtodo from "./components/AddTodo";
import Appname from "./components/AppName";
import './App.css';
import TodoItems from "./components/TodoItems";

function App() {

  const todoItems = [{name: 'Buy Groceries', date: '20/07/2025'},
     {name: 'Complete Project', date: '22/07/2025'},
    {name: 'like this project}',date: '23/07/2025'}];
  return (
    <center className="todo-container">
      <Appname/>
      <Addtodo/>
      <div className = 'items-container'>
        <TodoItems todoItems = {todoItems}></TodoItems>
      </div>
    </center>
  );
}
export default App;
