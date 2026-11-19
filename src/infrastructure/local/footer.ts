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
        { label: 'Journal', detail: 'Journal articles are unavailable in this demo.' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Help Center', href: '#contact' },
        { label: 'Contact', href: '#contact' },
        { label: 'Terms', detail: 'Terms are unavailable in this demo.' },
        { label: 'Privacy', detail: 'This demo does not send or store contact form submissions.' },
      ],
    },
  ],
};
