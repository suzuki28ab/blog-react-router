import mdx from "@mdx-js/rollup";
import { reactRouter } from "@react-router/dev/vite";
import rehypeShiki from "@shikijs/rehype";
import autoprefixer from "autoprefixer";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  plugins: [
    {
      enforce: "pre",
      ...mdx({
        providerImportSource: "@mdx-js/react",
        remarkPlugins: [[remarkFrontmatter], [remarkMdxFrontmatter]],
        rehypePlugins: [
          [
            rehypeShiki,
            {
              themes: {
                light: "github-light-default",
                dark: "github-dark-default",
              },
            },
          ],
        ],
      }),
    },
    reactRouter(),
    tsconfigPaths(),
  ],
});
