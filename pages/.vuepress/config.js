module.exports = {
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    sidebar: [
      {
        title: "首页",
        path: "/",
        sidebarDepth: 0,
      },
      {
        title: "审核指南",
        path: "/docs/join/",
        sidebarDepth: 0,
        children: [
          "/docs/join/",
          "/docs/join/qq_group",
          "/docs/join/read_documents",
          "/docs/join/why",
          "/docs/join/fill_form",
        ],
      },
      {
        title: "洛书南文档",
        path: "/docs/",
        sidebarDepth: 2,
        collapsable: false,
        children: ["/docs/"],
      },
    ],
    nav: [
      { text: "首页", link: "/" },
      { text: "文档", link: "/docs/" },
      { text: "Google", link: "https://google.com" },
    ],
  },
};
