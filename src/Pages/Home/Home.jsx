import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Card } from "../../Components/Cards/Cards";
import { Filter } from "../../Components/Filter/Filter";
import { useFilter } from "../../Context/filterContext";
import { useNote } from "../../Context/noteContext";
import { labelFilter, priority, SortByDate } from "../../Func/filterOps";
import * as All from "../../icons/icons";

export function Home() {
  const {
    note,
    isEditable,
    btnRef,
    alllabel,
    setAllLabel,
    othersData,
    setOthersData,
    pinnedData,
    setPinnedData,
    dispatch,
    setIsEditable,
  } = useNote();
  const { filter, filterDispatch } = useFilter();
  let count = 0;
  const token = localStorage.getItem("login");
  const [notesData, setNotesData] = useState([]);

  const [inputLabel, setInputLabel] = useState("");

  const labelInputHandler = (e) => {
    setInputLabel(e.target.value);
  };
  function titleHandler(e) {
    dispatch({
      type: "INPUT_TITLE",
      title: e.target.value,
    });
  }
  function contentHandler(e) {
    dispatch({
      type: "INPUT_CONTENT",
      content: e.target.value,
    });
  }

  const addNoteHandler = () => {
    if (!isEditable) {
      (async () => {
        console.log("note", note);
        try {
          const response = await axios({
            method: "POST",
            url: `/api/notes`,
            data: { note: note },
            headers: { authorization: token },
          });

          setOthersData(
            response.data.notes.filter((note) => note.pinned === false)
          );

          setAllLabel((alllabel) => [...new Set([...alllabel, ...note.label])]);
        } catch (error) {
          console.error(error);
        }
      })();
    } else {
      editNoteHandler(note._id);
    }
  };

  async function editNoteHandler(notesId) {
    try {
      const response = await axios({
        method: "POST",
        url: `/api/notes/${notesId}`,
        data: { note: note },
        headers: { authorization: token },
      });
      setOthersData(
        response.data.notes.filter((prevNote) => prevNote.pinned === false)
      );
    } catch (error) {
      console.error(error);
    }
  }

  const labelHandler = () => {
    if (inputLabel !== "" && !/\s/g.test(inputLabel) && note.label.length < 3) {
      dispatch({
        type: "LABEL",
        payload: [...new Set([...note.label, inputLabel])],
      });
    }
  };

  const removeLabelHandler = (labelToRemove) => {
    dispatch({ type: "REMOVE_LABEL", removeLabel: labelToRemove });
  };

  const selectHandler = (e) => {
    dispatch({
      type: "PRIORITY",
      setPriority: e.target.value,
    });
  };

  let filteredData = priority(othersData, filter.priorityFilter);
  filteredData = labelFilter(filteredData, filter.labelFilter);
  filteredData = SortByDate(filteredData, filter.sortByDate);
  console.log("test filter", othersData);
  return (
    <section className="content">
      <h2>Add new note</h2>
      <section className={`add-new-note`}>
        {console.log(note.color)}
        <button className={`new-note ${note.color}`} ref={btnRef}>
          <label className="text-note">Add new note</label>
          <section className={`add-new-note-focused ${note.color}`}>
            {isEditable ? (
              <span
                className="remove-editable"
                onClick={() => setIsEditable(false)}
              >
                X
              </span>
            ) : null}
            <input
              type="text"
              className={`searchbar add-note ${note.color}`}
              placeholder="Add Title"
              onChange={titleHandler}
              name="title"
              value={note.title}
            />
            <textarea
              type="text"
              className={`searchbar add-subnote ${note.color}`}
              placeholder="Add Content"
              onChange={contentHandler}
              name="content"
              value={note.content !== "" ? note.content : ""}
            ></textarea>
            <section className="icons-on-note">
              <form action="" className="color-pallete-icon">
                <input
                  className="color-icon icon-note inside-form"
                  type="checkbox"
                  id="coloricon"
                />
                <label htmlFor="coloricon" className="color-icon-label">
                  {" "}
                  <All.IcBaselineColorLens className="icon-note icon-add-notes" />
                </label>
                <div className="color-pallete">
                  <div
                    className="colors blue"
                    onFocus={() =>
                      dispatch({ type: "COLOR", setColor: "blue" })
                    }
                    tabIndex="0"
                  ></div>
                  <div
                    className="colors red"
                    onFocus={() => dispatch({ type: "COLOR", setColor: "red" })}
                    tabIndex="0"
                  ></div>
                  <div
                    className="colors violet"
                    onFocus={() =>
                      dispatch({ type: "COLOR", setColor: "violet" })
                    }
                    tabIndex="0"
                  ></div>
                  <div
                    className="colors yellow"
                    onFocus={() =>
                      dispatch({ type: "COLOR", setColor: "yellow" })
                    }
                    tabIndex="0"
                  ></div>
                </div>
              </form>
              <form className="add-labels-icon">
                <input
                  className=" icon-note inside-form"
                  type="checkbox"
                  id="labelicon"
                />
                <label htmlFor="labelicon" className="color-icon-label">
                  <All.IcBaselineLabel className="icon-note icon-add-notes" />
                </label>
                <div className={`label-section `}>
                  <input
                    type="text"
                    className="searchbar label-input"
                    onChange={labelInputHandler}
                  />
                  <div
                    className="btn btn-primary add-lbl-btn"
                    onFocus={labelHandler}
                    tabIndex="0"
                  >
                    Add label
                  </div>
                </div>
              </form>
              <span className="date-label">{note.date}</span>
              <label htmlFor="priority" className="priority-label">
                Priority
              </label>
              <select
                name="priority"
                id=""
                className="priority-label"
                onChange={selectHandler}
                value={note.priority}
              >
                <option value="Low" className="priority-label">
                  Low Priority
                </option>
                <option value="Medium" className="priority-label">
                  Medium Priority
                </option>
                <option value="High" className="priority-label">
                  High Priority
                </option>
              </select>
              <div
                className="btn btn-primary add-note-btn"
                onClick={addNoteHandler}
              >
                {isEditable ? "Save Changes" : "Add Note"}
              </div>
            </section>
            {note.label.length > 0 && (
              <section className={`labels-section ${note.color}`}>
                {note.label.map((labels) => (
                  <span className="labels-add-to-note" key={note._id}>
                    {labels}{" "}
                    <span
                      className="labels-remove"
                      onClick={() => removeLabelHandler(labels)}
                    >
                      X
                    </span>
                  </span>
                ))}
              </section>
            )}
          </section>
        </button>
      </section>
      {console.log(note.color)}
      <Filter labels={alllabel} data={othersData} />

      <div className="notes-container">
        {filteredData.map((note) => {
          count++;
          return (
            <Card
              data={note}
              //   editFunc={editNoteHandler}
              key={note._id}
              cardColor={note.color}
              counter={count}
            />
          );
        })}
      </div>
    </section>
  );
}
