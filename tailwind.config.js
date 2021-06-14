module.exports = {
  purge: {
    content: [`./pages/**/*.@(js|ts|md|vue|html)`],
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
};
