import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

export function AddTodo() {
    const { addTodo } = useContext(TodoContext);
    const [text, setText] = useState("");

    function handleAdd() {
        if (text.trim() === "") return;
        addTodo(text);
        setText("");
    }

    return (
        <div>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Skriv inn en todo"
            />
            <button onClick={handleAdd}>Legg til</button>
        </div>
    );
}