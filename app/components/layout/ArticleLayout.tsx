import { Box, Container, HStack, Heading, Tag, Text } from "@yamada-ui/react";
import { type LoaderFunctionArgs, Outlet } from "react-router";
import { getAllArticles } from "~/services/article";
import type { Route } from "./+types/ArticleLayout";

export async function loader(args: LoaderFunctionArgs) {
  const articles = getAllArticles();
  const url = new URL(args.request.url);
  const slug = url.pathname.split("/").pop();
  const article = articles.find((article) => article.slug === slug);

  return { article };
}

export default function ArticleLayout({ loaderData }: Route.ComponentProps) {
  const { article } = loaderData;

  return (
    <Box py="6">
      <Container maxW="1200px" mx="auto">
        <Box as="main" p="6" bg="white" rounded="md" shadow="md">
          {article && (
            <Box borderBottom="4px solid #e2e8f0" pb={4} mb={4}>
              <Tag colorScheme="primary" size="sm" mb={2}>
                {article.category}
              </Tag>
              <Heading as="h1" fontSize="3xl" mb={2} color="brand.300">
                {article.title}
              </Heading>
              <Text fontSize="sm" color="gray.500" mb={2}>
                {article.createdAt}
              </Text>
              {article.tags && article.tags.length > 0 && (
                <HStack spacing={2} mb={4} flexWrap="wrap">
                  {article.tags.map((tag) => (
                    <Tag key={tag} size="sm" variant="outline">
                      {tag}
                    </Tag>
                  ))}
                </HStack>
              )}
            </Box>
          )}
          <Outlet />
        </Box>
      </Container>
    </Box>
  );
}
