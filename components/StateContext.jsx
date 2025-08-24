"use client";

import { createContext, useState } from "react";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return <StateContext.Provider value={{ isLoggedIn }}>{children}</StateContext.Provider>;
};

export default StateContext;
