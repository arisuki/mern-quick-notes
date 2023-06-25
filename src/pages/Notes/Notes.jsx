import NoteCreate from "../../components/NoteCreate/NoteCreate";
import NoteList from "../../components/NoteList/NoteList";
import { useState } from "react";
import * as notesAPI from "../../utilities/notes-api";

export default function Notes(){

    const [notes, setNotes] = useState([]);


async function addNote(){
    await notesAPI.createNote()
   fetchNotes()
}

async function fetchNotes(){
        const allNotes = await notesAPI.getNotes();
        setNotes(allNotes)
    }

    return(
      
        <div>
       <h1>MERN QuickNotes</h1>
        <NoteCreate addNote={addNote} />
        <NoteList notes={notes}/>
    </div>
        )
}