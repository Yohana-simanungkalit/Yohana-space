import { Switch } from "antd";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ThemeSwitch() {
    const { theme, onChange } = useContext(ThemeContext);
    return (
        <>
            <Switch checked={theme === "light"} onChange={onChange} />
            {theme === "light" ? "Dark Theme" : "Light Theme"}
        </>
    )
}