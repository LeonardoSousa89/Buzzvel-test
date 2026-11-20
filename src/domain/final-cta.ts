import type { NavigationLink } from './navigation';

export type FinalCtaContent = {
  title: string;
  subtitle: string;
  avatars: readonly string[];
  explore: NavigationLink;
  join: NavigationLink;
};
