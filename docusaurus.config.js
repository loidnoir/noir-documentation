// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Noir docs',
  tagline: 'Noir bot documentation.',
  favicon: '/static/img/dark-logo.svg',
  url: 'https://docs.noirbot.live/',

  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/'
        },
        blog: {
          blogSidebarTitle: 'Changelog',
          routeBasePath: '/changelog',
          showReadingTime: true,
          postsPerPage: 10,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: '/img/social-card.svg',
      navbar: {
        title: 'Noir Docs',
        logo: {
          alt: 'Noir docs logo',
          src: 'img/dark-logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {
            to: '/changelog',
            position: 'left',
            label: 'Changelog',
          },
          {
            href: 'https://discord.gg/n4ywtU3F3p',
            label: 'Discord', 
            position: 'right'
          },
          {
            href: 'https://github.com/noir-development/',
            label: 'GitHub',
            position: 'right',
          },
          {
            'href': 'https://discord.com/api/oauth2/authorize?client_id=855423971033874462&permissions=1635070110934&scope=bot%20applications.commands',
            'label': 'Invite Noir',
            position: 'left'
          }
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Noir Bot.`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      },
    }),
};

module.exports = config;
