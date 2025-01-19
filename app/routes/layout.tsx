import { Box } from "@yamada-ui/react";
import { Outlet } from "react-router";
import { Header } from "~/components/layout/Header";
import { getAllArticles } from "~/services/article";
import type { Route } from "./+types/layout";

export async function loader() {
  const articles = getAllArticles();
  const categories = [...new Set(articles.map(a => a.category))];
  const tags = [...new Set(articles.flatMap(a => a.tags ?? []))];
  return { categories, tags };
}

export default function Layout({ loaderData }: Route.ComponentProps) {
  const { categories, tags } = loaderData;
  return (
    <Box>
      <Header categories={categories} tags={tags} />
      <Box as="main">
        <Outlet />
      </Box>
    </Box>
  );
}
