import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import '@fontsource-variable/inter/wght.css';
import '@fontsource-variable/plus-jakarta-sans/wght.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'Luma | Practical courses for curious people',
  description: 'Build practical skills in design, technology, business and more with short courses taught by working professionals.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
