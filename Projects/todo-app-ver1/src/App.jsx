import Addtodo from "./components/AddTodo";
import Appname from "./components/AppName";
import Todoitem1 from "./components/TodoItem1";
import Todoitem2 from "./components/TodoItem2";
import './App.css';

function App() {
  return (
    <center className="todo-container">
      <Appname/>
      <Addtodo/>
      <div className = 'items-container'>
        <Todoitem1></Todoitem1>
        <Todoitem2></Todoitem2>
      </div>
    </center>
  );
}
export default App;
