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

export type SidebarContent = { text: string; link: string };

export type Sidebar = Record<string, Record<string, SidebarContent[]>>;

export type EncyclopediaResponse<T> = {
  entries: T[];
  nextToken: string;
};

export type EncyclopediaTypeParams = {
  type: string;
};

export type UpstashResponse = {
  result: string;
};

export type UpstashScanResponse = {
  result: (string | string[])[];
  error?: string;
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
  stats: Stats[];
  type: string;
  rarity: number;
  iconName: string;
};

export type Monster = {
  name: StringI18n;
  rarity: number;
  loots: Item[];
  iconName: string;
};

export type Spell = {
  name: StringI18n;
  description: StringI18n;
  manaCost: number;
  iconName: string;
};

export type Achievement = {
  name: StringI18n;
  title?: StringI18n;
};

export type QuestResource = {
  name: StringI18n;
  rarity: number;
  iconName: string;
};
