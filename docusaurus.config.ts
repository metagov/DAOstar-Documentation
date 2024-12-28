import {themes as prismThemes} from 'prism-react-renderer';
import Link from '@docusaurus/Link';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'DAOstar',
  tagline: 'Standards are cool',
  favicon: 'img/daostar.png',

  // Set the production url of your site here
  url: 'https://daostar-public-docs.onrender.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'metagov', // Usually your GitHub org/user name.
  projectName: 'DAOstar-Documentation', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/metagov/DAOstar-Documentation',
        },
        blog: false,
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/metagov/DAOstar-Documentation',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/daostar.png',
    navbar: {
      title: 'DAOstar',
      logo: {
        alt: 'DAOstar Logo',
        src: 'img/daostar.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/metagov/DAOstar-Documentation',
          label: 'GitHub',
          position: 'right',
        },
        
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Documentation',
              to: '/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.com/invite/PdrPkEZVFk',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/daostar',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/metagov/DAOstar-Documentation',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} DAOstar by MetaGov. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.oneLight,
      darkTheme: prismThemes.duotoneDark,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
