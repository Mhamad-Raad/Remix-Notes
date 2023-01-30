import { Link, useCatch, useLoaderData } from '@remix-run/react';
import { json, redirect } from '@remix-run/node';
import NewNote, { links as newNoteStyles } from '~/components/NewNotes';
import NotesList, { links as notesListStyles } from '~/components/NotesList';
import { getStoredNotes, storeNotes } from '~/data/notes';

export default function NotesPage() {
  const data = useLoaderData();
  let notes = []

  Object.keys(data)?.forEach(function (key) {
    notes.push(data[key])
  });


  return (
    <main>
      <NewNote />
      <NotesList notes={notes} />
    </main>
  );
}

export function ErrorBoundary({ error }) {
  return (
    <main className='error'>
      <h1>Notes Not Working!</h1>
      <p>error: {error.message}</p>
      <p>
        Back to <Link to='/'>safety!</Link>
      </p>
    </main>
  );
}

export async function loader() {
  const notes = await getStoredNotes();
  if (!notes || notes.length === 0) {
    throw json(
      {
        message: 'No notes found',
      },
      {
        status: 404,
        statusText: 'Not Found',
      }
    );
  }
  return notes;
}

export function CatchBoundary() {
  const response = useCatch();
  const message = response.data?.message || 'Notes Not Found!';
  return (
    <main>
      <NewNote />
      <p className='info-message'>error: {message}</p>
    </main>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const noteData = Object.fromEntries(formData);
  if (noteData.title.trim() < 3) {
    return {
      message: 'The title must be longer than 3 characters',
    };
  }

  noteData.id = new Date().toISOString();
  await storeNotes(noteData);

  return redirect('/Notes');
}

export function links() {
  return [...newNoteStyles(), ...notesListStyles()];
}

export function meta() {
  return {
    title: 'All Notes',
    description: 'A place to keep your notes',
  };
}
