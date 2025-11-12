// docusaurus.config.js
module.exports = {
  title: 'MYRAD Docs',
  tagline: 'Monetize Your Datasets',
  url: 'https://docs.myradhq.xyz',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'myrad',
  projectName: 'myrad-docs',

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/', // serve docs at site root
          editUrl: 'https://github.com/myrad/myrad-docs/edit/main/', // optional, for edit links
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'MYRAD',
      logo: {
        alt: 'MYRAD Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'introduction', // link to docs home page instead of /
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://myradhq.xyz',
          label: 'Website',
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
            // link to your first doc file instead of /
            { label: 'Overview', to: 'introduction' },
            { label: 'Architecture', to: 'architecture' },
            { label: 'Roadmap', to: 'strategy-roadmap' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'Website', href: 'https://myradhq.xyz' },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} MYRAD`,
    },
  },
};
