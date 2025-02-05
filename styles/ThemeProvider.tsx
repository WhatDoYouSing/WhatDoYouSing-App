import React, { createContext, useContext } from "react";
import colors from "./colors";
import globalStyles from "./globalStyles";

// ThemeContext가 colors와 globalStyles 둘 다 포함하도록 설정
const ThemeContext = createContext({
  colors,
  globalStyles,
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => (
  <ThemeContext.Provider value={{ colors, globalStyles }}>
    {children}
  </ThemeContext.Provider>
);

export const useTheme = () => useContext(ThemeContext);
