import { useState, useEffect } from "react";
import { LabelCard } from "../../Components/LabelCard/LabelCard";
import { useNote } from "../../Context/noteContext";

export function Label() {
  const [labelArr, setLabelArr] = useState([]);
  const { alllabel, othersData } = useNote();
  console.log("all label", alllabel);
  console.log("label array", labelArr);
  return (
    <section className="content">
      {[...alllabel].map((label) => (
        <LabelCard labels={label} />
      ))}
    </section>
  );
}
