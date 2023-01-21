export const CLOUDFRONT_BASE_URL = 'https://d2lqwktucnc67y.cloudfront.net/';
export const INVITE_LINK =
  'https://discord.com/api/oauth2/authorize?client_id=804548465878237215&scope=applications.commands%20bot&permissions=1428345547856';
export const DBOT_DISCORD_LINK = 'https://discord.gg/BQbVNJfwvj';

export type SidebarContent = { text: string; link: string };
export type Sidebar = Record<string, Record<string, SidebarContent[]>>;
export const SIDEBAR: Sidebar = {
  en: {
    'Getting Started': [{ text: 'Introduction', link: 'en/documentation/introduction' }],
    Features: [
      { text: 'Players', link: 'en/documentation/features/players' },
      { text: 'Currency', link: 'en/documentation/features/currency' },
      { text: 'Items', link: 'en/documentation/features/items' },
      { text: 'Enchanting', link: 'en/documentation/features/enchanting' },
      { text: 'Quests', link: 'en/documentation/features/quests' },
      { text: 'Spells', link: 'en/documentation/features/spells' },
      { text: 'PVE', link: 'en/documentation/features/pve' },
      { text: 'PVP', link: 'en/documentation/features/pvp' },
      { text: 'Servers', link: 'en/documentation/features/servers' },
    ],
    Commands: [
      { text: 'Users', link: 'en/documentation/commands/users' },
      { text: 'Items', link: 'en/documentation/commands/items' },
      { text: 'PVE', link: 'en/documentation/commands/pve' },
      { text: 'PVP', link: 'en/documentation/commands/pvp' },
      { text: 'Quests', link: 'en/documentation/commands/quests' },
      { text: 'Utilities', link: 'en/documentation/commands/utilities' },
    ],
  },
};
