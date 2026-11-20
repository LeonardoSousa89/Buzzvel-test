import type { NavigationLink } from '../../domain/navigation';

export const navigation: readonly NavigationLink[] = [
  { label: 'Courses', href: '#courses' },
  { label: 'For Teams', href: '#community' },
  { label: 'Community', href: '#community' },
  { label: 'About', href: '#how-it-works' },
];

export const startLearning: NavigationLink = { label: 'Start learning', href: '#courses' };
export const login = {
  title: 'Log in',
  message: 'Account sign-in is unavailable in this demo.',
};
