import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export function TodoList() {
    const { todos, toggleTodo, removeTodo } = useContext(TodoContext);

    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <input
                        type="checkbox"
                        checked={todo.done}
                        onChange={() => toggleTodo(todo.id)}
                    />
                    {todo.text}
                    <button onClick={() => removeTodo(todo.id)}>X</button>
                    
                </li>
            ))}
        </ul>
    );
}