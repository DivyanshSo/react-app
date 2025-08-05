import { useState } from "react";

function Addtodo({onNewItem}) {

    const [todoName, setTodoName] = useState('');
    const [todoDate, setTodoDate] = useState('');

    const handleNameChange = (event) => {
        setTodoName(event.target.value);
    };
    
    const handleDateChange = (event) => {
        setTodoDate(event.target.value);

    };

    const handleAddButton = () => {
        onNewItem(todoName, todoDate);
        setTodoDate('');
        setTodoName('');
    }
    return (
        <div className ="container text-center">
            <div className ="row kg-row">
                <div className ="col-6">
                    <input type="text" placeholder="Enter tasks here" onChange={handleNameChange} value={todoName}/>
                </div>
                <div className ="col-4">
                    <input type="date" onChange={handleDateChange} value={todoDate}/>
                </div>
                <div className ="col-2">
                    <button type="button" className ="btn btn-primary kg-btn" onClick={handleAddButton} >Add</button>
                </div>
            </div>
        </div>
    );
}
export default Addtodo;