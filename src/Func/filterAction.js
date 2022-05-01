export function filterAction(state, action) {
  switch (action.type) {
    case "SORT":
      if (action.payload === "latest") {
        return {
          ...state,
          sortByDate: "latest",
        };
      } else {
        return {
          ...state,
          sortByDate: "oldest",
        };
      }

    case "PRIORITY_HIGH":
      return {
        ...state,
        priorityFilter: "High",
      };

    case "PRIORITY_MED":
      return {
        ...state,
        priorityFilter: "Medium",
      };
    case "PRIORITY_LOW":
      return {
        ...state,
        priorityFilter: "Low",
      };
    case "LABEL":
      return {
        ...state,
        labelFilter: [...state.labelFilter].includes(action.payload)
          ? [...state.labelFilter].filter((label) => label !== action.payload)
          : [...state.labelFilter].concat(action.payload),
      };
    case "LABEL_SELECT_ALL":
      return {
        ...state,
        labelFilter: [],
      };
    case "CLEAR":
      return {
        sortByDate: "",
        priorityFilter: "",
        labelFilter: [],
      };
    default:
      break;
  }
}
