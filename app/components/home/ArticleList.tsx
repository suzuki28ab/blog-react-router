import { Box, Center, Pagination, SimpleGrid } from "@yamada-ui/react";
import { useNavigate } from "react-router";
import type { Article } from "~/services/article";
import { ArticleCard } from "./ArticleCard";

type ArticleListProps = {
  articles: Article[];
  totalPages?: number;
  currentPage?: number;
  category?: string;
  tag?: string;
};

export const ArticleList = ({
  articles,
  totalPages = 1,
  currentPage = 1,
  category,
  tag,
}: ArticleListProps) => {
  const navigate = useNavigate();
  return (
    <Box
      as="section"
      maxW="1200px"
      mx="auto"
      mt={{ base: 10, md: 16 }}
      mb={{ base: 10, md: 16 }}
      px={{ base: 4, md: 8 }}
    >
      <SimpleGrid
        templateColumns="repeat(auto-fit, minmax(300px, 1fr))"
        gap={4}
        mb={8}
      >
        {articles.map((article) => (
          <ArticleCard key={article.slug} {...article} />
        ))}
      </SimpleGrid>
      {totalPages > 1 && (
        <Center>
          <Pagination
            colorScheme="neutral"
            variant="subtle"
            total={totalPages}
            page={currentPage}
            sibling={1}
            onChange={(page) => {
              if (category) {
                navigate(`/category/${encodeURIComponent(category)}/${page}`);
              } else if (tag) {
                navigate(`/tag/${encodeURIComponent(tag)}/${page}`);
              }
            }}
          />
        </Center>
      )}
    </Box>
  );
};
