import { createContext, useState, useEffect } from "react";

export const themes = {
    light: {
        foreground: '#242526',
        background: '#fff',
        button: '#242526',
    },
    dark: {
        foreground: '#fff',
        background: '#242526',
        button: '#fff',
    },
}

export const ThemeContext = createContext({
    theme: {},
    toggleTheme: () => { },
});

export const ThemeProvider = (props) => {
    const [theme, setTheme] = useState(themes.light);

    useEffect(() => {
        document.body.style.background = theme.background;
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevValue) =>
            prevValue === themes.dark ? themes.light : themes.dark
        );
    };
    return (
        <ThemeContext.Provider value={{ theme: theme, toggleTheme: toggleTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
};
