import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNote } from "../../Context/noteContext";

export function Archive() {
  const token = localStorage.getItem("login");
  const [archiveNotes, setArchiveNotes] = useState([]);
  const { note, othersData, setOthersData } = useNote();
  const unarchiveNote = (noteId) => {
    (async () => {
      try {
        const response = await axios({
          method: "POST",
          url: `/api/archives/restore/${noteId}`,
          data: { note: note },
          headers: { authorization: token },
        });
        setArchiveNotes(response.data.archives);
        setOthersData(response.data.notes);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    })();
  };
  useEffect(() => {
    (async () => {
      try {
        const response = await axios({
          method: "GET",
          url: `/api/archives`,
          headers: { authorization: token },
        });
        setArchiveNotes(response.data.archives);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [archiveNotes]);
  return (
    <section class="content">
      <h2>Archive Notes</h2>

      <div class="notes-container">
        {archiveNotes.length > 0 &&
          archiveNotes.map((note) => (
            <div class={`card card-align-item-start ${note.singleColor}`}>
              <h4 className={`title ${note.singleColor}`}>{note.title}</h4>

              <p className={`description ${note.singleColor}`}>
                {note.content}
              </p>

              <div className="custom-hr"></div>
              <div className="priority">
                Priority Level:{" "}
                <p className={`priority-chip label-chip ${note.singleColor}`}>
                  {note.priority}
                </p>
              </div>
              <div className="date-and-label">
                <p className={`date ${note.singleColor}`}>{note.date}</p>
                {note.label.length > 0 &&
                  note.label.map((label) => (
                    <p className={`label-chip ${note.singleColor}`} key={label}>
                      {label}
                    </p>
                  ))}
              </div>
              <button
                class="btn btn-primary w-100"
                onClick={() => unarchiveNote(note._id)}
              >
                Un-archive Note
              </button>
            </div>
          ))}
      </div>
    </section>
  );
}
