import type { NavigationLink } from './navigation';

export type HeroContent = {
  explore: NavigationLink;
  howItWorks: NavigationLink;
  courseCountLabel: string;
  stars: string;
  eyebrow: string;
  title: string;
  description: string;
  avatars: readonly string[];
  trust: string;
  audience: string;
  photo: { src: string; alt: string };
  courseCount: string;
  rating: string;
  desktopRating: string;
};
