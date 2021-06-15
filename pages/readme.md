---
home: true
heroText: 洛书南
tagline: Minecraft 服务器
title: 首页
lang: zh-CN
---

<div class="px-8 py-6 text-lg text-center text-green-800 bg-green-100 border border-green-600 border-solid rounded-lg">
<a class="text-green-800" href="./docs/event/2020-06-15-洛书南社区_首次同人文投稿活动.md">洛书南社区 | 首次同人文投稿活动</a>
</div>

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
