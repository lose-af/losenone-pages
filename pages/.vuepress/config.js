module.exports = {
  head: [["link", { rel: "icon", href: "/images/logo.png" }]],
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
    logo: "/images/logo.png",
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

        navbar: [
          { text: "知识库", link: "/docs/knowledge_base/" },
          { text: "活动", link: "/docs/event/" },
          { text: "加入我们", link: "/docs/join/" },
          { text: "公开文件", link: "/docs/public_files/" },
        ],

        sidebar: {
          "/docs/knowledge_base/": [
            {
              text: "知识库",
              link: "/docs/knowledge_base/",
              isGroup: true,
              children: [
                "/docs/knowledge_base/",
                "/docs/knowledge_base/server_command.md",
              ],
            },
          ],
          "/docs/event/": [
            {
              text: "活动",
              link: "/docs/event/",
              isGroup: true,
              children: [
                "/docs/event/",
                "/docs/event/2020-06-15-洛书南社区_首次同人文投稿活动.md",
              ],
            },
          ],
          "/docs/join/": [
            {
              text: "审核指南",
              link: "/docs/join/",
              isGroup: true,
              children: [
                "/docs/join/",
                "/docs/join/read_documents.md",
                "/docs/join/qq_group.md",
                "/docs/join/why.md",
                "/docs/join/recheck.md",
                "/docs/join/fill_form.md",
                "/docs/join/success.md",
              ],
            },
          ],
          "/docs/public_files/": [
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
          ],
        },
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

        nav: [
          { text: "Knowledge Base", link: "/en/docs/knowledge_base/" },
          { text: "Event", link: "/en/docs/event/" },
          { text: "Join Us", link: "/en/docs/join/" },
          { text: "Public Files", link: "/en/docs/public_files/" },
        ],

        sidebar: {
          "/en/docs/knowledge_base/": [
            {
              text: "Knowledge Base",
              link: "/en/docs/knowledge_base/",
              isGroup: true,
              children: [
                "/en/docs/knowledge_base/",
                "/en/docs/knowledge_base/server_command.md",
              ],
            },
          ],
          "/en/docs/event/": [
            {
              text: "Event",
              link: "/docs/event/",
              isGroup: true,
              children: [
                "/en/docs/event/",
                "/docs/event/2020-06-15-洛书南社区_首次同人文投稿活动.md",
              ],
            },
          ],
          "/en/docs/join/": [
            {
              text: "Joining Losenone",
              link: "/docs/join/",
              isGroup: true,
              children: [
                "/docs/join/",
                "/docs/join/read_documents.md",
                "/docs/join/qq_group.md",
                "/docs/join/why.md",
                "/docs/join/recheck.md",
                "/docs/join/fill_form.md",
                "/docs/join/success.md",
              ],
            },
          ],
          "/en/docs/public_files/": [
            {
              text: "Public Files",
              link: "/docs/public_files/",
              isGroup: true,
              children: [
                "/docs/public_files/moderation_rules.md",
                "/docs/public_files/review_rules.md",
                "/en/docs/public_files/guild_rules.md",
              ],
            },
          ],
        },
      },
    },
  },
  bundler: "@vuepress/webpack",
  bundlerConfig: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
};
