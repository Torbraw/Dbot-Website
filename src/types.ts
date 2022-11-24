export type NavItem = {
  title: string;
  url: string;
};

export type FeatureItem = {
  title: string;
  description: string;
  icon: string;
};

export type FooterLink = {
  url: string;
  icon: string;
};

export type Frontmatter = {
  title: string;
  description: string;
  layout: string;
  image?: { src: string; alt: string };
  dir?: 'ltr' | 'rtl';
  ogLocale?: string;
  lang?: string;
};
