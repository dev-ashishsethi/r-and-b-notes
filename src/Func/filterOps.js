function getFormattedDate(indianDate) {
  const newDate =
    indianDate.split("/")[1] +
    "/" +
    indianDate.split("/")[0] +
    "/" +
    indianDate.split("/")[2];

  const DateObj = new Date(newDate);
  return DateObj;
}

export function SortByDate(notes, sortType) {
  return [...notes].sort(
    sortType === "latest"
      ? (a, b) =>
          getFormattedDate(a.date).getTime() -
          getFormattedDate(b.date).getTime()
      : (a, b) =>
          getFormattedDate(b.date).getTime() -
          getFormattedDate(a.date).getTime()
  );
}

export function priority(notes, priorityType) {
  return priorityType !== ""
    ? [...notes].filter((note) => note.priority === priorityType)
    : [...notes];
}

export function labelFilter(notes, labelFilter) {
  return labelFilter.length > 0
    ? [...notes].filter((note) =>
        note.label.some((ele) => labelFilter.includes(ele))
      )
    : [...notes];
}
