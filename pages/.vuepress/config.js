module.exports = {
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    // 侧边栏
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
        title: "公开文件",
        path: "/docs/public_files/",
        sidebarDepth: 2,
        children: [
          "/docs/public_files/moderation_rules",
          "/docs/public_files/review_rules",
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

    // 导航栏
    nav: [
      { text: "首页", link: "/" },
      { text: "文档", link: "/docs/" },
      { text: "Google", link: "https://google.com" },
    ],

    // 代码仓库设置
    repo: "lose-af/losenone-pages",
    repoLabel: "查看源代码",
    docsDir: "pages",
    docsBranch: "main",
    editLinks: true,
    editLinkText: "帮助我们改善此页面！",

    // 最后更新时间
    lastUpdated: "最后更新时间",
  },
};
