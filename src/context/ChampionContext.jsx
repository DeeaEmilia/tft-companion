/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import championsData from "../data/champions";

export const ChampionContext = createContext();

export const ChampionProvider = ({ children }) => {
  const [champions, setChampions] = useState([]);

  // Load champions data into state when the component mounts
  useEffect(() => {
    setChampions(
      championsData.map((champion, index) => ({
        ...champion,
        position: null,
        id: index,
      }))
    );
  }, []);

  return (
    <ChampionContext.Provider value={{ champions, setChampions }}>
      {children}
    </ChampionContext.Provider>
  );
};
