import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from '@remix-run/react';

import styles from '~/styles/main.css';
import MainNavigation from './components/MainNavigation';

export const meta = () => ({
  charset: 'utf-8',
  title: 'New Remix App',
  viewport: 'width=device-width,initial-scale=1',
});

export default function App() {
  return (
    <html lang='en'>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <header>
          <MainNavigation />
        </header>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function ErrorBoundary({ error }) {
  return (
    <html lang='en'>
      <head>
        <Meta />
        <Links />
        <title>an error occured!</title>
      </head>
      <body>
        <header>
          <MainNavigation />
        </header>
        <main className='error'>
          <h1>an error occured!</h1>
          <p>error: {error.message}</p>
          <p>
            Back to <Link to='/'>safety!</Link>
          </p>
        </main>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function CatchBoundary() {
  const response = useCatch();
  const message = response.data?.message || 'Notes Not Found!';
  const status = response.statusText || 500;
  return (
    <html lang='en'>
      <head>
        <Meta />
        <Links />
        <title>an error occured!</title>
      </head>
      <body>
        <header>
          <MainNavigation />
        </header>
        <main className='error'>
          <h1>{status}</h1>
          <p> {message || 'Something went wrong!!!'}</p>
          <p>
            Back to <Link to='/'>safety!</Link>
          </p>
        </main>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}
