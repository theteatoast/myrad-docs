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
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
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
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'Home', to: '/' },
            { label: 'Problem Statement', to: '/problem-statement' },
            { label: 'Architecture', to: '/tech-stack' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'Website', href: 'https://myradhq.xyz' },
            { label: 'Telegram', href: 'https://t.me/+d0dhyHWulJU4NTc1' },
            { label: 'X (Twitter)', href: 'https://x.com/myrad_hq' },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} MYRAD`,
    },
  },
};
