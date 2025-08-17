import { createContext } from "react";
import TodoItems from "../components/TodoItems";

export const TodoItemsContext = createContext({
    todoItems: [],
    addNewItem: () => {},
    deleteItem: () => {},
});