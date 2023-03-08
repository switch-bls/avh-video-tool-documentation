// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Documentation pour AVH VideoTool',
  tagline: 'Toute la documentation relative à AVH VideoTool Web App',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://switch-bls.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/avh-video-tool-documentation/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'switch-bls', // Usually your GitHub org/user name.
  projectName: 'avh-video-tool-documentation', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'http://192.168.1.35:8080/home/docs/videotools-web-app-docs',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'http://192.168.1.35:8080/home/docs/videotools-web-app-docs',
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
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Documentation AVH ViedoTool',
        logo: {
          alt: 'AVH Video Tool Logo White',
          src: 'img/AVH-Video-Tool-Logo-White.svg',
          width: 60,
          height: 60,

        },
        items: [
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/docs/intro', label: 'Documentation', position: 'left'},
          {to: '/docs/category/Installation', label: 'Installation', position: 'left'},
             {to: '/docs/category/Identifiant', label: 'Identifiant', position: 'left'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
           
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} AVH Video Tool`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
