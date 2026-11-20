import type { Step, LearningContent } from '../../domain/learning';

export const steps: readonly Step[] = [
  {
    mobileNumber: { prefix: 'Step 0', value: 1 },
    desktopNumber: 'Step 01',
    title: 'Choose your focus',
    description: 'Find courses based on the skill you want to build, not endless content categories.',
    color: 'blue',
  },
  {
    mobileNumber: { prefix: 'Step 0', value: 2 },
    desktopNumber: 'Step 02',
    title: 'Learn from experience',
    description: 'Follow concise lessons created by professionals who use these skills.',
    color: 'orange',
  },
  {
    mobileNumber: { prefix: 'Step 0', value: 3 },
    desktopNumber: 'Step 03',
    title: 'Put it into practice',
    description: 'Every course includes practical exercises designed to turn knowledge into action.',
    color: 'yellow',
  },
];

export const learning: LearningContent = {
  eyebrow: 'How Luma works',
  title: 'Less browsing. More learning.',
};
