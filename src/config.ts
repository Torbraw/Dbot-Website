export const CLOUDFRONT_BASE_URL = 'https://d2lqwktucnc67y.cloudfront.net/';
export const INVITE_LINK =
  'https://discord.com/api/oauth2/authorize?client_id=804548465878237215&scope=applications.commands%20bot&permissions=1428345547856';

export type SidebarContent = { text: string; link: string };
export type Sidebar = Record<string, Record<string, SidebarContent[]>>;
export const SIDEBAR: Sidebar = {
  en: {
    'Getting Started': [
      { text: 'Introduction', link: 'introduction' },
      { text: 'How to use', link: 'how-to-use' },
    ],
    Basics: [
      { text: 'Players', link: 'basics/players' },
      { text: 'Guilds', link: 'basics/guilds' },
      { text: 'Currency', link: 'basics/currency' },
      { text: 'Items', link: 'basics/items' },
      { text: 'Enchanting', link: 'basics/enchenting' },
      { text: 'Spells', link: 'basics/spells' },
      { text: 'PVE', link: 'basics/pve' },
      { text: 'PVP', link: 'basics/pvp' },
      { text: 'Quests', link: 'basics/quests' },
    ],
  },
};
