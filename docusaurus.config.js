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
          routeBasePath: '/',
        },
        blog: false,
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
        href: '/', // Changed back to '/' since we now have docs/index.md
      },
      items: [
        {
          to: '/', // Changed to home page
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
            { label: 'Home', to: '/' }, // Added home link
            { label: 'Introduction', to: '/introduction' }, // Changed label
            { label: 'Architecture', to: '/architecture' },
            { label: 'Roadmap', to: '/strategy-roadmap' },
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