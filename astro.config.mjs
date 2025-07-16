import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightSiteGraph from "starlight-site-graph";
// https://astro.build/config
export default defineConfig({
  plugins: [starlightSiteGraph()],
  integrations: [
    starlight({
      sidebar: [
        {
          label: "Sözlük",
          // Autogenerate a group of links for the 'constellations' directory.
          autogenerate: { directory: "sozluk" },
        },
      ],
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
