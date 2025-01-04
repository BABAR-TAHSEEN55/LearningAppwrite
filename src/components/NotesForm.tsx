import React from "react";
import { Note } from "../Pages/Notes";
import db from "../appwrite/database";
interface setNotesProps {
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>; // Type for setNotes function
}
const NotesForm = ({ setNotes }: setNotesProps) => {
  const HandleAdd = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const NoteBody = e.target.tasks.value;
    if (NoteBody === "") return;
    try {
      const payload = { tasks: NoteBody };
      const response = await db.Tasks.create(payload);
      setNotes((prev) => [response, ...prev]);
      form.reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={HandleAdd}>
      <input
        type="text"
        name="tasks"
        placeholder="🤔 What's your agenda today?"
      />
    </form>
  );
};

export default NotesForm;
