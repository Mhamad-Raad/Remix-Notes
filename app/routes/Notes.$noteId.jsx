import { Link } from '@remix-run/react';
import NoteDetails from '~/styles/note-details.css';

export default function NoteDetail() {
  return (
    <main id='note-details'>
      <header>
        <nav>
          <Link to='/notes'>Back to all Notes</Link>
        </nav>
        <h1>NOTE TITLE</h1>
      </header>
      <p id='note-details-content'>NOTE CONTENT</p>
    </main>
  );
}

export async function loader({ params }) {
  const notes = await getStoredNotes();
  const noteId = params.noteId;
  const selectedNote = notes.find((note) => note.id === noteId);
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
