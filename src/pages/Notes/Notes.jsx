import NoteCreate from "../../components/NoteCreate/NoteCreate";
import NoteList from "../../components/NoteList/NoteList";
import { useState } from "react";

export default function Notes(){

    const [notes, setNotes] = useState(["Note 1", "Note 2"]);

function addNote(note){
    setNotes([...notes, note])
}

    return(
      
        <div>
       <h1>MERN QuickNotes</h1>
        <NoteCreate addNote={addNote}/>
        <NoteList notes={notes}/>
    </div>
        )
}