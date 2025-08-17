import { useContext } from "react";
import { IoAddSharp } from "react-icons/io5";
import { useState } from "react";
import { TodoItemsContext } from "../store/todoitems-store";


function Addtodo() {
    const {addNewItem} = useContext(TodoItemsContext);
    const [todoName, setTodoName] = useState("");
    const [todoDate, setTodoDate] = useState("");


    const handleNameChange = (event) => {
        setTodoName(event.target.value);
    }

    const handleDateChange = (event) => {
        setTodoDate(event.target.value);
    };

    const handleAddButton = (event) => {
        event.preventDefault();
        addNewItem(todoName, todoDate);
        setTodoName("");
        setTodoDate("");
    }
    return (
        <div className ="container text-center">
            <form className ="row kg-row">
                <div className ="col-6">
                    <input ref = {todoNameElement} type="text" placeholder="Enter tasks here"/>
                </div>
                <div className ="col-4">
                    <input ref = {todoDateElement} type="date"/>
                </div>
                <div className ="col-2">
                    <button type="submit" className ="btn btn-primary kg-btn">Add<IoAddSharp/></button>
                </div>
            </form>
        </div>
    );
}
export default Addtodo;