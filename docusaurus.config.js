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
  title: "Denrim: Forge",
  tagline: "Low-poly modeling, from idea to motion",
  favicon: "img/forge-favicon-32.png",

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
    { tagName: "link", attributes: { rel: "apple-touch-icon", sizes: "180x180", href: "/img/forge-apple-touch-icon.png" } },
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
          blogTitle: "News",
          blogDescription: "Development news and release notes for Denrim: Forge.",
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
      colorMode: {
        respectPrefersColorScheme: true,
      },
      // Replace with your project's social card
      image: "img/forge-banner.png",
      navbar: {
        title: "Denrim: Forge",
        logo: { alt: "Denrim: Forge", src: "img/forge-icon.png" },
        items: [
          { to: "/#gallery", label: "Gallery", position: "right" },
          { to: "/#features", label: "Features", position: "right" },
          { to: "/docs/denrim_forge/getting-started", label: "Manual", position: "right" },
          { href: "https://community.denrim.com", label: "Forum", position: "right", className: "forge-community-link" },
          { href: "https://discord.gg/PYknqQ2RBD", label: "Discord", position: "right", className: "forge-community-link" },
          { to: "/#get-forge", label: "Get Forge", position: "right", className: "forge-download-link" },
        ],
      },
      footer: {
        style: "dark",
        links: [
          { title: "Denrim: Forge", items: [
            { label: "Get Forge", to: "/#get-forge" },
            { label: "Manual", to: "/docs/denrim_forge/getting-started" },
            { label: "News", to: "/blog" },
          ] },
          { title: "Community", items: [
            { label: "Forum", href: "https://community.denrim.com" },
            { label: "Discord", href: "https://discord.gg/PYknqQ2RBD" },
            { label: "YouTube", href: "https://www.youtube.com/@DenrimApps" },
          ] },
          { title: "More", items: [
            { label: "Support", to: "/support" },
            { label: "Privacy Policy", to: "/privacy" },
            { label: "Denrim: Noise", to: "/noise" },
          ] },
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
