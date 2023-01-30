export async function getStoredNotes() {
  const res = await fetch(
    'https://note-collection-71ac2-default-rtdb.firebaseio.com/notes.json'
  );
  const data = await res.json();
  return data;
}

export async function storeNotes(note) {
  await fetch(
    'https://note-collection-71ac2-default-rtdb.firebaseio.com/notes.json',
    {
      method: 'POST',
      body: JSON.stringify(note),
    }
  );
}
