import React, { useState } from "react";
import { Note } from "../Pages/Notes";
import db from "../appwrite/database";
import DeleteIcon from "../assets/Delete";
interface NoteDataProps {
  NoteData: Note;
  UpdatedNote?: (updatedNote: Note) => void;
  setNotes?: Note;
}
const NoteRender: React.FC<NoteDataProps> = ({ NoteData, setNotes }) => {
  const [note, setNote] = useState(NoteData);
  const HandleCompleted = async () => {
    const completed = !note.completed;
    try {
      const updatedNote = { ...note, completed };
      await db.Tasks.update(note.$id, { completed });
      setNote(updatedNote);
    } catch (error) {
      console.log(error);
    }
  };
  const HandleDelete = () => {
    db.Tasks.delete(note.$id);
    setNotes((prev) => prev.filter((i) => i.$id != note.$id));
  };
  return (
    <div className="note-wrapper">
      <p>
        <span onClick={HandleCompleted}>
          {note.completed ? <s>{note.tasks}</s> : note.tasks}
        </span>
      </p>
      <div onClick={HandleDelete}>
        <DeleteIcon />
      </div>
    </div>
  );
};

export default NoteRender;
