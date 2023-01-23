import { redirect, useLoaderData } from 'react-router';
import NewNote, { links as newNoteStyles } from '~/components/NewNotes';
import NotesList, { links as notesListStyles } from '~/components/NotesList';
import { getStoredNotes, storeNotes } from '~/data/notes';

export default function NotesPage() {
  const notes = useLoaderData();
  return (
    <main>
      <NewNote />
      <NotesList notes={notes} />
    </main>
  );
}

export async function loader() {
  const notes = await getStoredNotes();
  return notes;
}

export async function action({ request }) {
  const formData = await request.formData();
  const noteData = Object.fromEntries(formData);
  const existingNotes = await getStoredNotes();
  noteData.id = new Date().toISOString();
  await storeNotes([...existingNotes, noteData]);

  return redirect('/Notes');
}

export function links() {
  return [...newNoteStyles(), ...notesListStyles()];
}
