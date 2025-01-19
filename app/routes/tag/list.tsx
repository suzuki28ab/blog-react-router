import { Box, Heading } from "@yamada-ui/react";
import { type LoaderFunctionArgs, useLoaderData } from "react-router";
import { ArticleList } from "~/components/home/ArticleList";
import { getArticlesByTag } from "~/services/article";

export async function loader({ params }: LoaderFunctionArgs) {
  const { tag, page } = params;
  if (!tag) throw new Error("Tag is required");

  const pageNumber = page ? Number(page) : 1;
  const articles = getArticlesByTag(decodeURIComponent(tag));
  const itemsPerPage = 10;
  const start = (pageNumber - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  return {
    articles: articles.slice(start, end),
    tag: decodeURIComponent(tag),
    totalPages: Math.ceil(articles.length / itemsPerPage),
    currentPage: pageNumber,
  };
}

export default function TagPage() {
  const { articles, tag } = useLoaderData<typeof loader>();

  return (
    <Box>
      <Heading as="h1" fontSize="4xl" textAlign="center" mb={8}>
        Tag: {tag}
      </Heading>
      <ArticleList articles={articles} />
    </Box>
  );
}
