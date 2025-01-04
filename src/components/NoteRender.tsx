import React, { useState } from "react";
import { Note } from "../Pages/Notes";
import db from "../appwrite/database";
interface NoteDataProps {
  NoteData: Note;
  UpdatedNote?: (updatedNote: Note) => void;
}
const NoteRender: React.FC<NoteDataProps> = ({ NoteData }) => {
  const [note, setNote] = useState(NoteData);
  const HandleCompleted = async () => {
    const completed = !note.completed;
    try {
      await db.Tasks.update(note.$id, { completed });
      const updatedNote = { ...note, completed };
      setNote(updatedNote);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <p>
        <span onClick={HandleCompleted}>
          {note.completed ? <s>{note.tasks}</s> : note.tasks}
        </span>
      </p>
    </>
  );
};

export default NoteRender;
