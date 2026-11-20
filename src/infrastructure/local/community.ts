import type { CommunityContent } from '../../domain/community';

export const community: CommunityContent = {
  dialogTitle: 'Meet the Luma community',
  exploreLabel: 'Explore teachers and students',
  eyebrow: 'The people',
  title: 'Meet international students & teachers',
  description: 'Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus urna, faucibus aenean lorem faucibus integer.',
  details: 'Maya Chen teaches product design. Alex Morgan is a product designer and Luma learner.',
  collage: [
    ['classroom', 'group'],
    ['writing', 'studio', 'reading'],
    ['graduate', 'home', 'online'],
    ['campus', 'community-student'],
  ].map((column) => column.map((id) => ({ id, src: `/images/${id}.jpg` }))),
};
