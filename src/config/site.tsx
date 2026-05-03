import { createContext, useContext, type ReactNode } from 'react';

// Toggle: true = public site (http://localhost:5173) shows ONLY the coming-soon page.
//         The full site stays reachable to admins under http://localhost:5173/demo.
//         false = public site shows the full site; /demo continues to work as a preview.
export const SHOW_COMING_SOON_ONLY = true;

// Path prefix that always shows the full site. Change with care: any change must
// also be reflected in the routes mounted in App.tsx.
export const ADMIN_BASE_PATH = '/demo';

// Very-light access gate for /demo. This is client-side only and not real security
// — Vite inlines this value into the built JS, so anyone reading the bundle can
// see it. It just keeps casual visitors out. Set VITE_ADMIN_PASSWORD in .env.local
// (gitignored). If unset, the gate is disabled and /demo is open.
// eslint-disable-next-line react-refresh/only-export-components
export const ADMIN_PASSWORD: string =
  import.meta.env.VITE_ADMIN_PASSWORD ?? '';
export const ADMIN_AUTH_STORAGE_KEY = 'nornecraft.admin.authed';

const BasePathContext = createContext<string>('');

export function BasePathProvider({
  value,
  children,
}: {
  value: string;
  children: ReactNode;
}) {
  return (
    <BasePathContext.Provider value={value}>{children}</BasePathContext.Provider>
  );
}

export function useBasePath(): string {
  return useContext(BasePathContext);
}

// Build a router-ready path that respects the current base path. `withBase('', '/shop')`
// returns '/shop'; `withBase('/demo', '/shop')` returns '/demo/shop'.
export function withBase(basePath: string, path: string): string {
  const normalized = path === '' ? '/' : path.startsWith('/') ? path : `/${path}`;
  if (!basePath) return normalized;
  if (normalized === '/') return basePath;
  return `${basePath}${normalized}`;
}

// Inside Shop (and anywhere else that wants to gate UI on the flag), use this so
// admin previews under /demo always see the real content even when the flag is on.
export function useShowComingSoon(): boolean {
  const basePath = useBasePath();
  return SHOW_COMING_SOON_ONLY && basePath === '';
}
