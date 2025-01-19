import { Box, Heading } from "@yamada-ui/react";
import { type LoaderFunctionArgs, useLoaderData } from "react-router";
import { ArticleList } from "~/components/home/ArticleList";
import { getArticlesByCategory } from "~/services/article";

export async function loader({ params }: LoaderFunctionArgs) {
  const { category, page } = params;
  if (!category) throw new Error("Category is required");

  const pageNumber = page ? Number(page) : 1;
  const articles = getArticlesByCategory(decodeURIComponent(category));
  const itemsPerPage = 10;
  const start = (pageNumber - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  return {
    articles: articles.slice(start, end),
    category: decodeURIComponent(category),
    totalPages: Math.ceil(articles.length / itemsPerPage),
    currentPage: pageNumber,
  };
}

export default function CategoryPage() {
  const { articles, category } = useLoaderData<typeof loader>();

  return (
    <Box>
      <Heading as="h1" fontSize="4xl" textAlign="center" mb={8}>
        Category: {category}
      </Heading>
      <ArticleList articles={articles} />
    </Box>
  );
}
