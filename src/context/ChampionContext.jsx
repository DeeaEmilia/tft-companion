/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import championsData from "../data/champions";

// This context can be used by other components to access and update the champions state
export const ChampionContext = createContext();

export const ChampionProvider = ({ children }) => {
  // Inside the ChampionProvider, a state variable champions is created with its setter function setChampions. This state variable is initialized as an empty array.
  const [champions, setChampions] = useState([]);

  // The useEffect hook is used to set the initial state of champions when the component mounts. The state is set to a new array of champion data, each with an added position field (initialized to null) and an id field (which is their index in the array).
  useEffect(() => {
    setChampions(
      championsData.map((champion, index) => ({
        ...champion,
        position: null,
        id: index,
      }))
    );
  }, []);

  // The ChampionProvider component returns a ChampionContext.Provider that wraps its children. This provider is given a value prop, which is an object containing the champions state and its setter function setChampions. This value will be accessible to all children components that consume the ChampionContext.
  return (
    <ChampionContext.Provider value={{ champions, setChampions }}>
      {children}
    </ChampionContext.Provider>
  );
};
