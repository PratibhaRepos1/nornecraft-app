// Central place to tweak the site's SEO defaults. Update SITE_URL once the
// app is deployed at its real public origin (and once routing moves off the
// hash router so the path-style canonical URLs below are actually reachable).

export const SITE_URL = 'https://nornecraft.com';
export const SITE_NAME = 'Norne Craft';
export const DEFAULT_TITLE = 'Norne Craft | Ancient Magic, Modern Craft';
export const DEFAULT_DESCRIPTION =
  'Norne Craft makes Norse-inspired drinking horns, jewelry, and home decor — handcrafted using traditional techniques and built to last.';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/nornecraft-app/og-cover.jpg`;
export const TWITTER_HANDLE = '@nornecraft';

export function buildCanonical(path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${clean}`;
}
