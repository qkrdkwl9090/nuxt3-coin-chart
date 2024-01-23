// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: "/nuxt3-coin-chart/",
  },
  modules: ["nuxt-lodash", "nuxt-primevue"],
  primevue: {
    cssLayerOrder: "tailwind-base, primevue, tailwind-utilities",
    options: {
      ripple: true,
    },
    components: {
      include: ["Button"],
    },
  },
  css: [
    "@/assets/styles/font.scss",
    "primevue/resources/themes/lara-light-green/theme.css",
    "@/assets/styles/main.scss",
    "primeicons/primeicons.css",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
