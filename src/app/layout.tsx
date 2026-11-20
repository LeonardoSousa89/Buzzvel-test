import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import '@fontsource-variable/inter/wght.css';
import '@fontsource-variable/plus-jakarta-sans/wght.css';
import './globals.css';
import '../presentation/styles/primitives.css';
import '../presentation/styles/layout.css';
import '../presentation/styles/navigation.css';
import '../presentation/styles/hero.css';
import '../presentation/styles/categories.css';
import '../presentation/styles/featured.css';
import '../presentation/styles/learning.css';
import '../presentation/styles/viewport.css';
import '../presentation/styles/testimonial.css';
import '../presentation/styles/community.css';
import '../presentation/styles/contact.css';
import '../presentation/styles/final-cta.css';
import '../presentation/styles/footer.css';
import '../presentation/styles/dialog.css';

export const metadata: Metadata = {
  title: 'Luma | Practical courses for curious people',
  description: 'Build practical skills in design, technology, business and more with short courses taught by working professionals.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
