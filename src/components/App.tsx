// Components
import { useState } from "react";
import Home from "./pages/Home";

type ThemeType = "dark" | "light";

const App = () => {
  const [theme, setTheme] = useState<ThemeType>("dark");

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className={theme}>
      <Home handleTheme={handleTheme} />
    </div>
  );
};

export default App;
