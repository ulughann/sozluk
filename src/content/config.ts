import { docsSchema, i18nSchema } from "@astrojs/starlight/schema";
import { docsLoader, i18nLoader } from '@astrojs/starlight/loaders';
import { defineCollection, z } from "astro:content";
import { pageThemeObsidianSchema } from "starlight-theme-obsidian/schema";

const extendedSchema = pageThemeObsidianSchema.extend({
  synonyms: z.array(z.string()).optional(),
});

type ExtendedSchema = z.infer<typeof extendedSchema>;

export const collections = {
  docs: defineCollection({
    schema: docsSchema({ extend: extendedSchema }),
  }),
  i18n: defineCollection({ loader: i18nLoader(), schema: i18nSchema() }),
};
