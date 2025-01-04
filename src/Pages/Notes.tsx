import { useEffect, useState } from "react";
import db from "../appwrite/database";
import NotesForm from "../components/NotesForm";
import { Query } from "appwrite";
import NoteRender from "../components/NoteRender";
export type Note = {
  $id: string;
  tasks: string;
  completed: boolean;
};
const Notes = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    init();
  }, []);
  const init = async () => {
    // const response = await databases.listDocuments<Note>(
    //   import.meta.env.VITE_DATABASE,
    //   import.meta.env.VITE_COLLECTION_ID,
    // );
    const response = await db.Tasks.list([Query.orderDesc(`$createdAt`)]);
    setNotes(response.documents); //Query feature for making the recent todo come upj
  };

  return (
    <div>
      <div>
        <NotesForm setNotes={setNotes} />
      </div>
      {notes.map((note) => (
        <div id={note.$id} key={note.$id}>
          <ul>
            <li>
              <NoteRender NoteData={note} />
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Notes;
