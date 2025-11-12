// docusaurus.config.js
module.exports = {
  title: 'MYRAD Docs',
  tagline: 'Monetize Your Datasets',
  url: 'https://docs.myradhq.xyz',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',
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
        src: 'img/logo.png',
        href: '/',
      },
      items: [
        { to: '/', label: 'Docs', position: 'left' },
        { href: 'https://myradhq.xyz', label: 'Website', position: 'right' },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'Home', to: '/' },
            { label: 'Introduction', to: '/introduction' },
            { label: 'Architecture', to: '/architecture' },
            { label: 'Roadmap', to: '/strategy-roadmap' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'Website', href: 'https://myradhq.xyz' },
            { label: 'Telegram', href: 'https://t.me/+KOAn6WDf7AdmNTI1' },
            { label: 'X (Twitter)', href: 'https://x.com/myrad_hq' },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} MYRAD`,
    },
  },
};
