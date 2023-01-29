import { Link } from '@remix-run/react';

import styles from '~/styles/home.css';

export default function Index() {
  return (
    <main id='content'>
      <h1>A better way of keeping track of your notes</h1>
      <p>Try our early beta and never loose track of your notes again!</p>
      <p id='cta'>
        <Link to='./Notes'>Try Now!</Link>
      </p>
    </main>
  );
}

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export function meta() {
  return {
    title: 'Note Take',
    description: 'Write your notes at ease',
  };
}
