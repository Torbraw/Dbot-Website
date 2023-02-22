export const CLOUDFRONT_BASE_URL = 'https://d2lqwktucnc67y.cloudfront.net/';
export const INVITE_LINK =
  'https://discord.com/api/oauth2/authorize?client_id=804548465878237215&scope=applications.commands%20bot&permissions=1428345547856';
export const DBOT_DISCORD_LINK = 'https://discord.gg/BQbVNJfwvj';

export const LANGUAGES = {
  en: 'English',
  fr: 'Français',
};

export type SidebarContent = { text: string; link: string };
export type Sidebar = Record<string, Record<string, SidebarContent[]>>;
export const SIDEBAR: Sidebar = {
  en: {
    'Getting Started': [{ text: 'Introduction', link: 'en/docs/introduction' }],
    Features: [
      { text: 'Players', link: 'en/docs/features/players' },
      { text: 'Servers', link: 'en/docs/features/servers' },
      { text: 'Currency', link: 'en/docs/features/currency' },
      { text: 'Items', link: 'en/docs/features/items' },
      { text: 'Enchantments', link: 'en/docs/features/enchantments' },
      { text: 'Spells', link: 'en/docs/features/spells' },
      { text: 'PVE', link: 'en/docs/features/pve' },
      { text: 'PVP', link: 'en/docs/features/pvp' },
      { text: 'Quests', link: 'en/docs/features/quests' },
      { text: 'Advancements', link: 'en/docs/features/advancements' },
    ],
  },
  fr: {
    'Bien démarrer': [{ text: 'Introduction', link: 'fr/docs/introduction' }],
    Fonctionnalités: [
      { text: 'Joueurs', link: 'fr/docs/features/players' },
      { text: 'Serveurs', link: 'fr/docs/features/servers' },
      { text: 'Monnaies', link: 'fr/docs/features/currency' },
      { text: 'Items', link: 'fr/docs/features/items' },
      { text: 'Enchantements', link: 'fr/docs/features/enchantments' },
      { text: 'Sorts', link: 'fr/docs/features/spells' },
      { text: 'PVE', link: 'fr/docs/features/pve' },
      { text: 'PVP', link: 'fr/docs/features/pvp' },
      { text: 'Quêtes', link: 'fr/docs/features/quests' },
      { text: 'Avancements', link: 'fr/docs/features/advancements' },
    ],
  },
};
