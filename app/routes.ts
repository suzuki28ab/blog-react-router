import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

const articleRoutes = Object.keys(
  import.meta.glob("./routes/articles/**/*.{md,mdx}", {
    query: "?url",
    eager: true,
  })
)
  .map((file) => {
    return {
      path: file
        .replace("./routes/articles/", "articles/")
        .replace(/\.(mdx|md)$/, ""),
      file,
    };
  })
  .map(({ path, file }) => route(path, file));

export default [
  layout("routes/layout.tsx", [
    index("routes/home.tsx"),
    route("category/:category/:page", "routes/category/list.tsx"),
    route("tag/:tag/:page", "routes/tag/list.tsx"),
    layout("components/layout/ArticleLayout.tsx", articleRoutes),
  ]),
] satisfies RouteConfig;
