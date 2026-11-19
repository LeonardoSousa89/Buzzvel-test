import type { Category, Course, CategoriesContent } from '../../domain/catalog';

export const categories: readonly Category[] = [
  { id: 'product-design', name: 'Product Design', description: 'Turn complex problems into clear, useful experiences.' },
  { id: 'technology', name: 'Technology', description: 'Build a stronger understanding of the tools shaping digital products.' },
  { id: 'business', name: 'Business', description: 'Develop practical skills for better decisions and stronger teams.' },
  { id: 'creative', name: 'Creative', description: 'Explore new ways to communicate, create and tell stories.' },
];

export const categoriesContent: CategoriesContent = {
  eyebrow: 'Find your next skill',
  title: 'Learn something worth knowing.',
  description: 'Short, practical courses designed around skills you can put to work immediately.',
  exploreLabel: 'Explore →',
  featuredCoursePrefix: 'Featured course — ',
};

export const course: Course = {
  badge: 'Featured course',
  eyebrow: 'Most popular this month',
  instructorPrefix: 'with ',
  viewLabel: 'View course',
  browse: { label: 'Browse all courses', href: '#courses' },
  browseIcon: '→',
  metadataSeparator: ' · ',
  categoryId: 'product-design',
  title: 'Designing products people understand.',
  description: 'Learn how to turn complex workflows into simple, intentional product experiences through research, structure and thoughtful interaction design.',
  instructor: 'Maya Chen · Senior Product Designer',
  photo: {
    src: '/images/featured.jpg',
    alt: 'Design prototypes, materials and tools on a worktable',
  },
  metadata: ['8 lessons', '2h 40min', 'Intermediate'],
};
