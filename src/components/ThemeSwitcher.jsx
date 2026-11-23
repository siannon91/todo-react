import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export function ThemeSwitcher() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div>
            <p>Gjeldende tema: {theme}</p>
            <button onClick={toggleTheme}>Bytt tema</button>
        </div>
    );
}