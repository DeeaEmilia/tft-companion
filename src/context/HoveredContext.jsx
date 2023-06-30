import { createContext, useState } from "react";

export const HoveredContext = createContext();

// eslint-disable-next-line react/prop-types
export const HoveredProvider = ({ children }) => {
  const [hoveredChampion, setHoveredChampion] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <HoveredContext.Provider
      value={{
        hoveredChampion,
        setHoveredChampion,
        hoveredItem,
        setHoveredItem,
      }}>
      {children}
    </HoveredContext.Provider>
  );
};
