import type { FinalCtaContent } from '../../domain/final-cta';
import { learnerAvatars } from './learner-avatars';

export const finalCta: FinalCtaContent = {
  title: 'What will you learn next?',
  subtitle: 'Start with one course. Build from there.',
  avatars: learnerAvatars,
  explore: { label: 'Explore all courses', href: '#courses' },
  join: { label: 'Join Luma', href: '#contact' },
};
