import { createContext, useState } from "react";

export const TraitContext = createContext();

// eslint-disable-next-line react/prop-types
export const TraitProvider = ({ children }) => {
  const [allTraits, setAllTraits] = useState([]);

  return (
    <TraitContext.Provider
      value={{
        allTraits,
        setAllTraits,
      }}>
      {children}
    </TraitContext.Provider>
  );
};
