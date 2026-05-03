import { useState, type FormEvent, type ReactNode } from 'react';
import logo from '../assets/images/nornecraft logo.webp';
import {
  ADMIN_AUTH_STORAGE_KEY,
  ADMIN_PASSWORD,
} from '../config/site';
import './AdminGate.css';

function readStoredAuth(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    return window.localStorage.getItem(ADMIN_AUTH_STORAGE_KEY) === 'true';
  } catch {
    return false;
  }
}

function AdminGate({ children }: { children: ReactNode }) {
  const [authed, setAuthed] = useState<boolean>(readStoredAuth);
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  // Gate disabled (empty password) — let everyone in.
  if (!ADMIN_PASSWORD) return <>{children}</>;
  if (authed) return <>{children}</>;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (input === ADMIN_PASSWORD) {
      try {
        window.localStorage.setItem(ADMIN_AUTH_STORAGE_KEY, 'true');
      } catch {
        // ignore storage failures (private mode, etc.) — auth still holds in memory
      }
      setAuthed(true);
      setError('');
    } else {
      setError('Incorrect password.');
    }
  }

  return (
    <div className="admin-gate">
      <form className="admin-gate-card" onSubmit={handleSubmit}>
        <img
          src={logo}
          alt="Norne Craft"
          className="admin-gate-logo"
          width="180"
          height="45"
        />
        <h1>Admin Preview</h1>
        <p>Enter the access password to view the full site.</p>
        <label htmlFor="admin-password" className="admin-gate-label">
          Password
        </label>
        <input
          id="admin-password"
          type="password"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoFocus
          autoComplete="current-password"
        />
        {error && <p className="admin-gate-error">{error}</p>}
        <button type="submit" className="btn btn-primary">
          Enter
        </button>
      </form>
    </div>
  );
}

export default AdminGate;
