import { Box, Container, Heading, Text } from "@yamada-ui/react";
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
            <>
              <Text fontSize="sm" color="gray.500" mb="4">
                {article.createdAt}
              </Text>
              <Heading as="h1" fontSize="3xl" mb={4} color="brand.300">
                {article.title}
              </Heading>
            </>
          )}
          <Outlet />
        </Box>
      </Container>
    </Box>
  );
}
