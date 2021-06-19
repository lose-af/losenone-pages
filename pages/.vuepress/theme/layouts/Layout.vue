<template>
  <Layout>
    <template #page-bottom v-if="footer">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div v-if="footerHtml" class="footerHtml" v-html="footer" />
      <div v-else class="footer" v-text="footer" />
    </template>
  </Layout>
</template>

<script>
import { computed } from "vue";

import Layout from "@vuepress/theme-default/lib/client/layouts/Layout.vue";

import { usePageFrontmatter } from "@vuepress/client";
import { useThemeLocaleData } from "@vuepress/theme-default/lib/client/composables";

export default {
  components: {
    Layout,
  },

  setup() {
    const frontmatter = usePageFrontmatter();
    const themeLocale = useThemeLocaleData();

    const footer = computed(
      () => frontmatter.value.footer || themeLocale.value.footer
    );
    const footerHtml = computed(
      () => frontmatter.value.footerHtml || themeLocale.value.footerHtml
    );

    return { footer, footerHtml };
  },
};
</script>
