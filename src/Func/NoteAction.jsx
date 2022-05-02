export function NoteAction(note, action) {
  //   const { setCardColor } = useNote();
  switch (action.type) {
    case "INPUT_TITLE":
      return {
        ...note,
        title: action.title,
      };
    case "INPUT_CONTENT":
      return {
        ...note,
        content: action.content,
      };
    case "LABEL":
      return {
        ...note,
        label: action.payload,
      };
    case "REMOVE_LABEL":
      return {
        ...note,
        label: note.label.filter((label) => label !== action.removeLabel),
      };
    case "EDIT":
      console.log("editDATA", action.editData);
      return { ...action.editData };
    case "PRIORITY":
      return {
        ...note,
        priority: action.setPriority,
      };
    case "COLOR":
      return {
        ...note,
        isCardColor: false,
        singleColor: action.setColor,
        color: action.setColor,
      };
    case "COLOR_CARD":
      //   setCardColor(true);
      console.log("in color card dispatch");
      return {
        ...note,
        isCardColor: true,
        singleColor: action.setColor,
      };

    default:
      break;
  }
}
