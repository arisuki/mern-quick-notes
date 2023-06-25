import { useState } from "react";

export default function NoteCreate({addNote}) {
  const [newNote, setNewNote] = useState("");

  function handleAddNote(evt) {
    evt.preventDefault();
    addNote(newNote);
    setNewNote("");
  }

  return (
    <form onSubmit={handleAddNote}>
      <label>Note</label>
      <input
        type="text"
        value={newNote}
        onChange={(evt) => setNewNote(evt.target.value)}
        placeholder="New Note"
      />
      <button type="submit">Add QuickNote</button>
    </form>
  );
}
