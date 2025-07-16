import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({

  integrations: [
    starlight({
      defaultLocale: "tr",
      locales: {
        tr: {
          label: "Türkçe",
        },
      },
      tableOfContents: false,
      title: "Sözlük",
      pagination: false,
      customCss: ["./src/styles/s.css"],
      components: {
        Head: "./src/components/starlight/Head.astro",
        Sidebar: "./src/components/starlight/Sidebar.astro",
      },

      sidebar: [
        {
          label: "Sözlük",
          autogenerate: { directory: "sozluk" },
        },
      ],
    }),
  ],
});
