import TodoItem from "./TodoItem"; 
import styles from "./TodoItems.module.css";
import { TodoItemsContext } from "../store/todoitems-store";
import { useContext } from "react";

const TodoItems = () => {

    const {todoItems} = useContext(TodoItemsContext);
    return ( 
        <div className={styles.itemsContainer}>
            {todoItems.map((item, index) => (<TodoItem key = {index} todoDate = {item.todoDate} todoName = {item.todoName} ></TodoItem>))}
            {/* The above line maps through the todoItems array and renders a TodoItem for each item */}
        </div>
    );
    
};

export default TodoItems;