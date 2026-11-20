export type Step = {
  mobileNumber: { prefix: string; value: number };
  desktopNumber: string;
  title: string;
  description: string;
  color: 'blue' | 'orange' | 'yellow';
};

export type LearningContent = {
  eyebrow: string;
  title: string;
};
