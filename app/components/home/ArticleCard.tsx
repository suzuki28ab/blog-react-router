import { Box, HStack, Heading, Tag, Text } from "@yamada-ui/react";
import { Link } from "react-router";

type ArticleCardProps = {
  title: string;
  slug: string;
  createdAt: string;
  category?: string;
  tags?: string[];
};

export const ArticleCard = ({
  title,
  slug,
  createdAt,
  category,
  tags,
}: ArticleCardProps) => {
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
        {category && (
          <Tag colorScheme="primary" size="sm" mb={2}>
            {category}
          </Tag>
        )}
        <Heading fontSize="lg" mb={2} color="brand.300">
          {title}
        </Heading>
        <Text fontSize="sm" color="gray.500" mb={2}>
          {createdAt}
        </Text>
        {tags && tags.length > 0 && (
          <HStack spacing={2} mt={2} flexWrap="wrap">
            {tags.map((tag) => (
              <Tag key={tag} size="sm" variant="outline">
                {tag}
              </Tag>
            ))}
          </HStack>
        )}
      </Box>
    </Box>
  );
};
