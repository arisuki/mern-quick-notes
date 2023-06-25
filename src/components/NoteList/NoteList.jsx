import NoteItem from "../NoteItem/NoteItem";

export default function NoteList({notes}){

    const noteListItem = notes.map((note, idx)=>(
        <NoteItem note={note} index={idx} />
        ))

return (
<div>
    {noteListItem}
</div>

)
}