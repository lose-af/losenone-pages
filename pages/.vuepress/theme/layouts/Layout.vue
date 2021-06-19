<template>
  <Layout>
    <template #page-bottom>
      <div class="siteFooter" v-if="siteFooter">{{ siteFooter }}</div>
    </template>
  </Layout>
</template>

<script>
import { computed } from "vue";

import Layout from "@vuepress/theme-default/lib/client/layouts/Layout.vue";

import { useThemeLocaleData } from "@vuepress/theme-default/lib/client/composables";

export default {
  components: {
    Layout,
  },

  setup() {
    const themeLocale = useThemeLocaleData();
    const siteFooter = computed(() => themeLocale.value.siteFooter);
    console.log(siteFooter);

    return { siteFooter };
  },
};
</script>
