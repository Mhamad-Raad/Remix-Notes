import NewNote, { links as styles } from '~/components/NewNotes';

export default function NotesPage() {
  return (
    <main>
      <NewNote />
    </main>
  );
}

export function links() {
  return [...styles()];
}
