export type CommunityContent = {
  dialogTitle: string;
  exploreLabel: string;
  eyebrow: string;
  title: string;
  description: string;
  details: string;
  collage: readonly (readonly { id: string; src: string }[])[];
};
