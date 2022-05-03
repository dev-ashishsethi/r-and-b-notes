import { useNote } from "../../Context/noteContext";
import { Card } from "../Cards/Cards";

export function LabelCard({ labels }) {
  const { othersData } = useNote();
  let count = 0;
  const filterData = othersData.filter((note) => note.label.includes(labels));
  console.log("filtered data on label", filterData);
  return (
    <>
      <h4>{labels}</h4>
      <div className="notes-container">
        {filterData.map((note) => {
          count++;
          return <Card data={note} key={note._id} counter={count} />;
        })}
      </div>
    </>
  );
}
