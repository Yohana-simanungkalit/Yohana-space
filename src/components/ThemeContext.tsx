import { createContext, useEffect, useState } from "react"

type themeContextTpe = {
    theme: string,
    onChange: () => void,
}

export const ThemeContext = createContext<themeContextTpe>({
    theme: "light",
    onChange: () => { }
});

export default function ThemeProvider({ children }: any) {
    const [theme, setTheme] = useState("");

    useEffect(() => {
        localStorage.setItem("theme", "light");
    }, [])

    const onChange = () => {
        const savedTheme = localStorage.getItem("theme");
        const newTheme = savedTheme === "light" ? "dark" : "light";
        if (savedTheme) {
            setTheme(newTheme);
        }

        localStorage.setItem("theme", newTheme);
    }

    return (
        <ThemeContext.Provider value={{ theme, onChange }}>
            {children}
        </ThemeContext.Provider>
    )
};