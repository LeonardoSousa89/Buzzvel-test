import type { TestimonialContent } from '../../domain/testimonial';

import type { Metric } from '../../domain/testimonial';

export const testimonial: TestimonialContent = {
  quote: 'The lessons are short enough to fit into my week, but detailed enough that I actually leave with something I can use.',
  name: 'Alex Morgan',
  role: 'Product Designer',
  desktopRole: 'Product Manager',
  portrait: '/images/alex.jpg',
};

export const metrics: readonly Metric[] = [
  { value: '24K+', label: 'active learners', animation: { target: 24000, divisor: 1000, suffix: 'K+' } },
  { value: '120+', label: 'expert-led courses', animation: { target: 120, divisor: 1, suffix: '+' } },
  { value: '92%', label: 'complete their first course', animation: { target: 92, divisor: 1, suffix: '%' } },
];
