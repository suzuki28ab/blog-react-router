import { Box } from "@yamada-ui/react";
import { getAllArticles } from "~/services/article";
import { ArticleList } from "../components/home/ArticleList";
import { Hero } from "../components/home/Hero";
import type { Route } from "./+types/home";

export async function loader() {
  return {
    articles: getAllArticles(),
  };
}

export default function HomePage({ loaderData }: Route.ComponentProps) {
  const { articles } = loaderData;
  return (
    <Box>
      <Hero />
      <ArticleList articles={articles} />
    </Box>
  );
}
