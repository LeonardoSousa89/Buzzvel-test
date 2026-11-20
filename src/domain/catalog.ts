import type { NavigationLink } from './navigation';

export type Category = { id: string; name: string; description: string };

export type Course = {
  badge: string;
  eyebrow: string;
  instructorPrefix: string;
  viewLabel: string;
  browse: NavigationLink;
  browseIcon: string;
  metadataSeparator: string;
  categoryId: Category['id'];
  title: string;
  description: string;
  instructor: string;
  metadata: readonly string[];
  photo: { src: string; alt: string };
};

export type CategoriesContent = {
  eyebrow: string;
  title: string;
  description: string;
  exploreLabel: string;
  featuredCoursePrefix: string;
};
