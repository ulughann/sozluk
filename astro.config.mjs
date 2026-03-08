import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeObsidian from "starlight-theme-obsidian";
import starlightLinksValidator from "starlight-links-validator";
// https://astro.build/config
export default defineConfig({
  site: "https://sozluk.ulug.tr",
  base: "/",
  integrations: [
    starlight({
      favicon: "./src/assets/favicon.svg",
      logo: {
        dark: "./src/assets/dark.png",
        light: "./src/assets/light.png",
        replacesTitle: true,
      },

      defaultLocale: "root",
      locales: {
        root: {
          label: "English",
          lang: "en",
        },
      },
      plugins: [
        starlightThemeObsidian({
          graphConfig: {
            depth: 4,
            colliderPadding: 0,
            centerForce: 0,
            enableHover: true,
            renderArrows: true,
            arrowSize: 3,
          },
        }),

        starlightLinksValidator(),
      ],
      sidebar: [
        {
          label: "Common Turkic",
          autogenerate: { directory: "sozluk" },
        },
      ],
      components: {
        PageTitle: "./src/components/starlight/PageTitle.astro",
        MarkdownContent: "./src/components/starlight/MarkdownContent.astro",
      },
      title: "Common Turkic Dictionary",
      pagination: false,
      customCss: ["./src/styles/s.css"],
      sidebar: [
        {
          label: "Articles",
          autogenerate: { directory: "yazilar" },
          collapsed: false,
        },
        {
          label: "Common Turkic",
          autogenerate: { directory: "sozluk" },
          collapsed: true,
        },
        {
          label: "Affixes",
          autogenerate: { directory: "ekler" },
          collapsed: true,
        },
      ],
    }),
  ],
});
