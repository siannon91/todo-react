import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export function ThemeSwitcher() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div>
            <p>Gjeldende tema: {theme}</p>
            <div className="switch-row">
                <span>Bytt tema</span>
                <button 
                    className="switch"
                    role="switch"
                    aria-checked={theme === "dark"}
                    aria-label="Bytt tema"
                    onClick={toggleTheme}
                >
                    <span className="knob">{theme === "light" ? "☀️" : "🌙"}</span>
                </button>
            </div>
        </div>
    );
}