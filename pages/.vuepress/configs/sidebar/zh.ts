import type { SidebarConfig } from "@vuepress/theme-default";

export const zh: SidebarConfig = {
  "/docs/knowledge_base/": [
    {
      text: "知识库",
      link: "/docs/knowledge_base/",
      children: [
        "/docs/knowledge_base/",
        "/docs/knowledge_base/server_command.md",
        "/docs/knowledge_base/skin_tutorial.md",
      ],
    },
  ],
  "/docs/event/": [
    {
      text: "活动",
      link: "/docs/event/",
      children: [
        "/docs/event/",
        "/docs/event/2021.1001-2nd_fanwork.md",
        "/docs/event/2021.615-1st_fan_literature.md",
        "/docs/event/spark_project.md",
      ],
    },
  ],
  "/docs/fanwork/": [
    {
      text: "同人作品",
      link: "/docs/fanwork/",
      children: [
        "/docs/fanwork/",
        "/docs/fanwork/1.md",
        "/docs/fanwork/2.md",
        "/docs/fanwork/3.md",
        "/docs/fanwork/4.md",
      ],
    },
  ],
  "/docs/join/": [
    {
      text: "审核指南",
      link: "/docs/join/",
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
      children: [
        "/docs/public_files/",
        "/docs/public_files/moderation_rules.md",
      ],
    },
  ],
};
