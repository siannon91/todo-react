import { useState, useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";

function App() {
  const { theme } = useContext(ThemeContext);
  const [showPanel, setShowPanel] = useState(true);

  return (
    <div className={theme}>
      <div className="dock">
        <div className="topbar">
          <ThemeSwitcher />
          <button onClick={() => setShowPanel(!showPanel)}>
            {showPanel ? "Skjul liste" : "Vis liste"}
          </button>
        </div>
        {showPanel && (
          <div className="panel">
            <AddTodo />
            <TodoList />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;