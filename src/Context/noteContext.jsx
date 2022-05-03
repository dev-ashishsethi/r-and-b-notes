import { createContext, useContext, useState } from "react";
import { useRef } from "react";
import { useReducer } from "react";
import { NoteAction } from "../Func/NoteAction";

const NoteContext = createContext();

export function NoteProvider({ children }) {
  const [isEditable, setIsEditable] = useState(false);
  const [isCardColor, setCardColor] = useState(false);
  const [alllabel, setAllLabel] = useState([]);
  const [trashData, setTrashData] = useState([]);
  const [othersData, setOthersData] = useState([]);
  const date = new Date();
  const dateToday = new Date()
    .toLocaleString("en-In", "Asia/Kolkata")
    .split(",")[0];
  const [note, dispatch] = useReducer(NoteAction, {
    title: "",
    content: "",
    pinned: false,
    label: [],
    date: dateToday,
    priority: "Low",
    color: "white",
    isCardColor: false,
    singleColor: "white",
  });
  const btnRef = useRef();
  return (
    <NoteContext.Provider
      value={{
        note,
        isEditable,
        btnRef,
        alllabel,
        setAllLabel,
        dispatch,
        isCardColor,
        setCardColor,
        setIsEditable,
        othersData,
        setOthersData,
        trashData,
        setTrashData,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
}

export const useNote = () => useContext(NoteContext);
