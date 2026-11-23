import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme}>
      <ThemeSwitcher />
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;