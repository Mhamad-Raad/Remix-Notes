import NewNote from '~/components/NewNotes';
import Styles from '~/components/NewNotes.css';

export default function NotesPage() {
  return (
    <main>
      <NewNote />
    </main>
  );
}

export function links() {
  return [{ rel: 'stylesheet', href: Styles }];
}
