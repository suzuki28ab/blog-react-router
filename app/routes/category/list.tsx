import { Box, Heading } from "@yamada-ui/react";
import { ArticleList } from "~/components/home/ArticleList";
import { getArticlesByCategory } from "~/services/article";
import type { Route } from "./+types/list";

export async function loader({ params }: Route.LoaderArgs) {
  const { category, page } = params;

  const pageNumber = page ? Number(page) : 1;
  const articles = getArticlesByCategory(category);
  const itemsPerPage = 10;
  const start = (pageNumber - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  return {
    articles: articles.slice(start, end),
    category: category,
    totalPages: Math.ceil(articles.length / itemsPerPage),
    currentPage: pageNumber,
  };
}

export default function CategoryPage({ loaderData }: Route.ComponentProps) {
  const { articles, category, totalPages, currentPage } = loaderData;
  return (
    <Box>
      <Heading as="h1" fontSize="xl" textAlign="center" mb={8}>
        Category: {category}
      </Heading>
      <ArticleList
        articles={articles}
        totalPages={totalPages}
        currentPage={currentPage}
        category={category}
      />
    </Box>
  );
}
