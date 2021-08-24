import type { SidebarConfig } from "@vuepress/theme-default";

export const en: SidebarConfig = {
  "/en/docs/knowledge_base/": [
    {
      text: "Knowledge Base",
      link: "/en/docs/knowledge_base/",
      children: [
        "/en/docs/knowledge_base/",
        "/en/docs/knowledge_base/server_command.md",
        "/en/docs/knowledge_base/skin_tutorial.md",
      ],
    },
  ],
  "/en/docs/fanwork/": [
    {
      text: "Fanwork",
      link: "/docs/fanwork/",
      children: [
        "/en/docs/fanwork/",
        "/en/docs/fanwork/1.md",
        "/en/docs/fanwork/2.md",
        "/en/docs/fanwork/3.md",
      ],
    },
  ],
  "/en/docs/event/": [
    {
      text: "Event",
      link: "/docs/event/",
      children: [
        "/en/docs/event/",
        "/en/docs/event/2020-06-15-1st_fan_literature.md",
        "/en/docs/event/spark_project.md",
      ],
    },
  ],
  "/en/docs/join/": [
    {
      text: "Joining Losenone",
      link: "/docs/join/",
      children: [
        "/en/docs/join/",
        "/docs/join/read_documents.md",
        "/en/docs/join/qq_group.md",
        "/en/docs/join/why.md",
        "/en/docs/join/recheck.md",
        "/en/docs/join/fill_form.md",
        "/en/docs/join/success.md",
      ],
    },
  ],
  "/en/docs/public_files/": [
    {
      text: "Public Files",
      link: "/docs/public_files/",
      children: [
        "/en/docs/public_files/",
        "/en/docs/public_files/moderation_rules.md",
        "/en/docs/public_files/review_rules.md",
        "/en/docs/public_files/guild_rules.md",
      ],
    },
  ],
};
