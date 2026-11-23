import { useState } from "react";
import { TodoContext } from "./TodoContext";

export function TodoProvider({ children }) {
    const [todos, setTodos] = useState([]);

    function addTodo(text) {
        const cleanText = text.trim();
        const capitalized = cleanText.charAt(0).toUpperCase() + cleanText.slice(1);
        const newTodo = { id: Date.now(), text: capitalized, done: false};
        setTodos([...todos, newTodo]);
    }

    function toggleTodo(id) {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, done: !todo.done } : todo)
        );
    }

    function removeTodo(id) {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    return (
        <TodoContext.Provider
            value={{ todos, addTodo, toggleTodo, removeTodo}}
        >
            {children}
        </TodoContext.Provider>
    );
}