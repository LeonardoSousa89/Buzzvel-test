import type { FooterContent } from '../../domain/footer';

export const footer: FooterContent = {
  tagline: 'Practical learning for curious people.',
  copyright: '© 2026 Luma Learning',
  groups: [
    {
      title: 'Explore',
      links: [
        { label: 'Courses', href: '#featured' },
        { label: 'Categories', href: '#courses' },
        { label: 'Instructors', href: '#community' },
        { label: 'For Teams', href: '#community' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '#how-it-works' },
        { label: 'Careers', detail: 'Career listings are unavailable in this demo.' },
        { label: 'Journal', unavailable: true },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Help Center', href: '#contact' },
        { label: 'Contact', href: '#contact' },
        { label: 'Terms', detail: 'Luma provides learning content for personal use. Course materials may not be copied, redistributed or resold without permission. Please use the website respectfully and contact us with any questions.' },
        { label: 'Privacy', detail: 'Contact form entries remain in your browser while you complete the form. Submitting clears the fields and displays a confirmation; no message is transmitted or stored by this form.' },
      ],
    },
  ],
};
