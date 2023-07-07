import { useRouter } from "next/router";
import { useEffect, createContext, useReducer, useState } from "react";

export const TraitContext = createContext();

// Add a reducer for managing the active traits and champions
const traitReducer = (state, action) => {
  switch (action.type) {
    case "ADD_CHAMPION": {
      const newChampions = [...state.champions, action.champion];

      // Calculate newTraits based on the champion being added
      const newTraits = [...state.activeTraits];
      action.champion.traits?.forEach((trait) => {
        const existingTrait = newTraits.find((t) => t.name === trait);
        if (existingTrait) {
          existingTrait.count += 1;
        } else {
          newTraits.push({ name: trait, count: 1 });
        }
      });
      return { activeTraits: newTraits, champions: newChampions };
    }

    case "REMOVE_CHAMPION": {
      // Remove the champion from the champions array
      const newChampions = state.champions.filter(
        (champ) => champ.id !== action.champion.id
      );

      const newTraits = [...state.activeTraits];
      action.champion.traits?.forEach((trait) => {
        const existingTrait = newTraits.find((t) => t.name === trait);
        if (existingTrait) {
          existingTrait.count -= 1;
          if (existingTrait.count === 0) {
            const index = newTraits.indexOf(existingTrait);
            newTraits.splice(index, 1);
          }
        }
      });

      return { activeTraits: newTraits, champions: newChampions };
    }

    case "RESET_ALL": {
      return { activeTraits: [], champions: [] };
    }

    default:
      return state;
  }
};

// eslint-disable-next-line react/prop-types
export const TraitProvider = ({ children }) => {
  const router = useRouter();

  const [allTraits, setAllTraits] = useState([]);
  const [state, dispatch] = useReducer(traitReducer, {
    activeTraits: [],
    champions: [],
  });
  useEffect(() => {
    const handleRouteChange = () => {
      dispatch({ type: "RESET_ALL" });
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events]);

  return (
    <TraitContext.Provider
      value={{
        allTraits,
        setAllTraits,
        activeTraits: state.activeTraits,
        champions: state.champions,
        dispatch,
      }}>
      {children}
    </TraitContext.Provider>
  );
};
