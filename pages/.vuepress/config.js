module.exports = {
  locales: {
    "/": {
      lang: "zh-CN",
      title: "洛书南",
      description: "洛书南 Minecraft 服务器",
    },
    "/en/": {
      lang: "en-US",
      title: "Losenone",
      description: "Losenone Minecraft Server",
    },
  },
  themeConfig: {
    repo: "lose-af/losenone-pages",
    docsDir: "pages",
    docsBranch: "main",
    editLink: true,
    contributors: false,
    locales: {
      "/": {
        lang: "zh-CN",
        selectLanguageName: "简体中文",
        selectLanguageText: "选择语言",
        selectLanguageAriaLabel: "选择语言",

        editLinkText: "在 GitHub 上编辑此页",
        repoLabel: "文档源代码",
        lastUpdatedText: "最后更新",

        notFound: ["4 ! 0 ! 4 !"],
        backToHome: "返回主页",
        openInNewWindow: "在新窗口中打开",

        navbar: [{ text: "文档", link: "/docs/" }],

        sidebar: [
          {
            text: "审核指南",
            link: "/docs/join/",
            isGroup: true,
            children: [
              "/docs/join/",
              "/docs/join/qq_group.md",
              "/docs/join/read_documents.md",
              "/docs/join/why.md",
              "/docs/join/fill_form.md",
            ],
          },
          {
            text: "公开文件",
            link: "/docs/public_files/",
            isGroup: true,
            children: [
              "/docs/public_files/moderation_rules.md",
              "/docs/public_files/review_rules.md",
              "/docs/public_files/guild_rules.md",
            ],
          },
          {
            text: "知识库",
            link: "/docs/",
            isGroup: true,
            children: ["/docs/"],
          },
        ],
      },
      "/en/": {
        lang: "en-US",
        selectLanguageName: "English",
        selectLanguageText: "Languages",
        selectLanguageAriaLabel: "Languages",

        editLinkText: "Edit this page on GitHub",
        repoLabel: "Source",
        lastUpdatedText: "Last Updated",

        notFound: ["4 ! 0 ! 4 !"],
        backToHome: "Back to home",
        openInNewWindow: "open in new window",

        navbar: [{ text: "Docs", link: "/docs/" }],

        sidebar: [
          {
            text: "Join Losenone",
            link: "/docs/join/",
            isGroup: true,
            children: [
              "/docs/join/",
              "/docs/join/qq_group.md",
              "/docs/join/read_documents.md",
              "/docs/join/why.md",
              "/docs/join/fill_form.md",
            ],
          },
          {
            text: "Public Files",
            link: "/docs/public_files/",
            isGroup: true,
            children: [
              "/docs/public_files/moderation_rules.md",
              "/docs/public_files/review_rules.md",
              "/docs/public_files/guild_rules.md",
            ],
          },
          {
            text: "Knowledge Base",
            link: "/docs/",
            isGroup: true,
            children: ["/docs/"],
          },
        ],
      },
    },
  },
};
