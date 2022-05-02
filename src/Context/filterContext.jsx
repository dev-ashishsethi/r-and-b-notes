import { createContext, useReducer, useContext } from "react";
import { filterAction } from "../Func/filterAction";

const FilterContext = createContext();

export function FilterProvider({ children }) {
  const [filter, filterDispatch] = useReducer(filterAction, {
    sortByDate: "",
    priorityFilter: "",
    labelFilter: [],
  });
  return (
    <FilterContext.Provider value={{ filter, filterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
}

const useFilter = () => useContext(FilterContext);

export { useFilter };
