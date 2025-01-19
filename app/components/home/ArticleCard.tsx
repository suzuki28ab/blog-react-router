import { Box, Button, Heading } from "@yamada-ui/react";
import { Link } from "react-router";

type ArticleCardProps = {
  title: string;
  slug: string;
};

export const ArticleCard = ({ title, slug }: ArticleCardProps) => {
  return (
    <Box bg="white" boxShadow="md" borderRadius="md" overflow="hidden">
      <Box p={4}>
        <Heading fontSize="lg" mb={2} color="brand.300">
          {title}
        </Heading>

        <Button
          as={Link}
          to={`/articles/${slug}`}
          mt={4}
          colorScheme="blue"
          variant="outline"
          size="sm"
        >
          Read More
        </Button>
      </Box>
    </Box>
  );
};
