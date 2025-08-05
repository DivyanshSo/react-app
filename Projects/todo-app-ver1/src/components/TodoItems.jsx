import TodoItem from "./TodoItem"; 
import styles from "./TodoItems.module.css";

const TodoItems = ({todoItems, onDeleteClick}) => {
    return ( 
        <div className={styles.itemsContainer}>
            {todoItems.map((item, index) => (<TodoItem key = {index} todoDate = {item.todoDate} todoName = {item.todoName} onDeleteClick = {onDeleteClick}></TodoItem>))}
            {/* The above line maps through the todoItems array and renders a TodoItem for each item */}
        </div>
    );
    
};

export default TodoItems;