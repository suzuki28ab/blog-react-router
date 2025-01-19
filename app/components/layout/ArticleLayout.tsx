import { Box, Container } from "@yamada-ui/react";
import { Outlet } from "react-router";

export default function ArticleLayout() {
  return (
    <Box py="6">
      <Container maxW="container.lg">
        <Box as="main" p="6" bg="white" rounded="md" shadow="md">
          <Outlet />
        </Box>
      </Container>
    </Box>
  );
}
