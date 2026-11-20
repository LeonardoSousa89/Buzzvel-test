import type { HeroContent } from '../../domain/hero';
import { learnerAvatars } from './learner-avatars';

export const hero: HeroContent = {
  explore: { label: 'Explore courses', href: '#courses' },
  howItWorks: { label: 'See how it works', href: '#how-it-works' },
  courseCountLabel: ' expert-led courses',
  stars: '★★★★★',
  eyebrow: 'Learn at your own pace',
  title: 'Build skills that actually move you forward.',
  description: 'Practical courses taught by people who do the work every day. Learn design, technology, business and more — one focused lesson at a time.',
  avatars: learnerAvatars.slice(0, 3),
  trust: 'Trusted by 24,000+',
  audience: 'learners',
  photo: { src: '/images/hero.jpg', alt: 'Learner working at a laptop' },
  courseCount: '120+',
  rating: '4.8 avg rating',
  desktopRating: '4.9 avg rating',
};
