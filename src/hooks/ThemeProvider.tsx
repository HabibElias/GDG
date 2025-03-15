import { ReactNode, useState } from "react";
import ThemeContext from "./ThemeContext";

interface Props {
  children: ReactNode;
}

const ThemeProvider = ({ children }: Props) => {
  const [isLightMode, setIsLightMode] = useState(true);

  return (
    <ThemeContext.Provider value={{ isLightMode, setIsLightMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
