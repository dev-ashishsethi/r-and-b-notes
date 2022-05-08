import axios from "axios";
import { useNote } from "../../Context/noteContext";

export function Delete() {
  const { trashData, setTrashData, setOthersData } = useNote();
  console.log("trash data", trashData);
  const token = localStorage.getItem("login");
  const restoreNote = (note, noteId) => {
    try {
      (async () => {
        const response = await axios({
          method: "POST",
          url: `/api/notes/`,
          data: {
            note: note,
          },
          headers: { authorization: token },
        });
        setTrashData((trash) => trash.filter((note) => note._id !== noteId));
        setOthersData(response.data.notes);
      })();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <section class="content">
      <h2>Trash Notes</h2>
      <div class="notes-container">
        {trashData.length > 0?
          trashData.map((trash) => (
            <div class={`card card-align-item-start ${trash.singleColor}`}>
              <h4 className={`title ${trash.singleColor}`}>{trash.title}</h4>

              <p className={`description ${trash.singleColor}`}>
                {trash.content}
              </p>

              <div className="custom-hr"></div>
              <div className="priority">
                Priority Level:{" "}
                <p className={`priority-chip label-chip ${trash.singleColor}`}>
                  {trash.priority}
                </p>
              </div>
              <div className="date-and-label">
                <p className={`date ${trash.singleColor}`}>{trash.date}</p>
                {trash.label.length > 0 &&
                  trash.label.map((label) => (
                    <p
                      className={`label-chip ${trash.singleColor}`}
                      key={label}
                    >
                      {label}
                    </p>
                  ))}
              </div>
              <button
                class="btn btn-primary w-100"
                onClick={() => restoreNote(trash, trash._id)}
              >
                Restore Note
              </button>
            </div>
          )):<h4>No Notes in Trash</h4>}
      </div>
    </section>
  );
}
