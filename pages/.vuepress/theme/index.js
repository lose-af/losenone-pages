const { path } = require("@vuepress/utils");

module.exports = {
  name: "vuepress-theme-losenone-pages",
  extends: "@vuepress/theme-default",
  layouts: path.resolve(__dirname, "layouts"),
  clientAppEnhanceFiles: path.resolve(__dirname, "clientAppEnhance.js"),
};
