import { createContext, Dispatch } from "react";

interface ThemeContextType {
  isLightMode: boolean;
  setIsLightMode: Dispatch<React.SetStateAction<boolean>>;
}

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

export default ThemeContext;
