import TodoItem from "./TodoItem"; 
import styles from "./TodoItems.module.css";

const TodoItems = ({todoItems}) => {
    return ( 
        <div className={styles.itemsContainer}>
            {todoItems.map(item => <TodoItem todoDate = {item.dueDate} todoName = {item.name}></TodoItem>)}
            {/* The above line maps through the todoItems array and renders a TodoItem for each item */}
        </div>
    );
    
};

export default TodoItems;