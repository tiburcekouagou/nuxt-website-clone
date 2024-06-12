<template>
  <!-- <pre>{{ page }}</pre> -->
  <UPage>
    <UPageHeader v-bind="page">
      <template #headline>
        <UBreadcrumb :links="breadcrumb" />
      </template>
    </UPageHeader>

    <UPageBody prose class="">
      <ContentRenderer v-if="page && page.body" :value="page" />

      <hr v-if="surround?.length" />

      <UContentSurround :surround="surround" />
    </UPageBody>
  </UPage>
</template>

<script lang="ts" setup>
import { withoutTrailingSlash } from "ufo";
import type { NavItem } from "@nuxt/content/dist/runtime/types";

const navigation = inject<Ref<NavItem[]>>("navigation");

const route = useRoute();
const { navKeyFromPath } = useContentHelpers();
const { data: page } = await useAsyncData(route.path, () =>
  queryContent(route.path).findOne()
);
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
    fatal: true,
  });
}

const { data: surround } = await useAsyncData(
  `${route.path}-surround`,
  async () => {
    if (page.value) {
      if (page.value.surround === false) {
        return [];
      }

      return queryContent("/docs")
        .where({
          _extension: "md",
          navigation: { $ne: false },
        })
        .without(["body", "excerpt"])
        .findSurround(withoutTrailingSlash(route.path));
    }
  }
);

const breadcrumb = computed(() => {
  const links = mapContentNavigation(
    findPageBreadcrumb(navigation?.value, page.value)
  ).map((link) => ({
    label: link.label,
    to: link.to,
  }));

  if (
    route.path.startsWith("/docs/bridge") ||
    route.path.startsWith("/docs/migration")
  ) {
    links.splice(1, 0, {
      label: "Upgrade Guide",
      to: "/docs/getting-started/upgrade",
    });
  }

  return links;
});
</script>

<style></style>
