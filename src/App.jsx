import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { ThemeSwitcher } from "./components/ThemeSwitcher";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme}>
      <ThemeSwitcher />
    </div>
  );
}

export default App;