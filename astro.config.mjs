import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeObsidian from "starlight-theme-obsidian";
import starlightLinksValidator from 'starlight-links-validator'
// https://astro.build/config
export default defineConfig({
  site: "https://sozluk.onrir.dev",
  base: "/",
  integrations: [
    starlight({
      defaultLocale: "root",
      locales: {
        root: {
          label: "Türkçe",
          lang: "tr",
        },
      },
      plugins: [
        starlightThemeObsidian(),
        starlightLinksValidator()
      ],
      sidebar: [
        {
          label: "Bilgin Sözlük",
          autogenerate: { directory: "sozluk" },
        },
      ],
      components: {
        PageTitle: "./src/components/starlight/PageTitle.astro",
        MarkdownContent: "./src/components/starlight/MarkdownContent.astro"
      },
      title: "Sözlük",
      pagination: false,
      customCss: ["./src/styles/s.css"],
      sidebar: [
        {
          label: "Yazılar",
          autogenerate: { directory: "yazilar" },
          collapsed: false
        },
        {
          label: "Sözlük",
          autogenerate: { directory: "sozluk" },
          collapsed: true,
        },
        {
          label: "Ekler",
          autogenerate: { directory: "ekler" },
          collapsed: true,
        },
      ],
    }),
  ],
});
