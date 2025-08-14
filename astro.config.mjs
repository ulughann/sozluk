import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeObsidian from "starlight-theme-obsidian";
import mermaid from "astro-mermaid";
import starlightLinksValidator from "starlight-links-validator";
// https://astro.build/config
export default defineConfig({
  site: "https://sozluk.ulug.tr",
  base: "/",
  integrations: [
    mermaid({
      theme: "forest",
      autoTheme: true,
    }),
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
          label: "Türkçe",
          lang: "tr",
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
          label: "Bilgin Sözlük",
          autogenerate: { directory: "sozluk" },
        },
      ],
      components: {
        PageTitle: "./src/components/starlight/PageTitle.astro",
        MarkdownContent: "./src/components/starlight/MarkdownContent.astro",
      },
      title: "Bilgin Sözlük",
      pagination: false,
      customCss: ["./src/styles/s.css"],
      sidebar: [
        {
          label: "Yazılar",
          autogenerate: { directory: "yazilar" },
          collapsed: false,
        },
        {
          label: "Türkiye Türkçesi",
          autogenerate: { directory: "sozluk" },
          collapsed: true,
        },
        {
          label: "Ekler",
          autogenerate: { directory: "ekler" },
          collapsed: true,
        },
        {
          label: "Ön Türkçe",
          autogenerate: { directory: "pt" },
          collapsed: true,
        },
      ],
    }),
  ],
});
