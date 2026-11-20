export type Metric = {
  value: string;
  label: string;
  animation?: { target: number; divisor: number; suffix: string };
};

export type TestimonialContent = {
  quote: string;
  name: string;
  role: string;
  desktopRole: string;
  portrait: string;
};
