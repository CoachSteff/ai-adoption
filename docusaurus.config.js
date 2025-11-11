// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Open-Source AI Adoption Playbook',
  tagline: 'A comprehensive, human-centric framework for AI adoption in EU enterprises',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://coachsteff.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/ai-adoption/',

  // GitHub pages deployment config.
  organizationName: 'CoachSteff',
  projectName: 'ai-adoption',

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
          editUrl: 'https://github.com/CoachSteff/ai-adoption/tree/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: false,
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
        title: 'AI Adoption Playbook',
        logo: {
          alt: 'AI Adoption Playbook Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://github.com/CoachSteff/ai-adoption',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/getting-started/overview',
              },
              {
                label: 'Governance & Compliance',
                to: '/docs/governance-compliance/overview',
              },
              {
                label: 'Human-Centric Adoption',
                to: '/docs/human-centric-adoption/overview',
              },
              {
                label: 'Adoption Engine',
                to: '/docs/adoption-engine/overview',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Checklists & Templates',
                to: '/docs/checklists-templates/overview',
              },
              {
                label: 'Case Studies',
                to: '/docs/case-studies',
              },
              {
                label: 'Contributing',
                to: '/contributing/guidelines',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/CoachSteff/ai-adoption',
              },
              {
                label: 'Discussions',
                href: 'https://github.com/CoachSteff/ai-adoption/discussions',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Open-Source AI Adoption Playbook. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

