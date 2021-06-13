---
home: true
heroText: 洛书南
tagline: Minecraft 服务器
title: 首页
lang: zh-CN
---

::: tip
这里是洛书南 Minecraft 服务器的官网和文档, 不过现在还没有内容.
:::

```json{11-12}
{
  "name": "losenone-pages",
  "version": "1.0.0",
  "description": "Losenone Minecraft Server",
  "repository": "git@github.com:lose-af/losenone-pages.git",
  "author": "Losenone",
  "license": "MIT",
  "private": false,
  "main": "index.js",
  "scripts": {
    "pages:dev": "vuepress dev pages",
    "pages:build": "vuepress build pages"
  },
  "devDependencies": {
    "vuepress": "^2.0.0-beta.18"
  }
}
```
