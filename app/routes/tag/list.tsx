import { Box, Heading } from "@yamada-ui/react";
import { ArticleList } from "~/components/home/ArticleList";
import { getArticlesByTag } from "~/services/article";
import type { Route } from "./+types/list";

export async function loader({ params }: Route.LoaderArgs) {
  const { tag, page } = params;

  const pageNumber = page ? Number(page) : 1;
  const articles = getArticlesByTag(tag);
  const itemsPerPage = 10;
  const start = (pageNumber - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  return {
    articles: articles.slice(start, end),
    tag: tag,
    totalPages: Math.ceil(articles.length / itemsPerPage),
    currentPage: pageNumber,
  };
}

export default function TagPage({ loaderData }: Route.ComponentProps) {
  const { articles, tag } = loaderData;

  return (
    <Box>
      <Heading as="h1" fontSize="xl" textAlign="center" mb={8}>
        Tag: {tag}
      </Heading>
      <ArticleList articles={articles} />
    </Box>
  );
}
