import { redirect } from 'react-router';
import NewNote, { links as styles } from '~/components/NewNotes';
import { getStoredNotes, storeNotes } from '~/data/notes';

export default function NotesPage() {
  return (
    <main>
      <NewNote />
    </main>
  );
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
  return [...styles()];
}
