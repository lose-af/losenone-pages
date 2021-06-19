const { path } = require("@vuepress/utils");

module.exports = {
  head: [
    ["link", { rel: "icon", href: "/images/logo.png" }],
    [
      "script",
      {},
      '(function(d){var config={kitId:\'pzl5zkl\',scriptTimeout:3000,async:true},h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\\bwf-loading\\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src=\'https://use.typekit.net/\'+config.kitId+\'.js\';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)})(document);',
    ],
  ],
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
  theme: path.resolve(__dirname, "./theme"),
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

        footer: "吉ICP备2021002465号",

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
                "/docs/event/2020-06-15-1st_fan_literature.md",
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

        footer: "吉ICP备2021002465号",

        notFound: ["4 ! 0 ! 4 !"],
        backToHome: "Back to home",
        openInNewWindow: "open in new window",

        navbar: [
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
                "/docs/event/2020-06-15-1st_fan_literature.md",
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
