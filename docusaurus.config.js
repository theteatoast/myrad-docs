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
            { label: 'Overview', to: '/' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'Website', href: 'https://myradhq.xyz' },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} MYrAD`,
    },
  },
};
