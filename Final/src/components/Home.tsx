import { ThemeContext } from "../context/ThemeCOntext";
import { useContext } from "react";

export const HomePage = (style) => {
    const context = useContext(ThemeContext);
    const theme = context?.theme || themes.light;
    return (
        <div className="App">
            <h1 style={{ color: theme.foreground }}>Welcome to Guitar Central!!!</h1>
            <h2 className="homeImg"style={{ color: theme.foreground }}>Home to the best collection of guitars</h2>
            <img className="homeImg" src="https://www.azutura.com/media/catalog/product/cache/52/image/650x/040ec09b1e35df139433887a97daa66f/W/S/WS-42603_WP.jpg"></img>
        </div>
    );
};