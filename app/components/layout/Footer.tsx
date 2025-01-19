import { Box, Text } from "@yamada-ui/react";

export const Footer = () => {
  return (
    <Box
      as="footer"
      bg="brand.100"
      py={6}
      px={{ base: 4, md: 8 }}
      textAlign="center"
    >
      <Text color="gray.700">© 2024 MyChakraBlog</Text>
    </Box>
  );
};
