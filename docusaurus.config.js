// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Noir docs',
  tagline: 'Noir discord bot docs',
  favicon: 'img/logo.png',

  url: 'https://noir-docs.vercel.app/',

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
          showReadingTime: true,
          routeBasePath: '/changelog',
          postsPerPage: 10,
          blogSidebarTitle: 'Changelog',
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
      // Replace with your project's social card
      image: 'img/logo.png',
      navbar: {
        title: 'Noir Docs',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
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
        copyright: `Copyright © ${new Date().getFullYear()} Noir Dev.`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      },
    }),
};

module.exports = config;
