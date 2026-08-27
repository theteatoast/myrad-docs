// docusaurus.config.js
module.exports = {
  title: 'MYRAD Docs',
  tagline: 'Proof-verified human data, private by default',
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
        { to: '/talk-to-myrad/overview', label: 'Talk to Myrad', position: 'left' },
        { href: 'https://myradhq.xyz', label: 'Website', position: 'right' },
      ],
    },

    footer: {
      links: [
        {
          title: 'Documentation',
          items: [
            { label: 'Home', to: '/' },
            { label: 'How It Works', to: '/how-it-works' },
            { label: 'Token & Staking', to: '/token' },
            { label: 'For Enterprises', to: '/for-enterprises' },
          ],
        },
        {
          title: 'Talk to Myrad',
          items: [
            { label: 'Overview', to: '/talk-to-myrad/overview' },
            { label: 'Getting Access', to: '/talk-to-myrad/getting-access' },
            { label: 'Credits & Billing', to: '/talk-to-myrad/credits' },
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
