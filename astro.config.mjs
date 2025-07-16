import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeObsidian from "starlight-theme-obsidian";
// https://astro.build/config
export default defineConfig({
  site: "https://sozluk.onrir.dev",
  base: "/",
  integrations: [
    starlight({
      plugins: [starlightThemeObsidian()],
      sidebar: [
        {
          label: "Sözlük",
          // Autogenerate a group of links for the 'constellations' directory.
          autogenerate: { directory: "sozluk" },
        },
      ],
      components: {
        PageTitle: "./src/components/starlight/PageTitle.astro",
      },
      title: "Sözlük",
      pagination: false,
      customCss: ["./src/styles/s.css"],
      sidebar: [
        {
          label: "Sözlük",
          autogenerate: { directory: "sozluk" },
        },
      ],
    }),
  ],
});
