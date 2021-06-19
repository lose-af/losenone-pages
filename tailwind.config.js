module.exports = {
  mode: "jit",
  purge: {
    content: [`./pages/**/*.@(js|ts|md|vue|html)`],
  },
  corePlugins: {
    preflight: false,
  },
  darkMode: "class",
};
