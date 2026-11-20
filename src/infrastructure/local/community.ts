import type { CommunityContent } from '../../domain/community';

export const community: CommunityContent = {
  dialogTitle: 'Welcome to the Luma community',
  exploreLabel: 'Explore teachers and students',
  eyebrow: 'The people',
  title: 'Meet international students & teachers',
  description: 'Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus urna, faucibus aenean lorem faucibus integer.',
  details: 'A place for curious minds to connect, share ideas and grow. Find inspiration in different perspectives and take your next step alongside fellow learners and teachers.',
  collage: [
    ['classroom', 'group'],
    ['writing', 'studio', 'reading'],
    ['graduate', 'home', 'online'],
    ['campus', 'community-student'],
  ].map((column) => column.map((id) => ({ id, src: `/images/${id}.jpg` }))),
};
