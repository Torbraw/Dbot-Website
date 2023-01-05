export const CLOUDFRONT_BASE_URL = 'https://d2lqwktucnc67y.cloudfront.net/';
export const INVITE_LINK =
  'https://discord.com/api/oauth2/authorize?client_id=804548465878237215&scope=applications.commands%20bot&permissions=1428345547856';
export const DBOT_DISCORD_LINK = 'https://discord.gg/BQbVNJfwvj';

export type SidebarContent = { text: string; link: string };
export type Sidebar = Record<string, Record<string, SidebarContent[]>>;
export const SIDEBAR: Sidebar = {
  en: {
    'Getting Started': [
      { text: 'Introduction', link: 'en/documentation/introduction' },
      { text: 'How to use', link: 'en/documentation/how-to-use' },
    ],
    Basics: [
      { text: 'Players', link: 'en/documentation/basics/players' },
      { text: 'Guilds', link: 'en/documentation/basics/guilds' },
      { text: 'Currency', link: 'en/documentation/basics/currency' },
      { text: 'Items', link: 'en/documentation/basics/items' },
      { text: 'Enchanting', link: 'en/documentation/basics/enchanting' },
      { text: 'Spells', link: 'en/documentation/basics/spells' },
      { text: 'PVE', link: 'en/documentation/basics/pve' },
      { text: 'PVP', link: 'en/documentation/basics/pvp' },
      { text: 'Quests', link: 'en/documentation/basics/quests' },
    ],
  },
};
