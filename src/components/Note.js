import React from "react";
import ReactDom from "react-dom";

const Note = ({note}) => {
    return(
 
      <li>{note.content}</li>
    )
  }
export default Note;