import { Link, useLoaderData } from '@remix-run/react';
import { json } from '@remix-run/node';
import { getStoredNotes } from '~/data/notes';
import NoteDetails from '~/styles/note-details.css';

export default function NoteDetail() {
  const note = useLoaderData();

  return (
    <main id='note-details'>
      <header>
        <nav>
          <Link to='/notes'>Back to all Notes</Link>
        </nav>
        <h1>{note.title}</h1>
      </header>
      <p id='note-details-content'>{note.content}</p>
    </main>
  );
}

export async function loader({ params }) {
  const notes = await getStoredNotes();
  const noteId = params.noteId;
  const selectedNote = notes.find((note) => note.id === noteId);

  if (!selectedNote) {
    throw json(
      { message: `Note with id ${noteId} not found` },
      { status: 404 }
    );
  }

  return selectedNote;
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: NoteDetails,
    },
  ];
}

export function meta({data}) {
  return {
    title: data.title,
    description: 'A place to keep your notes',
  };
}
