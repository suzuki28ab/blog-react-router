import { Box, Heading, SimpleGrid } from "@yamada-ui/react";
import type { Article } from "~/services/article";
import { ArticleCard } from "./ArticleCard";

type ArticleListProps = {
  articles: Article[];
};

export const ArticleList = ({ articles }: ArticleListProps) => {
  return (
    <Box
      as="section"
      maxW="1200px"
      mx="auto"
      mt={{ base: 10, md: 16 }}
      mb={{ base: 10, md: 16 }}
      px={{ base: 4, md: 8 }}
    >
      <Heading fontSize={{ base: "2xl", md: "3xl" }} mb={6} color="brand.300">
        Latest Articles
      </Heading>
      <SimpleGrid
        templateColumns="repeat(auto-fit, minmax(300px, 1fr))"
        gap={4}
      >
        {articles.map((article) => (
          <ArticleCard key={article.slug} {...article} />
        ))}
      </SimpleGrid>
    </Box>
  );
};
