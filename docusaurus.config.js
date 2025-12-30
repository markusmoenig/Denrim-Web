// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

const gruvboxLightTheme = {
  plain: {
    color: "#3c3836",
    backgroundColor: "#fbf1c7",
  },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata"],
      style: { color: "#928374", fontStyle: "italic" },
    },
    {
      types: ["punctuation"],
      style: { color: "#7c6f64" },
    },
    {
      types: ["namespace"],
      style: { color: "#8f3f71" },
    },
    {
      types: ["tag", "constant", "symbol", "deleted", "number", "boolean"],
      style: { color: "#9d0006" },
    },
    {
      types: ["property", "attr-name", "selector"],
      style: { color: "#b57614" },
    },
    {
      types: ["string", "char", "builtin", "inserted"],
      style: { color: "#98971a" },
    },
    {
      types: ["operator", "entity", "url"],
      style: { color: "#d79921" },
    },
    {
      types: ["atrule", "attr-value", "keyword"],
      style: { color: "#458588" },
    },
    {
      types: ["function"],
      style: { color: "#b16286" },
    },
    {
      types: ["variable"],
      style: { color: "#689d6a" },
    },
    {
      types: ["important", "bold"],
      style: { fontWeight: "bold" },
    },
    {
      types: ["italic"],
      style: { fontStyle: "italic" },
    },
  ],
};

const gruvboxDarkTheme = {
  plain: {
    color: "#ebdbb2",
    backgroundColor: "#282828",
  },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata"],
      style: { color: "#928374", fontStyle: "italic" },
    },
    {
      types: ["punctuation"],
      style: { color: "#a89984" },
    },
    {
      types: ["namespace"],
      style: { color: "#d3869b" },
    },
    {
      types: ["tag", "constant", "symbol", "deleted", "number", "boolean"],
      style: { color: "#fb4934" },
    },
    {
      types: ["property", "attr-name", "selector"],
      style: { color: "#fe8019" },
    },
    {
      types: ["string", "char", "builtin", "inserted"],
      style: { color: "#b8bb26" },
    },
    {
      types: ["operator", "entity", "url"],
      style: { color: "#fabd2f" },
    },
    {
      types: ["atrule", "attr-value", "keyword"],
      style: { color: "#83a598" },
    },
    {
      types: ["function"],
      style: { color: "#d3869b" },
    },
    {
      types: ["variable"],
      style: { color: "#8ec07c" },
    },
    {
      types: ["important", "bold"],
      style: { fontWeight: "bold" },
    },
    {
      types: ["italic"],
      style: { fontStyle: "italic" },
    },
  ],
};

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Denrim",
  tagline: "Your Tagline Here",
  favicon: "img/favicon.svg",

  // Set the production url of your site here
  url: "https://denrim.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "markusmoenig", // Usually your GitHub org/user name.
  projectName: "Denrim-Web", // Usually your repo name.

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  headTags: [
    {
      tagName: "link",
      attributes: {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",
      },
    },
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        gtag: {
          trackingID: "G-BT19D6HW3C",
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/eldiron-banner.png",
      navbar: {
        title: "Denrim",
        logo: {
          alt: "Eldiron Logo",
          src: "img/denrim-logo.svg",
          srcDark: "img/denrim-logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Docs",
          },
          { to: "/blog", label: "News", position: "left" },
          { to: "/support", label: "Support", position: "left" },

          {
            type: "html",
            position: "right",
            value: `
              <a href="https://discord.gg/PYknqQ2RBD" class="navbar-icon" title="Eldiron Discord">
                <img src="https://img.shields.io/badge/Discord-Join%20Server-458588?style=flat&logo=discord" alt="Join Discord"/>
              </a>
            `,
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Social",
            items: [
              // {
              //   label: "YouTube",
              //   to: "https://www.youtube.com/channel/UCCmrO356zLQv_m8dPEqBUfA",
              // },
              {
                label: "Discord",
                to: "https://discord.gg/PYknqQ2RBD",
              },
              {
                label: "X",
                to: "https://x.com/MarkusMoenig",
              },
            ],
          },
          {
            title: "Legal",
            items: [
              {
                label: "Privacy Policy",
                to: "/privacy",
              },
            ],
          },
          {
            title: "Documentation",
            items: [
              {
                label: "Denrim: Noise",
                to: "/docs/denrim_noise/getting_started",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Markus Moenig`,
      },
      prism: {
        theme: gruvboxLightTheme,
        darkTheme: gruvboxDarkTheme,
        additionalLanguages: ["toml"],
      },
    }),
};

export default config;
