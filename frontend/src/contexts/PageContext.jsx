import React, { createContext, useState } from "react";

export const PageContext = createContext({});

export default function PageContextProvider({ children }) {
  const [darkMode, setDarkMode] = useState(true);
  const [currSection, setCurrSection] = useState("about");
  

  return (
    <PageContext.Provider
      value={{ darkMode, setDarkMode, currSection, setCurrSection }}
    >
      {children}
    </PageContext.Provider>
  );
}

