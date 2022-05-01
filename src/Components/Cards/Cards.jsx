import axios from "axios";
import { useState } from "react";
import { useAuth } from "../../Context/loginContext";
import { useNote } from "../../Context/noteContext";
import * as All from "../../icons/icons";
export function Card({ data, cardColor, counter }) {
  const {
    note,
    setNote,
    pinned,
    setPinned,
    isEditable,
    setIsEditable,
    btnRef,
    alllabel,
    setAllLabel,
    dispatch,
    othersData,
    setOthersData,
    pinnedData,
    setPinnedData,
    isCardColor,
  } = useNote();
  const token = localStorage.getItem("login");
  const [edit, setEdit] = useState(false);

  const colorHandler = (newColor, noteId) => {
    note.isCardColor = true;
    note.singleColor = newColor;
    note.color = "white";
    (async () => {
      const response = await axios({
        method: "POST",
        url: `/api/notes/${noteId}`,
        data: { note: note },
        headers: { authorization: token },
      });
      setOthersData(
        response.data.notes.filter((note) => note.pinned === false)
      );
      console.log("cards", response.data.notes);
    })();

    console.log("in color handler");
    // setIsEditable(true);
  };
  const archiveHandler = () => {};
  const trashHandler = () => {};

  const editHandler = () => {
    btnRef.current.focus();
    console.log("edit handler");

    dispatch({ type: "EDIT", editData: data });
    setIsEditable(true);
  };

  return (
    <div className={`card card-align-item-start ${data.singleColor}`}>
      <h4 className={`title ${data.singleColor}`}>{data.title}</h4>

      <p className={`description ${data.singleColor}`}>{data.content}</p>

      <div className="custom-hr"></div>
      <div className="priority">
        Priority Level:{" "}
        <p className={`priority-chip label-chip ${data.singleColor}`}>
          {data.priority}
        </p>
      </div>
      <div className="date-and-label">
        <p className={`date ${data.singleColor}`}>{data.date}</p>
        {data.label.length > 0 &&
          data.label.map((label) => (
            <p className={`label-chip ${data.singleColor}`} key={label}>
              {label}
            </p>
          ))}
      </div>
      <div className={`icons-section ${data.singleColor}`}>
        <form action="" className="color-pallete-icon-on-card">
          <input
            className="color-icon-on-card icon-note inside-form"
            type="checkbox"
            id={`coloricons${counter}`}
          />
          <label
            htmlFor={`coloricons${counter}`}
            className="color-icon-label-on-card"
          >
            <All.IcBaselineColorLens className="icon-note icon-add-notes" />
          </label>
          <div className="color-pallete-on-card">
            <div
              className="colors-on-card blue"
              onFocus={() => colorHandler("blue", data._id)}
              tabIndex="0"
            ></div>
            <div
              className="colors-on-card red"
              onFocus={() => colorHandler("red", data._id)}
              tabIndex="0"
            ></div>
            <div
              className="colors-on-card violet"
              onFocus={() => colorHandler("violet", data._id)}
              tabIndex="0"
            ></div>
            <div
              className="colors-on-card yellow"
              onFocus={() => colorHandler("yellow", data._id)}
              tabIndex="0"
            ></div>
          </div>
        </form>
        <All.BiArchiveFill className="icon-note" onClick={archiveHandler} />
        <All.ClarityTrashSolid className="icon-note" onClick={trashHandler} />
        <All.IcBaselineEdit
          className="icon-note"
          onClick={() => editHandler(data._id)}
        />
      </div>
    </div>
  );
}
