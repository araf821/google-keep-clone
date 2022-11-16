import React from "react";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function InputBox(props) {
  const [note, setNote] = useState({
    title: "",
    body: "",
  });

  const [clicked, setClicked] = useState(false);

  function setClick(){
    setClicked(true);
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    if (note.title === "" || note.body === "") {
      event.preventDefault();
      return;
    }

    props.onAdd(note);
    setNote({
      title: "",
      body: "",
    });
    setClicked(false);
    event.preventDefault();
  }

  return (
    <form className="create-note">
      {clicked && (
        <input
          onChange={handleChange}
          name="title"
          value={note.title}
          placeholder="Title..."
        />
      )}
      <textarea
        onClick={setClicked}
        onChange={handleChange}
        name="body"
        value={note.body}
        placeholder="Take a note..."
        rows= {clicked ? "3" : "1"}
      />
      <Zoom in={clicked}>
        <Fab onClick={submitNote}>
          <AddIcon />
        </Fab>
      </Zoom>
    </form>
  );
}

export default InputBox;
