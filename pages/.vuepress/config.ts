import { defineUserConfig } from "@vuepress/cli";
import type { DefaultThemeOptions } from "vuepress";
import { path } from "@vuepress/utils";
import { sidebar } from "./configs";

export default defineUserConfig<DefaultThemeOptions>({
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

        footer:
          '<div class="footer"><a href="https://beian.miit.gov.cn/">吉ICP备2021002465号</a></div>',
        footerHtml: true,

        notFound: ["4 ! 0 ! 4 !"],
        backToHome: "返回主页",
        openInNewWindow: "在新窗口中打开",

        navbar: [
          { text: "知识库", link: "/docs/knowledge_base/" },
          { text: "活动", link: "/docs/event/" },
          { text: "同人作品", link: "/docs/fanwork/" },
          { text: "加入我们", link: "/docs/join/" },
          { text: "公开文件", link: "/docs/public_files/" },
          { text: "皮肤站", link: "https://my.losenone.cn/" },
        ],

        sidebar: sidebar.zh,
      },
      "/en/": {
        lang: "en-US",
        selectLanguageName: "English",
        selectLanguageText: "Languages",
        selectLanguageAriaLabel: "Languages",

        editLinkText: "Edit this page on GitHub",
        repoLabel: "Source",
        lastUpdatedText: "Last Updated",

        footer:
          '<div class="footer"><a href="https://beian.miit.gov.cn/">吉ICP备2021002465号</a></div>',
        footerHtml: true,

        notFound: ["4 ! 0 ! 4 !"],
        backToHome: "Back to home",
        openInNewWindow: "open in new window",

        navbar: [
          { text: "Knowledge Base", link: "/en/docs/knowledge_base/" },
          { text: "Event", link: "/en/docs/event/" },
          { text: "Fanwork", link: "/en/docs/fanwork/" },
          { text: "Join Us", link: "/en/docs/join/" },
          { text: "Public Files", link: "/en/docs/public_files/" },
          { text: "Account", link: "https://my.losenone.cn/" },
        ],

        sidebar: sidebar.en,
      },
    },
  },
  plugins: [
    [
      "@vuepress/plugin-docsearch",
      {
        apiKey: "ab9a88200fe23a2f73826c25da74cefe",
        indexName: "losenone",
        searchParameters: {
          facetFilters: ["tags:production"],
        },
        appId: "8JNRU9AKFF",
        locales: {
          "/": {
            placeholder: "搜索文档",
          },
          "/en/": {
            placeholder: "Search Documentation",
          },
        },
      },
    ],
  ],
  bundler: "@vuepress/vite",
  bundlerConfig: {
    /**
     * @type {import('vite').UserConfig}
     */
    viteOptions: {
      css: {
        postcss: {
          plugins: [require("tailwindcss"), require("autoprefixer")],
        },
      },
    },
  },
});
