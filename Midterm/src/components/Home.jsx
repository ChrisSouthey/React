import { ThemeContext } from "../context/ThemeCOntext";
import { useContext } from "react";

export const HomePage = (style) => {
    const context = useContext(ThemeContext);
    const theme = context?.theme || themes.light;
    return (
        <div className="App">
            <h1 style={{ color: theme.foreground }}>Welcome to my super cool store!!!</h1>
        </div>
    );
};