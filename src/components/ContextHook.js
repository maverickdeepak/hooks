import React, { useState } from "react";
import FunctionalContextComp from "./FunctionalContextComp";

export const ThemeContext = React.createContext();

const ContextHook = () => {
  const [darkTheme, setDarkTheme] = useState(true);
  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }
  return (
    <ThemeContext.Provider value={darkTheme}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <FunctionalContextComp />
    </ThemeContext.Provider>
  );
};

export default ContextHook;
