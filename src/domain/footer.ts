export type FooterItem = { label: string; href: string } | { label: string; detail: string };
export type FooterContent = {
  tagline: string;
  copyright: string;
  groups: readonly { title: string; links: readonly FooterItem[] }[];
};
