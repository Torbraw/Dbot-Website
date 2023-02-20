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
    'Getting Started': [{ text: 'Introduction', link: 'en/documentation/introduction' }],
    Features: [
      { text: 'Players', link: 'en/documentation/features/players' },
      { text: 'Servers', link: 'en/documentation/features/servers' },
      { text: 'Currency', link: 'en/documentation/features/currency' },
      { text: 'Items', link: 'en/documentation/features/items' },
      { text: 'Enchantments', link: 'en/documentation/features/enchantments' },
      { text: 'Spells', link: 'en/documentation/features/spells' },
      { text: 'PVE', link: 'en/documentation/features/pve' },
      { text: 'PVP', link: 'en/documentation/features/pvp' },
      { text: 'Quests', link: 'en/documentation/features/quests' },
      { text: 'Advancements', link: 'en/documentation/features/advancements' },
    ],
  },
  fr: {
    'Bien démarrer': [{ text: 'Introduction', link: 'fr/documentation/introduction' }],
    Fonctionnalités: [
      { text: 'Joueurs', link: 'fr/documentation/features/players' },
      { text: 'Serveurs', link: 'fr/documentation/features/servers' },
      { text: 'Monnaies', link: 'fr/documentation/features/currency' },
      { text: 'Items', link: 'fr/documentation/features/items' },
      { text: 'Enchantements', link: 'fr/documentation/features/enchantments' },
      { text: 'Sorts', link: 'fr/documentation/features/spells' },
      { text: 'PVE', link: 'fr/documentation/features/pve' },
      { text: 'PVP', link: 'fr/documentation/features/pvp' },
      { text: 'Quêtes', link: 'fr/documentation/features/quests' },
      { text: 'Avancements', link: 'fr/documentation/features/advancements' },
    ],
  },
};
