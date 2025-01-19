import { Box, Heading, Text } from "@yamada-ui/react";
import { Link } from "react-router";

type ArticleCardProps = {
  title: string;
  slug: string;
  createdAt: string;
};

export const ArticleCard = ({ title, slug, createdAt }: ArticleCardProps) => {
  return (
    <Box
      as={Link}
      to={`/articles/${slug}`}
      bg="white"
      boxShadow="md"
      borderRadius="md"
      overflow="hidden"
      transition="all 0.2s"
      _hover={{
        transform: "translateY(-4px)",
        boxShadow: "lg",
      }}
      cursor="pointer"
      textDecoration="none"
    >
      <Box p={4}>
        <Heading fontSize="lg" mb={2} color="brand.300">
          {title}
        </Heading>
        <Text fontSize="sm" color="gray.500">
          {createdAt}
        </Text>
      </Box>
    </Box>
  );
};
