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

export type EncyclopediaParams = {
  type: string;
  id: string;
};

export type EncyclopediaItem = {
  name: string;
  icon: string;
  link: string;
};

export type UpstashResponse = {
  result: string;
};

// TODO merge those types with the ones from the API
export type StringI18n = {
  fr: string;
  en: string;
};

export type Stats = {
  type: string;
  value: number;
};

export type Item = {
  name: StringI18n;
  emojiId: string;
  stats: Stats[];
  type: string;
  rarity: number;
  availability: string;
  enchantTier?: string;
  iconName: string;
};

export type Monster = {
  name: StringI18n;
  rarity: number;
  loots: Item[];
  iconName: string;
};
