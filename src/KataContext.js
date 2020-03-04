import React, { createContext, useContext } from "react";

const KataContext = createContext();
const useKataContext = () => useContext(KataContext);

export const KataProvider = ({ kata, children }) => {
  return (
    <KataContext.Provider value={{ kata }}>{children}</KataContext.Provider>
  );
};

export const useKata = () => {
  const { kata } = useKataContext();

  return kata;
};
